import React from 'react'
import CarChildObjectDestruction from './ObjectDestruction/CarChildObjectDestruction'

const GarageParent = () => {
  return (
    <>
        <h1> This is the Garage File</h1>
        <CarChildObjectDestruction brand="Ford" color="green"/>
        <CarChildObjectDestruction brand="Tata" color="Blue"/>
    </>
  )
}

export default GarageParent