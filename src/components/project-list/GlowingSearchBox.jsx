


export default function GlowingSearchBox() {
  return <div className="h-screen w-screen bg-gradient-to-b from-slate-900 via-black to-slate-900 flex place-content-center justify-center items-center">
    <div className="place-content-center justify-center flex items-center z-1 ">
        <div className="bg-gradient-to-b from-slate-750 to-slate-500 center py-10 border items-center flex px-20 border-gray-200 ">  
            <input type="text" placeholder="Search text here..." className="border-green-400 shadow- shadow-green-400 border p-2 "></input>
            <button className="border border-gray-100  bg-gray-900 text-white bg-gradient-to-b from-blue-750 ">Search</button>
        </div>    
    </div>
  </div>
}
