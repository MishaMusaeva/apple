import React from 'react'
import './details.css'
import heart from '../../images/heart.svg'
 function Details(props) {
    return (
        <div>
{props.detailsOpen &&
<div className='wrapper2' id='wrapper2'
onClick={props.detailsClose}>
<div className='modal1'>
<h2 onClick={props.detailsOpen}>Products   Mac</h2>
<div className='detail-card'>
        <div className='detail-card1' onClick={props.infoOpen}>
                <img className='like' src={heart}/>
                <h3>MacBook Air</h3>
        </div>
        <div className='detail-card1' onClick={props.infoOpen} >
        <img className='like' src={heart}/>
        <h3>MacBook Air</h3>
        </div>
        <div className='detail-card1' onClick={props.infoOpen}>
        <img className='like' src={heart}/>
        <h3>MacBook Air</h3>
        </div>
        <div className='detail-card1 detail-card4' onClick={props.infoOpen}>
        <img className='like' src={heart}/>
        <h3>MacBook Air</h3>
        </div>
        <div className='detail-card1 detail-card5' onClick={props.infoOpen}>
        <img className='like' src={heart}/>
        <h3>MacBook Air</h3>
        </div>
        <div className='detail-card1 detail-card6' onClick={props.infoOpen}>
        <img className='like' src={heart}/>
        <h3>MacBook Air</h3>
        </div>
</div>
</div>
        </div>
}
        </div>
    )
}
export default Details