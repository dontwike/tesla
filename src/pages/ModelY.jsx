import React from 'react'
import Header from '../Components/Header'
import ModelPage from '../Components/ModelPage'

const ModelY = () => {
  return (
    <div>
      <Header/>
      <ModelPage class="modelY" name="Model Y" description="View Inventory" button1="Explore Inventory" button2="Custom Order" range="330mi" space="76cu ft" price="$40,240†"/>
    </div>
  )
}

export default ModelY