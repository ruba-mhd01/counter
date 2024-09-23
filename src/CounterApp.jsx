import React, {useState} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { increment,decrement,reset,addValue } from './redux/countSlice'





function CounterApp() {

  const [val,setVal]=useState(0)

  const {count}=useSelector((state)=>state.counterReducer)
  console.log(count)

  const dispatch=useDispatch()

  return (
    <>
     <div className='w-75 border shadow border-light p-3'>
        <h3 className='text-center text-danger'>Counter</h3>
        <h4 className='text-light text-center'>{count}</h4>
        <div className='d-flex justify-content-around py-3'>
            <button className='btn btn-success' onClick={()=>{dispatch(increment())}}>+ increase</button>
            <button className='btn btn-info' onClick={()=>{dispatch(reset())}}>Reset</button>
            <button className='btn btn-danger' onClick={()=>dispatch(decrement())}>- decrease</button>
        </div>

        <div className='mt-3 ms-5 p-2 d-flex'>
          <input type="number" onChange={(e)=>{setVal(Number(e.target.value))}} className='form-control w-50' />
          <button className='btn btn-info ms-2' onClick={()=>dispatch(addValue(val))}>Submit</button>
        </div>
     </div>
    </>
  )
}

export default CounterApp