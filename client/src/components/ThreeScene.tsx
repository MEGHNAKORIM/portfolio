import { useEffect, useRef } from 'react';

declare global {
  interface Window {
    THREE: any;
  }
}

export default function ThreeScene() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const sceneRef = useRef<any>(null);
  const rendererRef = useRef<any>(null);
  const cubeRef = useRef<any>(null);
  const torusRef = useRef<any>(null);
  const particlesRef = useRef<any>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const animationIdRef = useRef<number>();

  useEffect(() => {
    if (!canvasRef.current || !window.THREE) return;

    const canvas = canvasRef.current;
    const THREE = window.THREE;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);

    // Create main spinning cube
    const cubeGeometry = new THREE.BoxGeometry(2, 2, 2);
    const cubeMaterial = new THREE.MeshNormalMaterial({ 
      transparent: true, 
      opacity: 0.8,
      wireframe: false 
    });
    const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
    cube.position.set(3, 0, 0);
    scene.add(cube);

    // Create torus
    const torusGeometry = new THREE.TorusGeometry(1.5, 0.4, 16, 100);
    const torusMaterial = new THREE.MeshNormalMaterial({ 
      transparent: true, 
      opacity: 0.6,
      wireframe: true 
    });
    const torus = new THREE.Mesh(torusGeometry, torusMaterial);
    torus.position.set(-3, 0, 0);
    scene.add(torus);

    // Create particle system
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 1000;
    const posArray = new Float32Array(particlesCount * 3);

    for(let i = 0; i < particlesCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 20;
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.02,
      color: 0x6366f1,
      transparent: true,
      opacity: 0.8
    });

    const particles = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particles);

    // Camera position
    camera.position.z = 8;

    // Store references
    sceneRef.current = scene;
    rendererRef.current = renderer;
    cubeRef.current = cube;
    torusRef.current = torus;
    particlesRef.current = particles;

    // Mouse interaction
    const handleMouseMove = (event: MouseEvent) => {
      mouseRef.current.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouseRef.current.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    document.addEventListener('mousemove', handleMouseMove);

    // Animation loop
    const animate = () => {
      animationIdRef.current = requestAnimationFrame(animate);

      // Rotate objects
      if (cubeRef.current) {
        cubeRef.current.rotation.x += 0.01;
        cubeRef.current.rotation.y += 0.01;
      }

      if (torusRef.current) {
        torusRef.current.rotation.x += 0.02;
        torusRef.current.rotation.z += 0.01;
      }

      if (particlesRef.current) {
        particlesRef.current.rotation.y += 0.002;
      }

      // Mouse interaction
      if (cubeRef.current && torusRef.current) {
        cubeRef.current.position.x = 3 + mouseRef.current.x * 0.5;
        cubeRef.current.position.y = mouseRef.current.y * 0.5;
        torusRef.current.position.x = -3 - mouseRef.current.x * 0.3;
        torusRef.current.position.y = -mouseRef.current.y * 0.3;
      }

      renderer.render(scene, camera);
    };

    animate();

    // Handle window resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }
      if (rendererRef.current) {
        rendererRef.current.dispose();
      }
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef}
      className="absolute inset-0 w-full h-full z-0"
      style={{ pointerEvents: 'none' }}
    />
  );
}
