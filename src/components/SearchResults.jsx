import React,{ useState,useEffect } from 'react'
import { fetchApi } from '../utils/api'
import { useParams } from 'react-router-dom'
import { useYourContext } from '../context/context'
import LeftNav from './LeftNav'
import SearchResultsVideo from "./SearchResultsVideo";



const SearchResults = () => {
  const [result,setResult] = useState()
  const {searchQuery} = useParams()
  const {setLoading} = useYourContext()

  useEffect(()=>{
    fetchSearchResult()
  },[searchQuery])

  const fetchSearchResult = () =>{
    setLoading(true)
    fetchApi(`search/?q=${searchQuery}`).then((res)=>{
      console.log(res)
      setResult(res?.contents)
      setLoading(false)
    })
  }

  return (
    <div className="flex flex-row h-[calc(100%-88px)]">
      <LeftNav/>
      <div className="max-w-[1200px] my-0 mx-auto grow w-[100%-250px] h-full overflow-y-auto">
        <div className="grid grid-cols-1 gap-1 md:p-5 py-5">
          {result?.map((searchVideo,index)=>{
            if(searchVideo?.type!=="video") return false
            return <SearchResultsVideo key={index} video={searchVideo?.video}/>
          })}
        </div>
      </div>
    </div>
  )
}

export default SearchResults