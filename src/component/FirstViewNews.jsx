import React from 'react'

const FirstViewNews = () => {
  return (
    <div className='w-3/6'>
      <div>
       <div className='flex  items-center'>
        <img className='w-10 h-10 object-cover rounded-lg' src='https://static.vecteezy.com/system/resources/thumbnails/030/798/360/small_2x/beautiful-asian-girl-wearing-over-size-hoodie-in-casual-style-ai-generative-photo.jpg' />
        <div className='p-2'>
        <div className='font-semibold' >
            Deemon Brimbo
        </div>
        <div className='font-light'>Auther</div>
        </div>
       </div>
       <div>
     
        <div className='pt-4 text-4xl font-normal'>
            Woman's Basketball Semifinal Preview and schdules
        </div>

        <div className='flex gap-3 mt-3 text-sm'>
            <div className='text-orange-500 font-semibold '>
                Olympics
            </div>
            <div>|</div>
            <div>6 Minutes Read</div>
        </div>


        <div className='pt-6 '>
            <img className='rounded-md object-cover
            ' src='https://talksport.com/wp-content/uploads/sites/5/2024/06/zhanglead.jpg?strip=all&quality=100&w=1620&h=1080&crop=1'/>
        </div>
       </div>
      </div>
    </div>
  )
}

export default FirstViewNews
