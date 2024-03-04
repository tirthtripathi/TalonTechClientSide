import React from 'react'
import { getImageUrl } from "../../utill"
import { Link } from 'react-router-dom'



export default function Home() {
    return (
        // Hero Section 
        <div className='mx-20 lg:mx-28 pt-24 min-h-screen'>
            <div className='flex font-PrimaryFont items-center justify-center text-3xl font-bold sm:text-5xl'>
               TALON-TECH
            </div>
            <div className='flex flex-col-reverse items-center justify-between custom-medium:flex-row mt-5 gap-10'>
                <div className=' shadow-xl border-dashed border-2 border-purple-400 bg-purple-200 p-7 rounded-2xl w-full md:w-2/5'>
                    <p className='flex flex-wrap'>Welcome to TALON-TECH!, a scholarship recommendation platform aims to connect deserving students with opportunities that will fuel their passion and propel them towards a brighter future.</p>
                    <p className='flex flex-wrap py-3'>we provide students, access to resources and opportunities that will help them excel academically and professionally.</p>
                    <Link to={'/scholarshipform'}> <button className=' drop-shadow-lg mt-2 p-2 px-8 bg-MyYello rounded-full'>Find Best Scholarship</button></Link>
                </div>
                <div className='items-center w-full md:w-2/5'>
                    <img className=' shadow-lg h-auto w-full object-cover rounded-xl md:w-Photo' src={getImageUrl('hero/hero.jpg')} alt="Hero Image me" loading="lazy" />
                </div>
            </div>
        </div>
    )
}
