import React from 'react'

const Resultcard = ({item}) => {

    const addtoCollection = (item)=>{
      const olddata = JSON.parse(localStorage.getItem('collection')) || []

      const newdata = [...olddata,item]
      localStorage.setItem('collection',JSON.stringify(newdata))
      
    }

  return (
    <div className='w-[38vh] relative h-70 bg-white rounded-xl overflow-hidden'>
        <div className='h-full '>
            {item.type=='photo'?<img className='h-full w-full object-cover object-center'  src={item.src} />:''}
         {item.type=='video'?<video className='h-full w-full object-cover object-center'  autoPlay loop muted src={item.src} ></video>:''}
        </div>
         
       <div className='w-full h-[50%] absolute px-6 py-6 bottom-0 flex items-center justify-items-end '>
         <h2 className='text-sm font-semibold capitalize mt-5 h-10 overflow-hidden'>{item.title}</h2>
         <button onClick={()=>{
          addtoCollection(item)
         }}
         className='bg-indigo-600 px-2 py-1 rounded absolute right-2 bottom-2 cursor-pointer active:scale-95'>Save</button>
       </div>
     
    </div>
  )
}

export default Resultcard



