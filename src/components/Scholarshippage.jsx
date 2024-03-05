import React from 'react'
import { useLocation } from 'react-router-dom';

export default function Scholarshippage() {
    const location = useLocation();
    const recommendedData = location.state?.data;

    return (
        <div>
            {recommendedData.map((item, index) => (
                <div key={index} className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-purple-300 dark:border-gray-700">
                    <div className="p-5">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">{item.name}</h5>
                        <p className="mb-3 font-normal text-gray-900">{item.type}</p>
                        <p className="mb-3 font-normal text-gray-900">{item.scholarshipAmount}</p> 
                        <a href={item.link} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            View Scholarship
                        </a>
                    </div>
                </div>
            ))}
        </div>
    );

}
