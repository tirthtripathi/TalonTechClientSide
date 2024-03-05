import React from 'react'
import { getImageUrl } from "../../utill"
import { Link } from 'react-router-dom'
import Featurecard from './Featurecard';


export default function Home() {
    return (
        
        <div className='mx-20 lg:mx-28 pt-24 min-h-screen'>
        {/* Hero Section  */}
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

            {/* FEATURS Section */}
            <div className='mx-20 lg:mx-28 mt-28 lg:mt-20'>
                    <div className='flex font-PrimaryFont font-bold text-5xl items-center justify-center border-b-2 border-black'>
                        Find With easy
                    </div>
                    <div className='flex justify-center items-center text-center mt-2 font-PrimaryFont'>
                    Say goodbye to endless searching! Talon Tech delves into your profile to pinpoint scholarships perfectly tailored to your qualifications and intrest.
                    </div>
                    <div className='grid md:grid-cols-3 gap-20 mt-5'>
                        <div className=' '>
                            <Featurecard
                                imageUrl={getImageUrl('features/scholarship.png')}
                                alt={"wealth of scholarship"}
                                title={"wealth of scholarship"}
                                className="bg-MyGreen"
                            />
                        </div>

                        <div className=''>
                            <Featurecard
                                imageUrl={getImageUrl('features/loupe.png')}
                                alt={"simplifies the scholarship search"}
                                title={"simplifies scholarship search"}
                                description={"Secure Scheduling Process."}
                                className="bg-MyYello"
                            />
                        </div>

                        <div className=''>
                            <Featurecard
                                imageUrl={getImageUrl('features/goal.png')}
                                alt={"path to success!"}
                                title={"path to success!"}
                                description={"Reliable and Trustworthy Process."}
                                className="bg-MyRed"
                            />
                        </div>
                    </div>
                </div>

        </div>
    )
}
