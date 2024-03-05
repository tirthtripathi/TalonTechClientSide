import React,{useState} from 'react'
import { useNavigate} from 'react-router-dom'



export default function Scholarshipform() {


  const [credentials, setCredentials] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    dob: "",
    gender: "",
    email: "",
    phone: "",
    category: "",
    religion: "",
    motherName: "",
    fatherName: "",
    parentOccupation: "",
    annualIncome: "",
    studentType: "",
    hostelType: "",
    habitationType: "",
    isOrphan: "",
    courseDomain: "",
    courseYear: "",
    sscMarks: "",
    hscMarks: "",
    cgpa: ""
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
  // const data = await response.json();

 Navigate('/scholarshippage', { state: { data } });
} catch(err){
  console.error('There was a problem with the fetch operation:', err);
}

}
  return (
    <div className='flex flex-col items-center justify-center lb:w-1/2 mx-20 mt-10 mb-20 pt-24 min-h-screen '>
      <p className='font-bold text-3xl font-logo p-5'>Find Scholarship for You</p>
      <form onSubmit={handleSubmit} className='flex flex-col gap-5'>

        {/* Personal Details */}

        <div className='border border-dotted border-fuchsia-900 rounded-2xl p-5 lg:p-10'>
          <p className='text-2xl font-bold'>Personal Details:</p>
          <div className='mt-5 flex gap-4'>
            <label className='text-lg'>First Name :
              <input required className='border-2 w-full px-2 rounded-md' type='text' name='firstName' value={credentials.firstName} placeholder="First Name" onChange={onchange}/>
            </label>
            <label className='text-lg'>Middle Name :
              <input required className='border-2 w-full px-2 rounded-md' type='text' name='middleName' value={credentials.middleName} placeholder="Middle Name" onChange={onchange}/>
            </label>
            <label className='text-lg'>Last Name :
              <input required className='border-2 w-full px-2 rounded-md' type='text' name='lastName' value={credentials.lastName} placeholder="Last Name" onChange={onchange}/>
            </label>
          </div>
          <div className='mt-5 flex gap-4'>
            <label className='text-lg'>Date of Birth :
              <input required className='border-2 w-full px-2 rounded-md' type='date' name='dob' value={credentials.dob} onChange={onchange} />
            </label>
            <label className='text-lg'>Gender :
              <div className='flex gap-4'>
                <div className='flex gap-2'>
                  <p>Male</p>
                  <input type="radio" name="gender" value="male"  checked={credentials.gender === 'male'} onChange={onchange}  required/>
                </div>
                <div className='flex gap-2'>
                  <p>Female</p>
                  <input type="radio" name="gender"  value="female" checked={credentials.gender === 'female'} onChange={onchange} />
                </div>
                <div className='flex gap-2'>
                  <p>Other</p>
                  <input type="radio" name="gender" value="other" checked={credentials.gender === 'other'} onChange={onchange}/>
                </div>
              </div>
            </label>
          </div>
          <div className='mt-5 flex gap-4'>
            <label className='text-lg'>Email :
              <input required className='border-2 w-full px-2 rounded-md' type='email' name='email' value={credentials.email} placeholder="Email"  onChange={onchange} />
            </label>
            <label className='text-lg'>Phone :
              <input required className='border-2 w-full px-2 rounded-md' type='tel' name='phone' placeholder="Phone"  value={credentials.phone}  onChange={onchange}/>
            </label>
          </div>
          <div className='mt-5 flex gap-4'>
            <label className='text-lg'>Category :
              <select required className='border-2 w-full px-2 rounded-md' name='category' value={credentials.category} onChange={onchange}>
                <option value="">Select Category</option>
                <option value="general">General</option>
                <option value="obc">OBC</option>
                <option value="sc">SC</option>
                <option value="st">ST</option>
              </select>
            </label>
            <label className='text-lg'>Religion :
              <select required className='border-2 w-full px-2 rounded-md' name='religion' value={credentials.religion} onChange={onchange}>
                <option value="">Select Religion</option>
                <option value="hindu">Hindu</option>
                <option value="muslim">Muslim</option>
                <option value="sikh">Sikh</option>
                <option value="isai">Isai</option>
                <option value="jain">Jain</option>
                <option value="baudh">Baudh</option>
              </select>
            </label>
          </div>
          <div className='mt-5 flex gap-4'>
            <label className='text-lg'>Mother's Name :
              <input required className='border-2 w-full px-2 rounded-md' type='text' name='motherName' placeholder="Mother's Name" value={credentials.motherName} onChange={onchange}/>
            </label>
            <label className='text-lg'>Father's Name :
              <input required className='border-2 w-full px-2 rounded-md' type='text' name='fatherName' placeholder="Father's Name" value={credentials.fatherName} onChange={onchange}/>
            </label>
            <label className='text-lg'>Parent's Occupation :
              <input required className='border-2 w-full px-2 rounded-md' type='text' name='parentOccupation' placeholder="Parent's Occupation" value={credentials.parentOccupation} onChange={onchange}/>
            </label>
            <label className='text-lg'>Annual Income :
              <input required className='border-2 w-full px-2 rounded-md' type='number' name='annualIncome' placeholder="Annual Income" value={credentials.annualIncome} onChange={onchange} />
            </label>
          </div>
          <div className='mt-5 flex gap-4'>
            <label className='text-lg'>Student Type :
              <select required className='border-2 w-full px-2 rounded-md' name='studentType'value={credentials.studentType} onChange={onchange}  >
                <option value="">Select Student Type</option>
                <option value="dayScholar">Day Scholar</option>
                <option value="hosteller">Hosteller</option>
              </select>
            </label>
            <label className='text-lg'>Hostel Type :
              <select required className='border-2 w-full px-2 rounded-md' name='hostelType' value={credentials.hostelType} onChange={onchange}>
                <option value="">Select Hostel Type</option>
                <option value="government">Government</option>
                <option value="private">Private</option>
              </select>
            </label>
            <label className='text-lg'>Habitation Type :
              <select required className='border-2 w-full px-2 rounded-md' name='habitationType' value={credentials.habitationType} onChange={onchange}> 
                <option value="">Select Habitation Type</option>
                <option value="urban">Urban</option>
                <option value="rural">Rural</option>
              </select>
            </label>
            <label className='text-lg'>Is Orphan :
              <div>
                <input className='mr-2' type='radio' name='isOrphan' value='yes'   checked={credentials.isOrphan === 'yes'} onChange={onchange}  required/> Yes
                <input className='ml-2' type='radio' name='isOrphan' value='no'  checked={credentials.isOrphan === 'no'} onChange={onchange}/> No
              </div>
            </label>

          </div>

        </div>

        {/* Academic Details */}
        <div className='border border-dotted border-fuchsia-900 rounded-2xl p-5 lg:p-10 '>
          <p className='text-2xl font-bold'>Academic Details</p>
          <div className='mt-5 flex gap-4'>
            <label className='text-lg'>course Domain:
              <select required className='border-2 w-full px-2 rounded-md' name='courseDomain' value={credentials.courseDomain} onChange={onchange}>
                <option value="">Select Domain</option>
                <option value="engineering&technology-bechlors">Engineering and Technology-Bachelor</option>
                <option value="engineering&technology-masters">Engineering and Technology-Masters</option>
                <option value="b-arch">B. arch</option>
                <option value="business-administration">Business Administration</option>
                <option value="medical">Medical</option>
                <option value="phd">phd</option>

              </select>
            </label>
            <label className='text-lg'>course Year:
              <select required className='border-2 w-full px-2 rounded-md' name='courseYear' value={credentials.courseYear} onChange={onchange}>
                <option value="">Select Year</option>
                <option value="1">1st year</option>
                <option value="2">2nd year</option>
                <option value="3">3rd year</option>
                <option value="4">4th year</option>
              </select>
            </label>
          </div>
          <div className='mt-5 flex gap-4'>
            <label className='text-lg'>SSC Marks :
              <input required className='border-2 w-full px-2 rounded-md' type='number' name='sscMarks' placeholder="ssc Marks" value={credentials.sscMarks} onChange={onchange} />
            </label>
            <label className='text-lg'>HSC Marks :
              <input required className='border-2 w-full px-2 rounded-md' type='number' name='hscMarks' placeholder="hsc Marks" value={credentials.hscMarks} onChange={onchange} />
            </label>
            <label className='text-lg'>CGPA :
              <input required className='border-2 w-full px-2 rounded-md' type='number' name='cgpa' placeholder="CGPA" value={credentials.cgpa} onChange={onchange}/>
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
