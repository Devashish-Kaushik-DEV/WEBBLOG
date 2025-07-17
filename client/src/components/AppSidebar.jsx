import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { Link } from "react-router-dom"
import logo from "@/assets/images/logo.png"
import { AiOutlineHome } from "react-icons/ai";
import { BiCategoryAlt } from "react-icons/bi";
import { TfiWrite } from "react-icons/tfi";
import { GoCommentDiscussion, GoDot } from "react-icons/go";
import { HiOutlineUsers } from "react-icons/hi2";

const AppSidebar = () => {
  return (
    <Sidebar>
      <SidebarHeader className="bg-white">
        <img src={logo} width={120}/>
      </SidebarHeader>
      <SidebarContent className="bg-white">
        <SidebarGroup>
          <SidebarMenu>
                <SidebarMenuItem>
                    <SidebarMenuButton>
                        <AiOutlineHome />
                        <Link to="">Home</Link>
                    </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                    <SidebarMenuButton>
                        <BiCategoryAlt />
                        <Link to="">Categories</Link>
                    </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                    <SidebarMenuButton>
                        <TfiWrite />
                        <Link to="">Blogs</Link>
                    </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                    <SidebarMenuButton>
                        <GoCommentDiscussion />
                        <Link to="">Comments</Link>
                    </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                    <SidebarMenuButton>
                        <HiOutlineUsers />
                        <Link to="">Users</Link>
                    </SidebarMenuButton>
                </SidebarMenuItem>
            </SidebarMenu>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>
            Categories
          </SidebarGroupLabel>
          <SidebarMenu>
                <SidebarMenuItem>
                    <SidebarMenuButton>
                        <GoDot />
                        <Link to="">Category Items</Link>
                    </SidebarMenuButton>
                    </SidebarMenuItem>
            </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}

export default AppSidebar