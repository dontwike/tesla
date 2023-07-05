import React from 'react'
import Header from '../Components/Header'
import ModelPage from '../Components/ModelPage'

const ModelX = () => {
  return (
    <div>
      <Header/>
    <ModelPage class="modelX" name="Model X" description="Explore Inventory" button1="Order Now" button2="Demo Drive" range="333mi" time="2.5s" mile="9.9s" power="1020hp" disclaimer="Specs displayed are Model X Plaid values."/>
    </div>
  )
}

export default ModelX