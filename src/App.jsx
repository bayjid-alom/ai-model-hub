import { toast, ToastContainer } from 'react-toastify'
import './App.css'
import Banner from './components/Banner/Banner'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import { Suspense } from 'react'
import Models from './components/Models/Models'


const getModels = async () => {
  const res = await fetch('/models.json')
  return res.json()
}


function App() {
  const modelPromise = getModels();
  // console.log(modelPromise);


  return (
    <>

      <Navbar />
      <Banner />


      <Suspense fallback={<div className='flex justify-center mx-auto text-black  py-12'>
        <span className="loading loading-dots loading-xl"></span>
      </div>}
      >
        <Models modelPromise={modelPromise}></Models>
      </Suspense>



      <Footer />

      <ToastContainer />
    </>
  )
}

export default App
