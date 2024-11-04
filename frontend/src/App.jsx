import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductListing from './components/ProductListing';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='background-div text-white'>
        <Header />
        <Hero />
      </div>
      <ProductListing />
    </>
  )
}

export default App
