import { toast, ToastContainer } from 'react-toastify'
import './App.css'
import Banner from './components/Banner/Banner'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import { Suspense, useState } from 'react'
import Models from './components/Models/Models'
import Cart from './components/Cart/Cart'


const getModels = async () => {
  const res = await fetch('/models.json')
  return res.json()
}




function App() {
  const modelPromise = getModels();
  // console.log(modelPromise);

  const [activeTab, setActiveTab] = useState("models")
  const [carts, setCarts] = useState([])



  return (
    <>
      <Navbar />
      <Banner />



      {/* Tab buttons (Models & Cart) */}
      <div className="buttons mx-auto flex w-full max-w-md items-center gap-3 rounded-full border border-slate-200/70 bg-white/70 p-1.5">

        <button
          onClick={() => setActiveTab("models")}
          className={`flex-1 rounded-full px-6 py-3 text-sm font-semibold shadow-md shadow-pink-500/20 transition-colors duration-300 
            ${activeTab === "models"
              ? "bg-gradient-to-r from-pink-500 to-red-500 text-white hover:from-pink-600 hover:to-red-600"
              : "bg-white text-black"
            }`}
        >
          Models
        </button>

        <button
          onClick={() => setActiveTab("cart")}
          className={`flex-1 rounded-full px-6 py-3 text-sm font-semibold shadow-md shadow-pink-500/20 transition-colors duration-300 
            ${activeTab === "cart"
              ? "bg-gradient-to-r from-pink-500 to-red-500 text-white hover:from-pink-600 hover:to-red-600"
              : "bg-white text-black"
            }`}
        >
          Cart ({carts.length})
        </button>

      </div>



      <Suspense fallback={<div className='flex justify-center mx-auto text-black  py-12'>
        <span className="loading loading-dots loading-xl"></span>
      </div>}
      >

        {activeTab === "models" && <Models
          carts={carts}
          setCarts={setCarts}
          modelPromise={modelPromise}></Models>}

        {activeTab === "cart" && <Cart
          carts={carts}
          setCarts={setCarts}></Cart>}

      </Suspense>






      <Footer />

      <ToastContainer />
    </>
  )
}

export default App
