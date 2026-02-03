import './App.css'
import useImage from 'use-image'
import png000 from './assets/imgs/chars/000.png'
import Test2 from './pages/Test2';

function App() {
  const [image] = useImage(png000);
  console.log(image)
  return (
    <>
      <div className='w-full h-full'>
        <Test2 />
      </div>
    </>
  )
}

export default App
