import { Button } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { Link, useLocation, useParams } from 'react-router-dom'
import { Getdata_func, } from '../../Redux/SinglePageReducer/action'
import styles from "./SinglePageNews.module.css"
export default function SinglePageNews() {
  let [data,setData]=useState([])
    let dispatch=useDispatch()
    let {id}=useParams()
    console.log(id, data)
    // let newsdata =useSelector((store)=>{
    //   return store.newsdata
    // })
  id=Number(id)
    console.log(typeof Number(id))
    useEffect(()=>{
      Getdata_func(dispatch).then((res)=>{
        // console.log(res.payload)
        // console.log(typeof res.payload)
   let arr = (res.payload).filter((el)=>{
      return  el.id===id?el:false
    })
    console.log(arr)
   setData(arr)

      }).catch((err)=>{
        console.log(err)
      })
     
    
     
    },[])

//  { data.map((el)=>{
//     console.log(el.title)
//   })}
  
 console.log(data)

 if(data)
  return (

    <div className={styles.mem1_div1}>
      <Button size={["sm","md", "lg", "xl"]} >testing</Button>
      
      <div className={styles.mem1_big_adv_img}>
    <img src="https://tpc.googlesyndication.com/simgad/8133920793378226490?" alt="" />
      </div>
    <div className={styles.mem1_single_page_container}>
    {data.map((el)=>(
<div className={styles.mem1_news_single_pageaddver_Parent}>

 <div>
 <h3>{el.title}</h3>
 </div>
<div className={styles.mem1_news_single_pageaddver_Parent_img}>
  <img src="https://tpc.googlesyndication.com/simgad/14898303338203898667?" alt="" />
  <h5>{el.seoTitle}</h5>
</div>

        </div>

 ))}
   {data.map((el)=>(
      
     
  <div className={styles.mem1_news_single_pagenews_Parent}>
    <div className={styles.mem1_news_single_pagenews_headline_div}>
    <Link to={"/"}>
       <h2>{el.genreType}</h2>
       </Link>
       <h3>{el.title}</h3>
       <h5>{el.summary}</h5>
    

    </div>

     <div className={styles.mem1_news_single_pagenews_Parent_img1 } id={styles.mem1_news_single_pagenews_Parent_img11} >
      <img src={`https://img1.hscicdn.com/image/upload/f_auto,t_ds_w_800,q_50/lsci/${el.image.url}`} alt="" />
     </div>
     <div className={styles.mem1_news_single_pagenews_detail_maine}>
      <div><p>{el.title}The BCCI president Sourav Ganguly is not yet giving up on injured India strike bowler Jasprit Bumrah turning up in Australia to participate in the T20 World Cup.

Bumrah was rushed to the National Cricket Academy in Bengaluru from Thiruvananthapuram on Wednesday to undergo scans on his back after being ruled out of the ongoing three-match T20I series against South Africa.</p></div>
      <div><p>{el.seoTitle}Ganguly's comments come on the back of a BCCI media release earlier in the day which said Bumrah had "sustained" a back injury and was being monitored by their medical team at the NCA.</p></div>
      <div><p>{el.summary}While the BCCI has not put out any further detail on the nature of the injury, ESPNcricinfo has learned that Bumrah went for a scan on his back in Thiruvananthapuram on Wednesday. It is learned that those scans revealed a stress-related injury in his back. Keeping in mind Bumrah had only recently recovered from a back injury which had kept him out of the Asia Cup, the Indian team's medical staff, together with the NCA, decided to have fresh scans done in Bengaluru.</p></div>
      <div><p>The fresh scans, which were taken on Thursday, will be studied by independent medical consultants hired by the BCCI who will then coordinate with the board's medical staff to determine the next step.</p></div>
      
     
      <div><p>{el.image.slug}As it stands, Bumrah is in a race against time with the India squad departing for Australia on October 6 to prepare for the T20 World Cup. They will be in Perth until October 13 before heading to Brisbane where they are scheduled to play two practice matches against Australia and New Zealand on October 17 and 19 before moving to Melbourne to play their tournament opener against Pakistan on October 23.</p></div>
      <div><p>{el.image.caption}While the BCCI has not put out any further detail on the nature of the injury, ESPNcricinfo has learned that Bumrah went for a scan on his back in Thiruvananthapuram on Wednesday. It is learned that those scans revealed a stress-related injury in his back. Keeping in mind Bumrah had only recently recovered from a back injury which had kept him out of the Asia Cup, the Indian team's medical staff, together with the NCA, decided to have fresh scans done in Bengaluru.</p></div>
      <div><p>{el.image.longCaption}The fresh scans, which were taken on Thursday, will be studied by independent medical consultants hired by the BCCI who will then coordinate with the board's medical staff to determine the next step.</p></div>
     </div>
  </div>
        ))}
    </div>
    </div>
  )
}
