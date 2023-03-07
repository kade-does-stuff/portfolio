import { OrbitControls, Stage } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import Phone from './Phone'
import Tablet from './Tablet'
import React from 'react'

const MobileDesign = () => {
  return (
    <Canvas>
        <Stage environment="dawn" intensity={0.5}>
            <Tablet/>
        </Stage>
        <OrbitControls enableZoom={false}/>
    </Canvas>
  )
}

export default MobileDesign