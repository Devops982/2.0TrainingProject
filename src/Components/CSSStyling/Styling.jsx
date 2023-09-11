import React from 'react'

const Styling = () => {

    const stylevariable ={
        color:"blue",
        fontSize:"20px",
    }
  return (
    <>
        <div className='main1'>
            <h1>Postal Services</h1>
        </div>

        <div id='main2'>
            <h1>Postal Services</h1>
        </div>

        {/* <div style={{fontFamily:"sans-serif",fontSize:"120px"}}>
            <h1>Postal Services</h1>
        {/* </div> */}
        {/* //Inline csss  */}

        <div style={stylevariable}>
            <h1>Postal Services</h1>
        </div>
    </>
  )
}

export default Styling