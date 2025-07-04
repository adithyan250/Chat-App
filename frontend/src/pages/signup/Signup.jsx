import { Link } from "react-router-dom";
import GenderCheckBox from "./GenderCheckBox";
import { useState } from "react";
import useSignup from "../../hooks/useSignup";


const Signup = () => {

    const [inputs, setInputs] = useState({
        fullName:"",
        userName:"",
        password:"",
        confirmPassword:"",
        gender:""
    });

    const {loading, signup} = useSignup()

    const handleCheckboxChange = (gender) => {
        setInputs({...inputs, gender})
    }


    const handleSubmit = async(e) => {
        e.preventDefault()
        await signup(inputs)
        
    }

    return (
        <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
            <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding  backdrop-blur-2xl ">
                <h1 className="text-3xl font-semibold text-center text-white">Chat App <br />
                    <span className="text-blue-500">Sign Up</span>
                </h1>
                <form onSubmit={handleSubmit}>
                    <div className="p-3">
                        <label className="label text-gray-900 py-2">
                            <span className="text-base label">Full Name</span>
                        </label>
                        <input type="text" placeholder="John Doe" className="w-full input border-black h-10 p-2"
                            value={inputs.fullName}
                            onChange={(e)=>setInputs({...inputs, fullName:e.target.value})}
                        />
                    </div>
                    <div className="p-3">
                        <label className="label text-gray-900 py-2">
                            <span className="text-base label">Username</span>
                        </label>
                        <input type="text" placeholder="johndoe" className="w-full input border-black h-10 p-2"
                            value={inputs.userName}
                            onChange={(e)=> setInputs({...inputs, userName:e.target.value})}
                        />
                    </div>
                    <div className="p-3">
                        <label className="label">
                            <span className="text-base label">Password</span>
                        </label>
                        <input type="password" placeholder="Enter Password" className="w-full input h-10"
                            value={inputs.password}
                            onChange={(e)=> setInputs({...inputs, password:e.target.value})}
                        />
                    </div>
                    <div className="p-3">
                        <label className="label">
                            <span className="text-base label">Confirm Password</span>
                        </label>
                        <input type="password" placeholder="Confirm Password" className="w-full input h-10"
                            value={inputs.confirmPassword}
                            onChange={(e)=> setInputs({...inputs, confirmPassword:e.target.value})}
                        />
                    </div>

                    <GenderCheckBox onCheckboxChange={handleCheckboxChange} selectedGender={inputs.gender}/>

                    <Link to="/login" className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block px-3">
                        Already have an account?
                    </Link>

                    <div>
                        <button className="btn btn-block btn-sm mt-2" disabled={loading}>
                            {loading ? <span className="loading loading-spinner"></span> : "Sign Up"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Signup;



// STARTER

// import GenderCheckBox from "./GenderCheckBox";


// const Signup = () => {
//     return (
//         <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
//             <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding  backdrop-blur-2xl ">
//                 <h1 className="text-3xl font-semibold text-center text-white">Sign Up 
//                     <span className=",text-blue-500"> Chat App</span>
//                 </h1>
//                 <form>
//                     <div className="p-3">
//                         <label className="label text-gray-900 py-2">
//                             <span className="text-base label">Full Name</span>
//                         </label>
//                         <input type="text" placeholder="John Doe" className="w-full input border-black h-10 p-2"/>
//                     </div>
//                     <div className="p-3">
//                         <label className="label text-gray-900 py-2">
//                             <span className="text-base label">Username</span>
//                         </label>
//                         <input type="text" placeholder="johndoe" className="w-full input border-black h-10 p-2"/>
//                     </div>
//                     <div className="p-3">
//                         <label className="label">
//                             <span className="text-base label">Password</span>
//                         </label>
//                         <input type="password" placeholder="Enter Password" className="w-full input h-10"/>
//                     </div>
//                     <div className="p-3">
//                         <label className="label">
//                             <span className="text-base label">Confirm Password</span>
//                         </label>
//                         <input type="password" placeholder="Confirm Password" className="w-full input h-10"/>
//                     </div>

//                     <GenderCheckBox/>

//                     <a href="#" className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block px-3">
//                         Already have an account?
//                     </a>

//                     <div>
//                         <button className="btn btn-block btn-sm mt-2">Sign Up</button>
//                     </div>
//                 </form>
//             </div>
//         </div>
//     )
// }

// export default Signup;