import React from 'react'
import './info.css'
 function Info(props) {
    return (
        <div>
            {props.infoOpen &&
<div className='wrapper2' id='wrapper2'>
<div className='info-card'>
    <div className='info-card-block'>
    <h1 onClick={()=>{
        props.infoOpen(false)
        props.detailsOpen(true)
    }}>Products   Mac   MacBook Air</h1>
        <div className='info-img'></div>
        <h3 className='price'>Price: 1200$</h3>
        <div className='text'>
        <h2>MacBook Air</h2>
        <h3>Power. It’s in the Air.</h3>
        <p>Our thinnest, lightest notebook, completely transformed 
by the Apple M1 chip. CPU speeds up to 3.5x faster. 
GPU speeds up to 5x faster. Our most advanced 
Neural Engine for up to 9x faster machine learning. 
The longest battery life ever in a MacBook Air. And a silent, 
fanless design. This much power has never been this ready to go.</p>
</div>
    </div>
    <div className='info-card-block2'>
    <h2>Small chip. Giant leap.</h2>
    <p>It’s here. Our first chip designed specifically for Mac. Packed with an astonishing <br/>
16 billion transistors, the Apple M1 system on a chip (SoC) integrates the CPU, GPU, <br/>
Neural Engine, I/O, and so much more onto a single tiny chip. With incredible performance, <br/>
custom technologies, and industry-leading power efficiency,1 M1 is not just a next step <br/>
for Mac — it’s another level entirely.</p>
    </div>
    <button className='add'>ADD TO BAG</button>
</div>
</div>
 }  
 </div>
 )
}
export default Info