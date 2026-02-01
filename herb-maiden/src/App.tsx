import { useState } from 'react'
import { Image, Stage, Layer } from 'react-konva';
import './App.css'
import Test from './pages/Test'
import useImage from 'use-image'
import png000 from './assets/imgs/chars/000.png'

function App() {
  const [image] = useImage(png000);
  console.log(image)
  return (
    <>
      <Test />
    </>
  )
}

export default App
