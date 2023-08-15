import { ReactNode } from 'react'

export const Footer = (): ReactNode => {
  return (
    <section className='w-full pt-20 pb-10 text-center'>
      <h1 className='text-xl md:text-2xl text-gray-300'>Created By <span className='text-blue-600'>Alexis Garcia</span></h1>
      <span className='text-xl'>Icons</span>
    </section>
  )
}
