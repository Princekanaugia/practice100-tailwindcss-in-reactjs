
function NavBar() {
    return <div className="flex justify-between border-b-2 border-cyan-500 px-5 bg-cyan-200 content-center item-center">
        <a href="/" className="py-2 px-4 border-cyan-200 rounded-lg border-2"><strong>Practice 100</strong></a>
        <div className="py-2 px-4 hover:border-cyan-50 border-cyan-200 hover:bg-cyan-100 rounded-lg border-2">Practice questions name</div>
        <ul className="flex justify-around">
            <a href="/" className={({isActive}) => `${isActive? "underline decoration-cyan-700 ":"" }`}><li className="py-2 px-4  hover:border-cyan-50 border-cyan-200 hover:bg-cyan-100 rounded-lg border-2 mr-1">Home</li></a>
            <a href="/projectlist" className={({isActive}) => `${isActive? "underline decoration-cyan-700 ":"" }`}><li className="py-2 px-4  hover:border-cyan-50 border-cyan-200 hover:bg-cyan-100 rounded-lg border-2 ml-1">Project List</li></a>
            <a href="/about" className={({isActive}) => `${isActive? "underline decoration-cyan-700 ":"" }`}><li className="py-2 px-4  hover:border-cyan-50 border-cyan-200 hover:bg-cyan-100 rounded-lg border-2 ml-1">About Me</li></a>
        </ul>
    </div>
}

export default NavBar;