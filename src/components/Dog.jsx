import React from 'react'
import { Canvas, useThree } from '@react-three/fiber'
import { OrbitControls , useGLTF} from '@react-three/drei'

const Dog = () => {

    const model = useGLTF("/Models/Treadmill FBX.glb")

    useThree(({camera, scene, gl})=>{
         console.log(camera.position)
    camera.position.z = 20

    })
   
  return (
    <>
        <primitive object={model.scene} position={[0,-10,0]} rotate = {[ 0, Math.PI/5, 0 ]} />
        <directionalLight position={[0,5,5]} color={0xFFFFFF} intensity={5}/>
        <OrbitControls />
    </>
  )
}
export default Dog