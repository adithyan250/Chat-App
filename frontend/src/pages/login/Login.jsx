


const Login = () => {
    return (
        <div className="flex flex-col items-center justify-center min-w-95 max-auto">
            <div className="h-full p-4 w-full rounded-lg shadow-md bg-gray-400 bg-clip-padding  backdrop-blur-2xl ">
                <h1 className="text-3xl font-semibold text-center text-white">Login
                    <span className="text-blue-500">Chat App</span>
                </h1>
                <form>
                    <div className="p-3">
                        <label className="label text-gray-900 py-2">
                            <span className="text-base label">Username</span>
                        </label>
                        <input type="text" placeholder="Enter username" className="w-full input border-black h-10 p-2"/>
                    </div>
                    <div className="p-3">
                        <label className="label">
                            <span className="text-base label">Password</span>
                        </label>
                        <input type="password" placeholder="Enter Password" className="w-full input h-10"/>
                    </div>
                    <a href="#" className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block px-3">
                        Don't have an account?
                    </a>

                    <div>
                        <button className="btn btn-block btn-sm mt-2">Login</button>
                    </div>
                </form>
            </div>

        </div>
    )
}

export default Login;



// STARTER

// const Login = () => {
//     return (
//         <div className="flex flex-col items-center justify-center min-w-95 max-auto">
//             <div className="h-full p-4 w-full rounded-lg shadow-md bg-gray-400 bg-clip-padding  backdrop-blur-2xl ">
//                 <h1 className="text-3xl font-semibold text-center text-white">Login
//                     <span className="text-blue-500">Chat App</span>
//                 </h1>
//                 <form>
//                     <div className="p-3">
//                         <label className="label text-gray-900 py-2">
//                             <span className="text-base label">Username</span>
//                         </label>
//                         <input type="text" placeholder="Enter username" className="w-full input border-black h-10 p-2"/>
//                     </div>
//                     <div className="p-3">
//                         <label className="label">
//                             <span className="text-base label">Password</span>
//                         </label>
//                         <input type="password" placeholder="Enter Password" className="w-full input h-10"/>
//                     </div>
//                     <a href="#" className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block px-3">
//                         Don't have an account?
//                     </a>

//                     <div>
//                         <button className="btn btn-block btn-sm mt-2">Login</button>
//                     </div>
//                 </form>
//             </div>

//         </div>
//     )
// }

// export default Login;
