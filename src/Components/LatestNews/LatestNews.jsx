import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { Link, useSearchParams } from 'react-router-dom'
import { Getdata_func } from '../../Redux/action'


export default function LatestNews() {
  let newsdata=useSelector((store)=>{
  return store.newsdata
 }) 
 
  let dispatch=useDispatch()
useEffect(()=>{
  dispatch(Getdata_func)
 
},[])
  
console.log(newsdata)
  return (
    <div className='mem1_latestnews_container' >


   <div className='mem1_leatestnews_heading'><h1>Latest News</h1></div>
   <div className='mem1_latestnews_parent'>
   { newsdata.map((el)=>(
 
    <Link to={`/singlepagenews/${el.id}`}>
      <div key={el.id} className='mem1_img_summary'>
          <div className='mem1_news_img'>
            {/* <img src={`https://img1.hscicdn.com/image/upload/f_auto,t_ds_w_800,q_50/lsci${el.story.image.url}`} alt="" /> */}
            </div>
        <div className='mem1_summary' >
           <h4>{el.title}</h4>
           <h5>{el.summary}</h5>
           <p><span>{el.publishedAt}</span>{el.byline}</p>
          { console.log(typeof el.id)}
        </div>
      
      </div> 
      </Link>
     ))}
    
     
</div>

    </div>
  )
}
