import { useState } from 'react'
import { Image, Stage, Layer } from 'react-konva';
import './App.css'
import Test from './pages/Test'
import useImage from 'use-image'
import png000 from './assets/imgs/chars/000.png'
import World from './pages/World';

function App() {
  const [image] = useImage(png000);
  console.log(image)
  return (
    <>
      <div className='w-full h-full'>
        <World />
      </div>
    </>
  )
}

export default App
