import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'



export default function Scholarshipform() {
  const [credentials, setCredentials] = useState({
    email: "",
   
   });
   let Navigate = useNavigate()

  const onchange = (event) => {
    setCredentials({ ...credentials, [event.target.name]: event.target.value });
  }

const handleSubmit = async (e) => {
  e.preventDefault();
  try {
  // const response = await fetch('-', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify(credentials),
  //   });

  // if (!response.ok) {
  //   throw new Error('Network response was not ok');
  // }
//   const data = await response.json();

// const data = {name :"tirth"}

 Navigate('/scholarshippage', { state: { data } });
} catch(err){
  console.error('There was a problem with the fetch operation:', err);
}

}
  return (
    <div className='flex flex-col items-center justify-center lb:w-1/2 mx-20 mt-10 mb-20 pt-24 min-h-screen'>
      <p className='text-2xl font-bold'>Log in</p>
      <form onSubmit={handleSubmit} className='flex flex-col gap-5'>

        {/* Personal Details */}

        <div className='border border-dotted border-fuchsia-900 rounded-2xl p-5 lg:p-10'>
  
          <div className='mt-5 flex gap-4'>
            <label className='text-lg'>Email :
              <input required className='border-2 w-full px-2 rounded-md' type='email' name='email' value={credentials.email} placeholder="Email"  onChange={onchange} />
            </label>
          </div>
        </div>
        <div className='flex gap-3 justify-center'>
          <button className='text-white bg-black p-2 px-10 mt-3 rounded-2xl' type='submit'>Submit</button>
        </div>
      </form>
    </div>
  )
}
