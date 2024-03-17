import { Suspense, useState, useEffect, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import Loader from "../components/Loader";
import Island from "../models/Island";
import Sky from "../models/Sky";
import Phoenix from "../models/Phoenix";
import Latios from "../models/Latios";
import HomeInfo from "../components/HomeInfo";
import soundon from "../assets/icons/soundon.png";
import soundoff from "../assets/icons/soundoff.png";

import audio from "../assets/sakura.mp3";
import drag from "../assets/icons/drag.png";

const Home = () => {
  const [isRotate, setIsRotate] = useState(false);
  const [currentStage, setCurrentStage] = useState(1);
  const [showHint, setShowHint] = useState(true);
  //audio
  const audioRef = useRef(new Audio(audio));
  audioRef.current.volume = 0.3;
  audioRef.current.loop = true;
  const [isPlayingMusic, setIsPlayingMusic] = useState(false);

  useEffect(() => {
    if (isPlayingMusic) {
      audioRef.current.play();
    }
    return () => {
      audioRef.current.pause();
    };
  }, [isPlayingMusic]);

  const adjuestIslandForScreenSize = () => {
    let screenScale = null;
    let screenPosition = [0, -6.5, -43];
    let rotation = [0.1, 4.7, 0];

    if (window.innerWidth < 768) {
      screenScale = [0.9, 0.9, 0.9];
    } else {
      screenScale = [1, 1, 1];
    }
    return [screenScale, screenPosition, rotation];
  };

  const adjuestLatiosForScreenSize = () => {
    let screenScale, screenPosition;

    if (window.innerWidth < 768) {
      screenScale = [0.3, 0.3, 0.3];
      screenPosition = [0, -2.1, -0.6];
    } else {
      screenScale = [0.5, 0.5, 0.5];
      screenPosition = [0, -3.6, -3];
    }
    return [screenScale, screenPosition, rotation];
  };

  const [islandScale, islandPosition, rotation] = adjuestIslandForScreenSize();
  const [planeScale, planePosition] = adjuestLatiosForScreenSize();

  return (
    <section className="w-full h-screen relative">
      <div className="absolute top-24 left-0 right-0 z-10 flex items-center justify-center">
        {currentStage && <HomeInfo currentStage={currentStage} />}
      </div>

      <Canvas
        className={`w-full h-screen bg-transparent ${
          isRotate ? "cursor-grabbing" : "cursor-grab"
        } `}
        camera={{ near: 0.1, far: 1000 }}
      >
        <Suspense fallback={<Loader />}>
          <directionalLight position={[1, 1, 1]} intensity={2} />
          <ambientLight intensity={0.5} />
          <spotLight />
          <hemisphereLight
            skyColor="#b1e1ff"
            groundColor="#000000"
            intensity={1}
          />
          <Phoenix />
          <Sky isRotate={isRotate} />
          <Island
            position={islandPosition}
            scale={islandScale}
            rotation={rotation}
            isRotate={isRotate}
            setIsRotate={setIsRotate}
            setCurrentStage={setCurrentStage}
            setShowHint={setShowHint}
          />
          <Latios
            position={planePosition}
            scale={planeScale}
            isRotate={isRotate}
            rotation={[0, 20, 0]}
          />
        </Suspense>
      </Canvas>
      {/* audio */}
      <div className="absolute bottom-2 left-2">
        <img
          src={isPlayingMusic ? soundon : soundoff}
          alt="sound"
          className="w-10 h-10 cursor-pointer object-contain"
          onClick={() => setIsPlayingMusic(!isPlayingMusic)}
        />
      </div>
      {/* hint */}
      {showHint && (
        <div className="absolute bottom-10 left-0 right-0 flex flex-col items-center">
          <p className="text-black-500 text-lg animate-bounce">
            Click &amp; drag to Explore
          </p>
          <div className="flex items-center justify-center animate-moveLeftRight">
            <img src={drag} alt="drag" className="w-6 h-6 mt-2" />
            <div className="absolute w-2 h-2 bg-red-500 rounded-full animate-redpoint" />
          </div>
        </div>
      )}
    </section>
  );
};

export default Home;
