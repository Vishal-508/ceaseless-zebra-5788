import React, { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { Link, useLocation, useParams } from 'react-router-dom'
import { Getdata_func2 } from '../../Redux/action'
import "./SinglePageNews.css"
export default function SinglePageNews() {
  let [data,setData]=useState({})
    let dispatch=useDispatch()
    let {id}=useParams()
  
    let location =useLocation()
    console.log(location.state)
 
    useEffect(()=>{
      Getdata_func2(dispatch,id).then((res)=>{
    console.log(res.payload)
        setData(res.payload)
      })
    
    },[id])  
  console.log(data)
 console.log(data)
 if(data)
  return (
    <div className='mem1_div1'>
      <div className='mem1_big_adv_img'>
    <img src="https://tpc.googlesyndication.com/simgad/8133920793378226490?" alt="" />
      </div>
    <div className='mem1_single_page_container'>

<div className='mem1_news_single_pageaddver_Parent'>

 <div>
 <h3>{data.title}</h3>
 </div>
<div className='mem1_news_single_pageaddver_Parent_img'>
  <img src="https://tpc.googlesyndication.com/simgad/14898303338203898667?" alt="" />
  <h5>{data.seoTitle}</h5>
</div>
<Link to={"/"}>
            <button>Back</button>
        </Link>
        </div>

 
        
  <div className='mem1_news_single_pagenews_Parent'>
    <div className='mem1_news_single_pagenews_headline_div'>
       <h2>{data.genreType}</h2>
       <h3>{data.title}</h3>
       <h5>{data.summary}</h5>

    </div>

     <div className='mem1_news_single_pagenews_Parent_img1  mem1_news_single_pagenews_Parent_img11'>
      <img src={`https://img1.hscicdn.com/image/upload/f_auto,t_ds_w_800,q_50/lsci/${data.image.url}`} alt="" />
     </div>
     <div className='mem1_news_single_pagenews_detail_maine'>
      <div><p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi, vitae. Tempora odio minus suscipit doloremque voluptates repudiandae quae earum sapiente quod cumque! Incidunt accusamus expedita beatae eum ut! Esse, doloremque.</p></div>
      <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid sit soluta culpa similique, voluptates ex minus officiis deleniti ut repudiandae dignissimos sunt sequi inventore dolor, dicta dolorem eos itaque facere.</div>
      <div><p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos, deleniti quae eius ab totam vitae porro modi non rem enim ipsum natus, commodi ipsam assumenda earum, hic similique nostrum repellendus.</p></div>
      <div><p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos, deleniti quae eius ab totam vitae porro modi non rem enim ipsum natus, commodi ipsam assumenda earum, hic similique nostrum repellendus.</p></div>
      
      </div>
      <div className='mem1_news_single_pagenews_Parent_img1'>
        {/* <img src={`https://img1.hscicdn.com/image/upload/f_auto,t_ds_w_800,q_50/lsci/${data.image.url}`}  alt="" /> */}
      </div>
      <div className='mem1_news_single_pagenews_detail_maine'>
      <div><p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos, deleniti quae eius ab totam vitae porro modi non rem enim ipsum natus, commodi ipsam assumenda earum, hic similique nostrum repellendus.</p></div>
      <div><p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos, deleniti quae eius ab totam vitae porro modi non rem enim ipsum natus, commodi ipsam assumenda earum, hic similique nostrum repellendus.</p></div>
      <div><p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos, deleniti quae eius ab totam vitae porro modi non rem enim ipsum natus, commodi ipsam assumenda earum, hic similique nostrum repellendus.</p></div>
      <div><p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos, deleniti quae eius ab totam vitae porro modi non rem enim ipsum natus, commodi ipsam assumenda earum, hic similique nostrum repellendus.</p></div>
     </div>
  </div>
        
    </div>
    </div>
  )
}
