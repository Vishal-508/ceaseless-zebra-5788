import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import "./Pagination.css"
export default function Pagination({newsdata}) {

  
   let [currentpage,setCurrentpage]=useState(1)
   let [itemperpage,setItemperpage]=useState(5)
   let handleclick=(e)=>{
    setCurrentpage(Number(e.target.id))
   }
   let arr=[]
   for(let i=0;i<=Math.ceil(newsdata.length/itemperpage);i++){
arr.push(i)
   }

   let indexofLastItem=currentpage*itemperpage
   let indexofFirstItem=indexofLastItem-itemperpage
   let currItems=newsdata.slice(indexofFirstItem,indexofLastItem)
   const pageNumber=arr.map(number=>{
    return (
        <li key={number} id={number} onClick={handleclick}>{number+1}</li>
        
    )
   })
 
   
   


   
  return (
    <div>
  
        <ul className='mem1_pagenumber'>{pageNumber}</ul>
        {currItems.length>0 && newsdata.map((el)=>(
      <div key={el.scribeId} className='mem1_img_summary'>
          <div className='mem1_news_img'><img src="https://play-lh.googleusercontent.com/9VKEZC1uQl-4TFn-W9KseDIiHRSxP69wpeXbLC1yy01YvbOsVzPviJ1rw3Mu-G9FU5A" alt="" /></div>
        <div className='mem1_summary'>
           <h4>{el.title}</h4>
           <h5>{el.summary}</h5>
           <p><span>{el.publishedAt}</span>{el.byline}</p>
           
        </div>
      
      </div>
     ))}
  
    </div>
  )
}
