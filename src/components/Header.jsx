import React from 'react'
import { LOGO } from '../utils/constants'

const Header = () => {
  return (
    <div className='absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col '>
      <img className='w-36' src={LOGO} alt="logo" />
    </div>
  )


}

export default Header