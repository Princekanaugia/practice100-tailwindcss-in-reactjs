
function RegistrationForm() {
    return <div className="h-screen w-screen bg-gradient-to-br from-blue-500 to-red-500 flex justify-center items-center">
    <div className="bg-white h-[27rem] w-72 rounded-lg grid grid-cols-1 justify-items-stretch gap-0 content-around text-center ">
        <div className="text-2xl font-sans p-2">
            <div className="pb-4">Register</div>
            <hr className="border-slate-500 "/>
        </div>
       
        <form className="grid grid-cols-1 gap-2 text-center p-2">
            <label htmlFor="username" className="px-2 py-2">
            <input type="text" placeholder="Name..." id="username" name="username" className="border-b-2 border-slate-500 rounded-sm w-64 text-lg" />
            </label> 
            <label htmlFor="email" className="p-2">
            <input type="email" placeholder="Email..." id="email" name="email" className="border-b-2  border-slate-500 rounded-sm w-64 text-lg" />
            </label>
            <label htmlFor="password" className="p-2">
            <input type="password" placeholder="Password..." id="password" name="password" className="border-b-2  border-slate-500 rounded-sm w-64 text-lg" />
            </label>
            <label htmlFor="confirmpassword" className="p-2">
            <input type="password" placeholder="Confirm Password..." id="confirmpassword" name="confirmpassword" className="border-b-2  border-slate-500 rounded-sm w-64 text-lg" />
            </label> 
            <a href="/" className=" opacity-40 text-sm p-2 w-64 text-left">Forget your Password ?</a>  
            <label htmlFor="submitbutton" className="py-2 flex items-stretch justify-center ">
            <input type="submit" name="submitbutton" id="submitbutton" value="Sign Up" className="border-2 self-stretch border-slate-500 rounded-xl w-64 "/>
            </label>
        </form>
        <div className="items-end p-2">
            Have an Account? Login
        </div>
    </div>
  </div>
}

export default RegistrationForm