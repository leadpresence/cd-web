"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

const PILL_COUNT = 18;
const PARTICLE_COUNT = 60;

interface Pill {
  mesh: THREE.Mesh;
  speed: number;
  rotSpeed: THREE.Vector3;
  floatOffset: number;
  floatAmp: number;
  baseY: number;
}

export default function HeroCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0xfafaf8, 0.008);

    const camera = new THREE.PerspectiveCamera(
      50,
      container.clientWidth / container.clientHeight,
      0.1,
      100
    );
    camera.position.set(0, 0, 30);

    const renderer = new THREE.WebGLRenderer({
      antialias: window.devicePixelRatio < 2,
      alpha: true,
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);

    /* ── Lighting ── */
    const ambient = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambient);

    const dir1 = new THREE.DirectionalLight(0x2d8b7e, 0.8);
    dir1.position.set(10, 15, 10);
    scene.add(dir1);

    const dir2 = new THREE.DirectionalLight(0xd4a574, 0.4);
    dir2.position.set(-10, -5, 8);
    scene.add(dir2);

    const point = new THREE.PointLight(0x4fa399, 0.5, 50);
    point.position.set(0, 10, 15);
    scene.add(point);

    /* ── Pill capsules ── */
    const pillColors = [
      0x2d8b7e, 0x4fa399, 0xd4a574, 0xe2b896,
      0xf4d49f, 0x1f6258, 0xa8dbd3, 0xffffff,
    ];

    const pills: Pill[] = [];
    const capsuleGeo = new THREE.CapsuleGeometry(0.4, 0.8, 8, 12);

    for (let i = 0; i < PILL_COUNT; i++) {
      const color = pillColors[i % pillColors.length];
      const mat = new THREE.MeshStandardMaterial({
        color,
        roughness: 0.35,
        metalness: 0.05,
        transparent: true,
        opacity: 0.35 + Math.random() * 0.4,
      });

      const mesh = new THREE.Mesh(capsuleGeo, mat);
      const scale = 0.3 + Math.random() * 1.0;
      mesh.scale.set(scale, scale, scale);

      // Push pills to edges, away from center text area
      let px = (Math.random() - 0.5) * 55;
      const py = (Math.random() - 0.5) * 35;
      if (Math.abs(px) < 12) px += (px >= 0 ? 14 : -14);
      mesh.position.set(px, py, -8 - Math.random() * 15);

      mesh.rotation.set(
        Math.random() * Math.PI * 2,
        Math.random() * Math.PI * 2,
        Math.random() * Math.PI * 2
      );

      scene.add(mesh);

      pills.push({
        mesh,
        speed: 0.1 + Math.random() * 0.3,
        rotSpeed: new THREE.Vector3(
          (Math.random() - 0.5) * 0.01,
          (Math.random() - 0.5) * 0.015,
          (Math.random() - 0.5) * 0.008
        ),
        floatOffset: Math.random() * Math.PI * 2,
        floatAmp: 0.3 + Math.random() * 0.8,
        baseY: mesh.position.y,
      });
    }

    /* ── Particle dust ── */
    const particleGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(PARTICLE_COUNT * 3);
    const sizes = new Float32Array(PARTICLE_COUNT);

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 60;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 40;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 30 - 5;
      sizes[i] = 0.5 + Math.random() * 1.5;
    }

    particleGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    particleGeo.setAttribute("size", new THREE.BufferAttribute(sizes, 1));

    const particleMat = new THREE.PointsMaterial({
      color: 0x2d8b7e,
      size: 0.12,
      transparent: true,
      opacity: 0.4,
      sizeAttenuation: true,
    });

    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    /* ── Mouse tracking ── */
    const mouse = { x: 0, y: 0 };
    const targetMouse = { x: 0, y: 0 };

    const onMouseMove = (e: MouseEvent) => {
      targetMouse.x = (e.clientX / window.innerWidth - 0.5) * 2;
      targetMouse.y = -(e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener("mousemove", onMouseMove);

    /* ── Animation loop ── */
    let time = 0;
    let animId: number;

    const animate = () => {
      animId = requestAnimationFrame(animate);
      time += 0.008;

      mouse.x += (targetMouse.x - mouse.x) * 0.03;
      mouse.y += (targetMouse.y - mouse.y) * 0.03;

      camera.position.x = mouse.x * 2;
      camera.position.y = mouse.y * 1.5;
      camera.lookAt(0, 0, 0);

      for (const pill of pills) {
        pill.mesh.rotation.x += pill.rotSpeed.x;
        pill.mesh.rotation.y += pill.rotSpeed.y;
        pill.mesh.rotation.z += pill.rotSpeed.z;
        pill.mesh.position.y =
          pill.baseY + Math.sin(time * pill.speed + pill.floatOffset) * pill.floatAmp;
      }

      const posArr = particleGeo.attributes.position.array as Float32Array;
      for (let i = 0; i < PARTICLE_COUNT; i++) {
        posArr[i * 3 + 1] += Math.sin(time + i) * 0.003;
      }
      particleGeo.attributes.position.needsUpdate = true;

      renderer.render(scene, camera);
    };

    animate();

    /* ── Resize ── */
    const onResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", onResize);
      renderer.dispose();
      capsuleGeo.dispose();
      particleGeo.dispose();
      particleMat.dispose();
      pills.forEach((p) => (p.mesh.material as THREE.Material).dispose());
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 z-0 pointer-events-none"
      aria-hidden="true"
    />
  );
}
