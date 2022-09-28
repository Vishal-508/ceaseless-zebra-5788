import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Getdata_func } from '../../Redux/action'
import Pagination from '../pagination/Pagination'
import "./LatestNews.css"
export default function LatestNews() {
  let newsdata=useSelector((store)=>{
    return store.newsdata
  })
  let [Data,setData]=useState()
  console.log(newsdata)
  let dispatch=useDispatch()

useEffect(()=>{
  Getdata_func(dispatch)
},[dispatch])
console.log(Data)
  return (
    <div className='mem1_latestnews_container' >


   <div className='mem1_leatestnews_heading'><h1>Latest News</h1></div>
   <div className='mem1_latestnews_parent'>
 <Pagination newsdata={newsdata}/>
    
     
</div>


    </div>
  )
}
