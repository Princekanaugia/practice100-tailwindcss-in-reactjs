

function NavBar() {
    return <div className="flex justify-between border-b-2 border-black px-7 py-2 bg-cyan-200 content-center">
        <div className="py-2 self-center px-4 hover:border-cyan-50 border-cyan-200 hover:bg-cyan-100 rounded-lg border-2"><strong>Practice 100</strong></div>
        <div>Practice questions name</div>
        <ul className="flex justify-around self-center">
            <li className="py-2 px-4  hover:border-cyan-50 border-cyan-200 hover:bg-cyan-100 rounded-lg border-2 mr-1">Home</li>
            <li className="py-2 px-4  hover:border-cyan-50 border-cyan-200 hover:bg-cyan-100 rounded-lg border-2 ml-1">Project List</li>
        </ul>
    </div>
}

export default NavBar;