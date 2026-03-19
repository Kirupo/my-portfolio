import { useEffect, useRef } from "react";
import * as THREE from "three";

const createGradientTexture = (theme) => {
  const canvas = document.createElement("canvas");
  canvas.width = 512;
  canvas.height = 512;
  const ctx = canvas.getContext("2d");
  const gradient = ctx.createLinearGradient(0, 0, 512, 512);

  if (theme === "dark") {
    gradient.addColorStop(0, "rgba(30,41,78,0.42)");
    gradient.addColorStop(0.5, "rgba(88,36,138,0.34)");
    gradient.addColorStop(1, "rgba(11,15,26,0.4)");
  } else {
    gradient.addColorStop(0, "rgba(147,197,253,0.26)");
    gradient.addColorStop(0.5, "rgba(196,181,253,0.2)");
    gradient.addColorStop(1, "rgba(245,247,250,0.1)");
  }

  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  return new THREE.CanvasTexture(canvas);
};

function Background3D({ theme }) {
  const mountRef = useRef(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return undefined;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, 0.1, 100);
    camera.position.z = 9;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: "low-power" });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    renderer.setSize(window.innerWidth, window.innerHeight);
    container.appendChild(renderer.domElement);

    const geometry = new THREE.PlaneGeometry(22, 13, 36, 20);
    const texture = createGradientTexture(theme);
    const material = new THREE.MeshBasicMaterial({
      map: texture,
      transparent: true,
      opacity: theme === "dark" ? 0.14 : 0.1,
      side: THREE.DoubleSide,
      depthWrite: false,
    });
    const mesh = new THREE.Mesh(geometry, material);
    mesh.rotation.x = -0.65;
    mesh.position.y = -0.35;
    scene.add(mesh);

    const vertices = geometry.attributes.position;
    const base = new Float32Array(vertices.array);
    let frameId = 0;

    const animate = () => {
      if (!reduceMotion) {
        const t = performance.now() * 0.00012;
        for (let i = 0; i < vertices.count; i += 1) {
          const x = base[i * 3];
          const y = base[i * 3 + 1];
          vertices.array[i * 3 + 2] = base[i * 3 + 2] + Math.sin(x * 0.45 + t) * 0.16 + Math.cos(y * 0.55 + t) * 0.07;
        }
        vertices.needsUpdate = true;
      }

      renderer.render(scene, camera);
      frameId = window.requestAnimationFrame(animate);
    };
    animate();

    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("resize", onResize);
    return () => {
      window.cancelAnimationFrame(frameId);
      window.removeEventListener("resize", onResize);
      texture.dispose();
      geometry.dispose();
      material.dispose();
      renderer.dispose();
      if (container.contains(renderer.domElement)) container.removeChild(renderer.domElement);
    };
  }, [theme]);

  return <div ref={mountRef} className="pointer-events-none fixed inset-0 -z-10" aria-hidden="true" />;
}

export default Background3D;
