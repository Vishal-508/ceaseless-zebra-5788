import React from 'react'
import LatestNews from '../LatestNews/LatestNews'
import MostRated from '../MostRated/MostRated'
import style from "./NewsMain.module.css"
export default function NewsMainContainer() {
  return (
    <div className={style.mem1_main_container}>
  <LatestNews />
  <MostRated />


    </div>
  )
}
