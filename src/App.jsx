import { useEffect, } from 'react'
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css'
import Banner from './components/Banner/Banner'
import Card from './components/Card/Card'
import Navbar from './components/Navbar/Navbar'
import { useState } from 'react'
import Cook from './components/Cooking/Cook'
import Cooking from './components/Cooking/Cooking'


function App() {
  const [cards,setCards] = useState([])
  const [cook,setCook] = useState([])
  const [cooking,setCooking] = useState([])
 


  useEffect(()=>{
    fetch('./data.json')
    .then(res => res.json())
    .then(cards => setCards(cards))
  },[])

  
  
  const handleCard = (card) =>{
   
    
    const isExist = cook.find(c => c.recipe_id == card.recipe_id)
    if(!isExist){
      setCook([...cook,card])
    }
    else{
      toast('This card already exist')
      
    }
    
  }

  const handleCooking = (cok) =>{
    const isExist = cook.filter(c=> c.recipe_id !== cok.recipe_id)
    setCook(isExist)
    setCooking([...cooking,cok])
    
  }
 
  
  
  return (
    <div className='lg:w-[1600px] w-[350px] mx-auto font-[font-family]'>
     
      
      <div className='lg:w-[1320px] w-[350px] mx-auto'>
      <Navbar></Navbar>
      <Banner></Banner>
        <div className='mt-[100px]'>
          <div className='text-center'>
          <h3 className='lg:text-[40px] text-2xl text-[#150B2B] font-semibold mb-5'>Our Recipes</h3>
          <p className='text-[#150B2B99] lg:text-[18px]'>Explore delicious meals with Our Recipes – your go-to source for tasty<br></br> dishes and culinary inspiration. Start cooking today!</p>
          </div>
          <div className='mt-12 grid lg:grid-cols-10 gap-10'> 
           
            <div className='lg:col-span-6 '>
              <div className='grid lg:grid-cols-2 grid-cols-1 gap-10'>
                {
                  cards.map((card => <Card key={card.id} card={card} handleCard={handleCard}></Card>))
                }
              </div>
              
            </div>
            <div className='col-span-4 mb-5 rounded-2xl border h-full w-[350px]   lg:w-full '>
             <div>
             <h3 className='text-[#282828] text-xl lg:text-2xl font-semibold text-center mt-8'>Want to cook:0<span>{cook.length}</span></h3>
             <div className='flex justify-center'>
             <hr className='mt-4 mb-6 w-[300px] '></hr>
             </div>
              <table className='table text-[#878787]'>
              <thead>
                <tr>
                    <th></th>
                    <th>Name</th>
                    <th>Time</th>
                    <th>Calories</th>
                </tr>
                </thead>
                <tbody>
                {
                  cook.map((c,idx) =>  <Cook key={idx} handleCooking={handleCooking} idx={idx} cook={c}></Cook>)
                }
                </tbody>
              </table>
               
             </div>
              <div className='mt-8'>
              <h3 className='text-[#282828] text-2xl font-semibold text-center'>Currently cooking:0<span>{cooking.length}</span></h3>
              <div className='flex justify-center'>
             <hr className='mt-4 mb-6 w-[300px] '></hr>
             </div>
              <table className='table text-[#878787]'>
              <thead>
                <tr>
                    <th></th>
                    <th>Name</th>
                    <th>Time</th>
                    <th>Calories</th>
                </tr>
                </thead>
                <tbody>
                {
                cooking.map((cng,idx) => <Cooking key={idx} idx={idx} cooking={cng}></Cooking>)
              }
                </tbody>
              </table>
              <div className='flex justify-end gap-5 p-5  text-[#282828CC] font-medium text-base'>
                <p>Total Time = </p>
                <p>Total Calories =</p>
              </div>
              
              </div>
             
            </div>
         
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
