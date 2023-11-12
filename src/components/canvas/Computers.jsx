import React, { Suspense, useEffect, useState , useRef} from "react";
import { Canvas, useFrame} from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
  const computer = useGLTF("./fish_getting_smashed/scene.gltf");
  // const meshRef = useRef(); // Create a ref for the mesh

  // // Rotate the mesh on every frame
  // useFrame(() => {
  //   if (meshRef.current) {
  //     meshRef.current.rotation.y += 0.065; // Adjust rotation speed here
  //   }
  // ref={meshRef}
  // });
  return (
    <mesh >
      {/* Light for all the 3D image */}
      <hemisphereLight intensity={0.9} groundColor='black' />
      {/* Flash Light for all the 3D image */}
      <spotLight
        position={[20, 0, 0]}
        angle={0.12}
        penumbra={1}
        intensity={0.4}
        castShadow
        shadow-mapSize={1024}
      />
      <primitive 

        object={computer.scene}       
        scale={isMobile ? 3.5 : 4.5}
        //arg1= zoom, arg2= up, down , agr 3: left right
        position={isMobile ? [0, -3.4, 0] : [0, -3.2, 0]}
        rotation={[0, 1.5, 0]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop='demand'
      shadows
      dpr={[1, 2]}
      camera={{ position: [25, 3, 5], fov: 22 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          // Zooming the 3D image
          enableZoom={false}
          enableRotate={true} // Ensure this is true to allow rotation
          // Not allowing up and down. Only left and right
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};




export default ComputersCanvas;
