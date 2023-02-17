import React, { useContext } from 'react'
import Images from '../Component2/Images'
import { Context } from '../Context/Context'

const Photos = () => {
  const {allPhotos} = useContext(Context)
  return (
    <div>
     <main className='photos' >
      {allPhotos.map((img,i)=>(
        <Images key={img.id} img={img} className="" />
      ))}
     </main>
    </div>
  )
}

export default Photos
