import React, {useState} from 'react'
import GrClose from 'react-icons/gr'
import GiHamburgerMenu from 'react-icons/gi'
import { useState } from 'react'

const mobile = () => {
    const [toggleMenu, setToggleMenu] = useState(false)
  return (
    <div>
{toggleMenu ? <GrClose/>}

    </div>
  )
}

export default mobile