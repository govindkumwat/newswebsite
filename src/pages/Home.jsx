import React from 'react'
import FirstViewNews from '../component/FirstViewNews'
import FirstViewList from '../component/FirstViewList'

const Home = () => {
  return (
    <div className='p-6 flex justify-around bg-zinc-100'>
       <FirstViewNews/>
       <FirstViewList/>
    </div>
  )
}

export default Home
