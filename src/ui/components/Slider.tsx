import { ReactNode } from 'react'
import { SwiperComponent } from './Swiper'
import { Button } from '@nextui-org/react'

export const SliderComponent = (): ReactNode => {
  return (
    <>
      <section className='w-full flex flex-col justify-center items-center py-10 px-20 shadow-t-'>
        <article className='flex flex-col justify-start mt-10'>
          <h1 className='text-5xl py-3'>Navigation</h1>
          <section className='flex flex-col mb-10 lg:mb-0'>
            <article className='lg:w-1/2 xl:w-1/3'>
              <p className='text-xl'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa dignissimos quis ea voluptatibus quia ratione, eligendi sequi, vitae animi molestiae, adipisci perspiciatis! Eum aperiam exercitationem voluptatem, minima quia nam a.
              </p>
              <Button color='primary' className='mt-4'>
                Go to my routes
              </Button>
            </article>
          </section>
        </article>
        <article className='w-full xl:w-3/4 mb-10'>
          <SwiperComponent />
        </article>
      </section>
    </>
  )
}
