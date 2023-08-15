import { ReactNode } from 'react'
import videoPreview from '../../assets/videos/mainVideo.mp4'
import { Button } from '@nextui-org/react'
import { MdOutlineKeyboardDoubleArrowDown } from 'react-icons/md'

export const VideoBody = (): ReactNode => {
  return (
    <section className='relative flex items-center justify-center h-screen overflow-hidden shadow-gray-800 shadow-lg'>
      <video
        src={videoPreview} autoPlay muted loop
        className='absolute w-auto min-w-full min-h-full max-w-none object-contain blur-md'
      />
      <article className='z-10 flex flex-col justify-center items-center h-screen p-10'>
        <div className='h-1/2 flex flex-col justify-end items-center text-center'>
          <h1 className='text-4xl sm:text-6xl lg:text-9xl mb-5 font-bold'>TravelMap <span className='text-orange-400'>App</span></h1>
          <h2 className='text-lg lg:text-2xl text-orange-300 font-bold'>Your Routes and Waypoints in one place.</h2>
        </div>
        <div className='h-1/2 flex flex-col justify-end items-center text-center'>
          <Button color='warning' variant='shadow' isIconOnly className='animate-bounce'>
            <MdOutlineKeyboardDoubleArrowDown />
          </Button>
        </div>

      </article>
    </section>
  )
}
