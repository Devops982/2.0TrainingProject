import React from 'react'

const CarChildObjectDestruction = (props) => {
    console.log(props);
    const{brand, color} = props;
  return (
    <>
        <h1>My car brand is {brand} </h1>
        <h1>My car color is {color} </h1>
    </>
  )
}

export default CarChildObjectDestruction