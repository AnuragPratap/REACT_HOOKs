import React, { useState } from 'react'
import "./style.css"


const UseState = () => {
    //const initialData=0;
    const [myNum,setMyNum]=useState(/*initialData*/ 0);


  return (<>
    <div className='center_div'>
        <p>{myNum}</p>
        <div className='button2' onClick={()=> setMyNum(myNum+1)}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        INCR COUNT
        </div>
        <div className='button2' onClick={()=> myNum>0 ? setMyNum(myNum-1) : setMyNum(0)}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        DECR COUNT
        </div>
       
    </div>
    </>
  )
}

export default UseState