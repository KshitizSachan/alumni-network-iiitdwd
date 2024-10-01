import { Briefcase, Newspaper,Users,LogOut, UserPen, UserRoundCheck } from "lucide-react";
import Sidebar, { SidebarItem } from "../../components/AdminPanel/Sidebar"
import { useState } from "react"

function AdminPanel() {
  const [activeItem, setActiveItem] = useState(1);
  const handleSidebarClick = (id) =>{
    setActiveItem(id);

    
  }
  return (
    <>
      <div className="flex">
        <Sidebar>
          <SidebarItem id={1} icon={<UserRoundCheck size={20} />} text="Verification" active={activeItem===1} onClick={() => handleSidebarClick(1)} />
          <SidebarItem id={2} icon={<Briefcase size={20} />} text="Jobs" active={activeItem===2} onClick={() => handleSidebarClick(2)} />
          <SidebarItem id={3} icon={<Newspaper size={20} />} text="News" active={activeItem===3} onClick={() => handleSidebarClick(3)} />
          <SidebarItem id={4} icon={<Users size={20} />} text="Users" active={activeItem===4} onClick={() => handleSidebarClick(4)} />
          <SidebarItem id={5} icon={<UserPen size={20} />} text="Edit Profile" active={activeItem===5} onClick={() => handleSidebarClick(5)} />
          <SidebarItem id={6} icon={<LogOut size={20} />} text="Sign Out" active={activeItem===6} onClick={() => handleSidebarClick(6)} />
        </Sidebar>
      </div>
      
    </>
  )
}

export default AdminPanel;
