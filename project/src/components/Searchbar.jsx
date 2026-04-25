import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setQuery } from '../redux/features/searchSlice'

const Searchbar = () => {
    const [text, settext] = useState('')

    const dispatch = useDispatch()
    

    const submitHandler = (e)=>{
     e.preventDefault()
    dispatch(setQuery(text))
     settext('')
    }

  return (
    <div>
    <form onSubmit={(e)=>{
      submitHandler(e)
    }}
    className='p-10 flex gap-5'>

      <input value={text}
      onChange={(e)=>{
       settext(e.target.value)
      }}
      className='border-2 px-3 py-2 rounded outline-none text-xl '
      type="text" placeholder='Search anything...' required />

      <button className='border-2 px-3 py-2 rounded outline-none cursor-pointer active:scale-95'
      >Search</button>

    </form>
    </div>
  )
}

export default Searchbar
