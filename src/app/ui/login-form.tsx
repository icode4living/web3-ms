export default function LoginForm(){
    return (
<div className="w-full max-w-sm p-4  rounded-lg shadow sm:p-6 md:p-8 bg-gray-800 border-gray-700">
    <form className="space-y-6" action="#">
        <h5 className="text-xl font-medium  text-white">Sign in</h5>
        <div>
            <label  className="block mb-2 text-sm font-medium  text-white">Your email</label>
            <input type="email" name="email" id="email" className="border text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-600 border-gray-500 placeholder-gray-400 text-white" placeholder="name@company.com" required />
        </div>
        <div>
            <label  className="block mb-2 text-sm font-medium  text-white">Your password</label>
            <input type="password" name="password" id="password" placeholder="••••••••" className="border text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-600 border-gray-500 placeholder-gray-400 text-white" required />
        </div>
        <div className="flex items-start">
            <div className="flex items-start">
                <div className="flex items-center h-5">
                    <input id="remember" type="checkbox" value="" className="w-4 h-4 border bg-gray-700 border-gray-600 focus:ring-blue-600  ring-offset-gray-800 focus:ring-offset-gray-800" required />
                </div>
                <label  className="ms-2 text-sm font-medium text-gray-300">Save Browser</label>
            </div>
            <a href="#" className="ms-auto text-sm hover:underline text-blue-500">Lost Password?</a>
        </div>
        <button type="submit" className="w-full bg-blue-600 text-white focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center  hover:bg-blue-700 focus:ring-blue-800">Login to your account</button>
       {/* <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
            Not registered? <a href="#" className="text-blue-700 hover:underline dark:text-blue-500">Create account</a>
  </div>*/}
    </form>
</div>
    );
}