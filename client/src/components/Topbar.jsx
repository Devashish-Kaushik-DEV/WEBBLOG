import React from 'react'
import logo from "@/assets/images/logo.png"
import { Button } from './ui/button'
import { Link } from 'react-router-dom'
import { MdLogin } from "react-icons/md";
import SearchBox from './SearchBox';

const Topbar = () => {
  return (
    <div className='flex justify-between items-center h-20 fixed top-0 left-0 w-full z-20 bg-white px-5 py-2 border-b'>
      <div>
        <img src={logo} alt="Logo" className="h-20 w-auto" />
      </div>
      <div className='w-[500px]'>
        <SearchBox />
      </div>
      <div>
        <Button asChild>
          <Link to={RouteSignIn}>
            <MdLogin />
            Sign In
          </Link>
        </Button>
      </div>
    </div>
  )
}

export default Topbar