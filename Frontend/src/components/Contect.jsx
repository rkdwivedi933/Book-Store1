import React from "react";
function Contect() {
    return(
        <>
        <div className="h-screen items-center justify-center">
            <h1 className="text-2xl font-semibold md:text-4xl">Contect Us</h1>
            <div className="mt-4 space-y-2">
            <span>Name</span>
            <br />
            <input type="email" 
            placeholder="Enter Your Name" 
            className="w-80 px-3 border rounded-md outline-none"/>
            
            
        </div>
        <div className="mt-4 space-y-2">
            <span>Email</span>
            <br />
            <input type="email" 
            placeholder="Email Address" 
            className="w-80 px-3 border rounded-md outline-none"/>
            </div>
            <div className="mt-4 space-y-2">
            <span>Message</span>
            <br />
            <textarea rows="4" cols="50" name="comment" form="usrform">
Enter text here...</textarea>
        
            </div>
            <br />
            <button className="bg-blue-500 text-white px-3 py-2 rounded-md hover:bg-slate-700 duration-300 cursor-pointer">Submit</button>
        </div>
        </>
    )
    
}
export default Contect