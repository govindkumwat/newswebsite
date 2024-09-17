import React from 'react'
import FirstViewNews from '../component/FirstViewNews'
import FirstViewList from '../component/FirstViewList'
import { PosterSliderNews } from '../component/PosterSliderNews'

const Home = () => {
  return (
    <div>
    <div className='p-6 flex justify-around gap-10 bg-zinc-100'>
       <FirstViewNews/>
       <FirstViewList/>
    </div>
    <div>
      <PosterSliderNews/>
    </div>
    </div>
  )
}

export default Home
