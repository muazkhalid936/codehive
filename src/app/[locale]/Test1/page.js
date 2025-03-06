"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import OurIndustries from "../../../components/OurIndustries/OurIndustries"
export default function ModelPage() {
  const { scene } = useGLTF("/l.gltf"); // Ensure model is in 'public' folder

  return (
    <div className="bg-[#000B17]">
<OurIndustries />
    </div>
  );
}
