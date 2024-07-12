import { Link, NavLink } from "react-router-dom";

function NavBar() {
    return <div className="flex justify-between border-b-2 border-cyan-500 px-5 bg-cyan-200 content-center item-center">
        <Link to="/" className="py-2 px-4 border-cyan-200 rounded-lg border-2"><strong>Practice 100</strong></Link>
        <div className="py-2 px-4 hover:border-cyan-50 border-cyan-200 hover:bg-cyan-100 rounded-lg border-2">Practice questions name</div>
        <ul className="flex justify-around">
            <NavLink to="/" className={({isActive}) => `${isActive? "underline decoration-cyan-700 ":"" }`}><li className="py-2 px-4  hover:border-cyan-50 border-cyan-200 hover:bg-cyan-100 rounded-lg border-2 mr-1">Home</li></NavLink>
            <NavLink to="/projectlist" className={({isActive}) => `${isActive? "underline decoration-cyan-700 ":"" }`}><li className="py-2 px-4  hover:border-cyan-50 border-cyan-200 hover:bg-cyan-100 rounded-lg border-2 ml-1">Project List</li></NavLink>
            <NavLink to="/about" className={({isActive}) => `${isActive? "underline decoration-cyan-700 ":"" }`}><li className="py-2 px-4  hover:border-cyan-50 border-cyan-200 hover:bg-cyan-100 rounded-lg border-2 ml-1">About Me</li></NavLink>
        </ul>
    </div>
}

export default NavBar;