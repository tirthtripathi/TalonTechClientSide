import React from 'react'
import { Link } from 'react-router-dom';


export default function Navbar() {
    return (
        <div className='fixed top-0 left-0 right-0 drop-shadow-xl z-50 bg-purple-300'>
            <nav>
                <div className='flex justify-between mx-28 items-center p-3 '>
                    <div className=' flex flex-col gap-0 font-semibold text-base sm:font-bold sm:text-lg font-logo'>
                        <p><Link to={'/'} >TALON- TECH</Link></p>
                    </div>
                    <div>
                        <div>
                            <ul className='flex gap-10 justify-center'>
                                <li><Link to={'/'} className='hover:text-white hover:border-b-2 hover:border-purple-700'> Home </Link></li>
                                <li><Link to={'/scholarshipform'} className=' hover:text-white hover:border-b-2 hover:border-purple-700'> Find Scholarship</Link></li>
                                {/* <li><Link to={'/scholarshipform'} className=' hover:text-white hover:border-b-2 hover:border-purple-700'> Login</Link></li>
                                <li><Link to={'/scholarshipform'} className=' hover:text-white hover:border-b-2 hover:border-purple-700'> Sign-up</Link></li> */}
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}