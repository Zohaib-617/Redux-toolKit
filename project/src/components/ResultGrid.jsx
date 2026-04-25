import React, { useEffect } from 'react'
import { useDispatch,useSelector} from 'react-redux'
import { fetchApi, fetchvideos} from '../api/mediaApi'
import { setQuery,setLoading,setError,setResults } from '../redux/features/searchSlice'
import Resultcard from '../components/Resultcard'

const ResultGrid = () => {

   const dispatch = useDispatch()
    const {query,activeTab,Loading,error,results} = useSelector((store)=> store.search)

     useEffect(function(){
        if(!query) return
        const getdata = async () =>{
        try {
            dispatch(setLoading())
               let data = []
             if(activeTab=='photos'){
        let response = await fetchApi(query)
        data = response.results.map((item)=>({
           id:item.id,
           type:'photo',
           title:item.alt_description,
           thumbnail:item.urls.small,
           src:item.urls.full
        }))
     }

              if(activeTab=='videos'){
        let response = await fetchvideos(query)
        data = response.videos.map((item)=>({
           id:item.id,
           type:'video',
           title:item.user.name || 'video',
           thumbnail:item.image,
           src:item.video_files[0].link
        }))
     }
     dispatch(setResults(data))
            
        } catch (err) {
            dispatch(setError(err.message))
        }
    }
    getdata();
       
    },[query,activeTab])

    if(error) return <h1>Error</h1>
    if(Loading) return <h1>Loading...</h1>
    
  return (
    <div className=' w-full flex flex-wrap gap-4 justify-evenly  overflow-auto'>
       
       {results.map((item,idx)=>{
         return <div key={idx}>
            <Resultcard item={item}/>
         </div>

       })}
    </div>
  )
}

export default ResultGrid
