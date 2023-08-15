import { ReactNode } from 'react'
import { NavbarComponent, SliderComponent, VideoBody } from '../components'

export const IndexPage = (): ReactNode => {
  return (
    <>
      <section className='absolute w-full'>
        <NavbarComponent />
      </section>
      <VideoBody />
      <SliderComponent />
    </>
  )
}
