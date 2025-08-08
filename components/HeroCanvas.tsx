"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

/**
 * Full-bleed responsive Three.js canvas for the hero section.
 * - Renders a glossy TorusKnot with floating particles
 * - Parallax camera and scroll-driven depth
 * - PixelRatio capped for perf
 */
export default function HeroCanvas() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const animationFrameRef = useRef<number | null>(null);

  useEffect(() => {
    const container = containerRef.current!;

    // Scene
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x050507);

    // Camera
    const camera = new THREE.PerspectiveCamera(
      55,
      container.clientWidth / container.clientHeight,
      0.1,
      100
    );
    camera.position.set(0, 0.2, 4.2);

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false });
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.8));
    renderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Lights
    const ambient = new THREE.AmbientLight(0xffffff, 0.6);
    const dir1 = new THREE.DirectionalLight(0x82ffb4, 2.0);
    dir1.position.set(2.5, 3, 2);
    const dir2 = new THREE.DirectionalLight(0x6bb6ff, 1.4);
    dir2.position.set(-2.2, -1.5, 1.5);
    scene.add(ambient, dir1, dir2);

    // Main object
    const knotGeometry = new THREE.TorusKnotGeometry(0.9, 0.28, 256, 32);
    const material = new THREE.MeshStandardMaterial({
      color: 0x79ffa8,
      roughness: 0.18,
      metalness: 0.75,
      envMapIntensity: 1.0,
    });
    const knot = new THREE.Mesh(knotGeometry, material);
    scene.add(knot);

    // Floating particles (stars)
    const particleGeometry = new THREE.BufferGeometry();
    const particleCount = 800;
    const positions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      positions[i * 3 + 0] = (Math.random() - 0.5) * 16;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 16;
    }
    particleGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(positions, 3)
    );
    const particles = new THREE.Points(
      particleGeometry,
      new THREE.PointsMaterial({ color: 0x6bb6ff, size: 0.02 })
    );
    scene.add(particles);

    // Mouse parallax
    const targetRotation = { x: 0, y: 0 };
    const onPointerMove = (ev: PointerEvent) => {
      const rect = container.getBoundingClientRect();
      const nx = (ev.clientX - rect.left) / rect.width - 0.5; // -0.5..0.5
      const ny = (ev.clientY - rect.top) / rect.height - 0.5;
      targetRotation.x = ny * 0.6;
      targetRotation.y = nx * 0.9;
    };
    window.addEventListener("pointermove", onPointerMove);

    // Scroll-driven depth
    let scrollY = window.scrollY;
    const onScroll = () => {
      scrollY = window.scrollY;
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    // Resize
    const handleResize = () => {
      const { clientWidth, clientHeight } = container;
      camera.aspect = clientWidth / clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(clientWidth, clientHeight);
    };
    const ro = new ResizeObserver(handleResize);
    ro.observe(container);
    window.addEventListener("resize", handleResize);

    // Animation loop
    let time = 0;
    const animate = () => {
      const delta = 0.016; // approx; no need for clock precision here
      time += delta;

      // Easing towards target rotation (mouse)
      knot.rotation.x += (targetRotation.x - knot.rotation.x) * 0.06;
      knot.rotation.y += (targetRotation.y - knot.rotation.y) * 0.06;

      // Idle rotation
      knot.rotation.z += 0.005;

      // Scroll: move camera slightly in/out and add particle drift
      const scrollFactor = Math.min(scrollY / window.innerHeight, 3);
      camera.position.z = 4.2 - scrollFactor * 0.8;
      camera.position.y = 0.2 + Math.sin(time * 0.6) * 0.05;
      particles.rotation.y += 0.0009;
      particles.position.y = Math.sin(time * 0.2) * 0.2;

      renderer.render(scene, camera);
      animationFrameRef.current = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", handleResize);
      ro.disconnect();
      // Cleanup Three objects to prevent memory leaks
      scene.traverse((obj) => {
        if ((obj as THREE.Mesh).geometry) (obj as THREE.Mesh).geometry.dispose?.();
        if ((obj as THREE.Mesh).material) {
          const mat = (obj as THREE.Mesh).material as THREE.Material | THREE.Material[];
          if (Array.isArray(mat)) mat.forEach((m) => m.dispose?.());
          else mat.dispose?.();
        }
      });
      renderer.dispose();
      container.removeChild(renderer.domElement);
      rendererRef.current = null;
    };
  }, []);

  return <div ref={containerRef} className="absolute inset-0 -z-0" />;
}
