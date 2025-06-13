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
  const codeObjectsRef = useRef<any[]>([]);
  const networkNodesRef = useRef<any[]>([]);
  const dataStreamRef = useRef<any>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const animationIdRef = useRef<number>();
  const timeRef = useRef(0);

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

    // Create floating code blocks (representing programming languages)
    const codeObjects: any[] = [];
    const codeBlockGeometry = new THREE.BoxGeometry(0.8, 0.8, 0.1);
    
    // Different materials for different programming concepts
    const materials = [
      new THREE.MeshBasicMaterial({ color: 0x61dafb, transparent: true, opacity: 0.8 }), // React blue
      new THREE.MeshBasicMaterial({ color: 0x68bc71, transparent: true, opacity: 0.8 }), // Node.js green
      new THREE.MeshBasicMaterial({ color: 0xf7df1e, transparent: true, opacity: 0.8 }), // JavaScript yellow
      new THREE.MeshBasicMaterial({ color: 0x306998, transparent: true, opacity: 0.8 }), // Python blue
      new THREE.MeshBasicMaterial({ color: 0xff6b35, transparent: true, opacity: 0.8 }), // TypeScript orange
      new THREE.MeshBasicMaterial({ color: 0x764abc, transparent: true, opacity: 0.8 }), // Redux purple
    ];

    for (let i = 0; i < 12; i++) {
      const codeBlock = new THREE.Mesh(codeBlockGeometry, materials[i % materials.length]);
      codeBlock.position.set(
        (Math.random() - 0.5) * 16,
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 8
      );
      codeBlock.rotation.set(
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        Math.random() * Math.PI
      );
      scene.add(codeBlock);
      codeObjects.push(codeBlock);
    }

    // Create network nodes (representing data structures and algorithms)
    const networkNodes: any[] = [];
    const nodeGeometry = new THREE.SphereGeometry(0.15, 8, 8);
    const nodeMaterial = new THREE.MeshBasicMaterial({ 
      color: 0x6366f1, 
      transparent: true, 
      opacity: 0.9 
    });

    for (let i = 0; i < 20; i++) {
      const node = new THREE.Mesh(nodeGeometry, nodeMaterial);
      node.position.set(
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 12,
        (Math.random() - 0.5) * 10
      );
      scene.add(node);
      networkNodes.push(node);
    }

    // Create connecting lines between nodes (representing connections/algorithms)
    const lineMaterial = new THREE.LineBasicMaterial({ 
      color: 0x6366f1, 
      transparent: true, 
      opacity: 0.3 
    });

    for (let i = 0; i < networkNodes.length; i++) {
      for (let j = i + 1; j < networkNodes.length; j++) {
        if (Math.random() > 0.7) { // Only connect some nodes
          const points = [
            networkNodes[i].position,
            networkNodes[j].position
          ];
          const geometry = new THREE.BufferGeometry().setFromPoints(points);
          const line = new THREE.Line(geometry, lineMaterial);
          scene.add(line);
        }
      }
    }

    // Create data stream particles (representing data flow)
    const streamGeometry = new THREE.BufferGeometry();
    const streamCount = 500;
    const streamPositions = new Float32Array(streamCount * 3);
    const streamColors = new Float32Array(streamCount * 3);

    for (let i = 0; i < streamCount; i++) {
      streamPositions[i * 3] = (Math.random() - 0.5) * 30;
      streamPositions[i * 3 + 1] = (Math.random() - 0.5) * 20;
      streamPositions[i * 3 + 2] = (Math.random() - 0.5) * 15;

      // Random colors representing different data types
      const color = new THREE.Color();
      color.setHSL(Math.random() * 0.3 + 0.5, 0.8, 0.6); // Blue to purple range
      streamColors[i * 3] = color.r;
      streamColors[i * 3 + 1] = color.g;
      streamColors[i * 3 + 2] = color.b;
    }

    streamGeometry.setAttribute('position', new THREE.BufferAttribute(streamPositions, 3));
    streamGeometry.setAttribute('color', new THREE.BufferAttribute(streamColors, 3));

    const streamMaterial = new THREE.PointsMaterial({
      size: 0.05,
      vertexColors: true,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending
    });

    const dataStream = new THREE.Points(streamGeometry, streamMaterial);
    scene.add(dataStream);

    // Create binary code rain effect
    const binaryGeometry = new THREE.BufferGeometry();
    const binaryCount = 200;
    const binaryPositions = new Float32Array(binaryCount * 3);

    for (let i = 0; i < binaryCount; i++) {
      binaryPositions[i * 3] = (Math.random() - 0.5) * 25;
      binaryPositions[i * 3 + 1] = Math.random() * 15 + 5;
      binaryPositions[i * 3 + 2] = (Math.random() - 0.5) * 12;
    }

    binaryGeometry.setAttribute('position', new THREE.BufferAttribute(binaryPositions, 3));
    const binaryMaterial = new THREE.PointsMaterial({
      size: 0.03,
      color: 0x00ff41, // Matrix green
      transparent: true,
      opacity: 0.6
    });

    const binaryRain = new THREE.Points(binaryGeometry, binaryMaterial);
    scene.add(binaryRain);

    // Camera position
    camera.position.z = 12;

    // Store references
    sceneRef.current = scene;
    rendererRef.current = renderer;
    codeObjectsRef.current = codeObjects;
    networkNodesRef.current = networkNodes;
    dataStreamRef.current = dataStream;

    // Mouse interaction
    const handleMouseMove = (event: MouseEvent) => {
      mouseRef.current.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouseRef.current.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    document.addEventListener('mousemove', handleMouseMove);

    // Animation loop
    const animate = () => {
      animationIdRef.current = requestAnimationFrame(animate);
      timeRef.current += 0.01;

      // Animate floating code blocks
      codeObjects.forEach((block, index) => {
        block.rotation.x += 0.005 + index * 0.001;
        block.rotation.y += 0.008 + index * 0.0005;
        block.position.y += Math.sin(timeRef.current + index) * 0.01;
        
        // Mouse interaction - code blocks react to cursor
        const mouseInfluence = 0.3;
        block.position.x += mouseRef.current.x * mouseInfluence * (1 + index * 0.1);
        block.position.y += mouseRef.current.y * mouseInfluence * (1 + index * 0.1);
      });

      // Animate network nodes (pulsing effect)
      networkNodes.forEach((node, index) => {
        const scale = 1 + Math.sin(timeRef.current * 2 + index) * 0.3;
        node.scale.setScalar(scale);
        
        // Subtle floating motion
        node.position.y += Math.sin(timeRef.current + index * 0.5) * 0.005;
      });

      // Animate data stream
      if (dataStream) {
        dataStream.rotation.y += 0.003;
        const positions = dataStream.geometry.attributes.position.array as Float32Array;
        
        for (let i = 0; i < positions.length; i += 3) {
          positions[i + 1] -= 0.05; // Move particles down
          if (positions[i + 1] < -10) {
            positions[i + 1] = 10; // Reset to top
          }
        }
        dataStream.geometry.attributes.position.needsUpdate = true;
      }

      // Animate binary rain
      if (binaryRain) {
        const positions = binaryRain.geometry.attributes.position.array as Float32Array;
        
        for (let i = 0; i < positions.length; i += 3) {
          positions[i + 1] -= 0.1; // Faster falling speed
          if (positions[i + 1] < -5) {
            positions[i + 1] = 15; // Reset to top
            positions[i] = (Math.random() - 0.5) * 25; // Random x position
          }
        }
        binaryRain.geometry.attributes.position.needsUpdate = true;
      }

      // Camera subtle movement for depth
      camera.position.x = Math.sin(timeRef.current * 0.5) * 0.5;
      camera.position.y = Math.cos(timeRef.current * 0.3) * 0.3;

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
