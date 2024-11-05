import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductListing from './components/ProductListing';
import Model from './components/Model';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='background-div text-white'>
        <Header />
        <Hero />
      </div>
      <ProductListing />
      <div className='background-img text-white flex justify-end items-center lg:px-36'>
        <Model />
      </div>
    </>
  )
}

export default App
