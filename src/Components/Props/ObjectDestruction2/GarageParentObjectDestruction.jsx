import React from 'react'
import CarChildObjectDestruction from './CarChildObjectDestruction'

const GarageParentObjectDestruction = () => {
  return (
    <>
        <h1> This is the Garage File</h1>
        <CarChildObjectDestruction brand="Ford" color="green"/>
        <CarChildObjectDestruction brand="Tata" color="Blue"/>
    </>
  )
}

export default GarageParentObjectDestruction