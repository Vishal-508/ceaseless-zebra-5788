import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Getdata_func } from '../../Redux/action'

export default function LatestNews() {
  let newsdata=useSelector((store)=>{
    return store.newsdata
  })
  let [Data,setData]=useState()
  // console.log(newsdata)/
  let dispatch=useDispatch()

useEffect(()=>{
  Getdata_func(dispatch)
},[dispatch])
// console.log(Data)
  return (
    <div className='mem1_latestnews_container' >


   <div className='mem1_leatestnews_heading'><h1>Latest News</h1></div>
   <div className='mem1_latestnews_parent'>
   {newsdata.length>0 && newsdata.map((el)=>(
    <Link to={`/singlepagenews/${el.id}`}>
      <div key={el.scribeId} className='mem1_img_summary'>
          <div className='mem1_news_img'><img src={`https://img1.hscicdn.com/image/upload/f_auto,t_ds_w_800,q_50/lsci${el.image.url}`} alt="" /></div>
        <div className='mem1_summary'>
           <h4>{el.title}</h4>
           <h5>{el.summary}</h5>
           <p><span>{el.publishedAt}</span>{el.byline}</p>
           
        </div>
      
      </div> 
      </Link>
     ))}
    
     
</div>

    </div>
  )
}
