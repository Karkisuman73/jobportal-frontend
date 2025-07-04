import { Outlet } from "react-router-dom"
import Sidebar from "../RecruterComponents/Sidebar"


const RecruterOutlet = () => {
  return (
    <div className="flex">
      <Sidebar/>
     <div className="w-full " > <Outlet/></div>
    </div>
  )
}

export default RecruterOutlet
