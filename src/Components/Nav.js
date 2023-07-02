import React from 'react'
import {Link} from 'react-router-dom'
import './Nav.css'
import { useDispatch,useSelector } from 'react-redux'
import {toggleTheme} from '../Redux/Slice'

function Nav() {
    const dispatch = useDispatch()
    const them = useSelector((state)=>state)
   const theme = them.theme.mode
  return (
    <div className='nav'>
        <p>Geekster</p>
        <Link to='/'>Home</Link>
        <Link to='/contact'>Contact</Link>
        <Link to='/service'>Service</Link>
        <button onClick={()=>dispatch(toggleTheme())}>Toggle Theme to {theme==="Dark"?"Light":"Dark"}</button>
    </div>
  )
}

export default Nav