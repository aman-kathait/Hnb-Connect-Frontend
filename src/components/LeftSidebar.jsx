import React from 'react'
import { Avatar,AvatarFallback,AvatarImage } from './ui/avatar'
import { Heart, Home, LogOut, MessageCircle, PlusSquare, Search, TrendingUp } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'sonner'

const LeftSidebar = () => {

  const navigate=useNavigate();
  const logoutHandler = async () => {
    console.log("logout handler called");
    
    try {
        const res = await axios.get('https://instaclone-g9h5.onrender.com/api/v1/user/logout', { withCredentials: true });
        if (res.data.success) {
            // dispatch(setAuthUser(null));
            // dispatch(setSelectedPost(null));
            // dispatch(setPosts([]));
            navigate("/login");
            toast.success(res.data.message);
        }
    } catch (error) {
        toast.error(error.response.data.message);
    }
  }
    const sidebarHandler = (textType) => {
      if (textType === 'Logout') {
          logoutHandler();
      } else if (textType === "Create") {
          setOpen(true);
      } else if (textType === "Profile") {
          navigate(`/profile/${user?._id}`);
      } else if (textType === "Home") {
          navigate("/");
      } else if (textType === 'Messages') {
          navigate("/chat");
      }
  }
  const sidebarItems = [
    { icon: <Home />, text: "Home" },
    { icon: <Search />, text: "Search" },
    { icon: <TrendingUp />, text: "Explore" },
    { icon: <MessageCircle />, text: "Messages" },
    { icon: <Heart />, text: "Notifications" },
    { icon: <PlusSquare />, text: "Create" },
    {
        icon: (
            <Avatar className='w-7 h-7'>
                <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                <AvatarFallback>CN</AvatarFallback>
            </Avatar>
        ),
        text: "Profile"
    },
    { icon: <LogOut />, text: "Logout" },
  ]
  return (
    <div className='fixed top-0 z-10 left-0 px-4 border-r border-gray-300 w-[18%] h-screen'>
      <div className='flex flex-col'>
        <div className='flex items-center justify-center'>
        <img src='hnblogo.png' className='mx-auto h-16 w-16 '></img>
        <h1 className='my-8 pl-3 font-bold text-xl'>HNB CONNECT</h1>
        </div>
        
        <div>
          {
            sidebarItems.map((item,index)=>{
              return (
                <div onClick={()=>sidebarHandler(item.text)} key={index} className="flex items-center gap-3 relative hover:bg-green-100 cursor-pointer rounded-lg p-3 my-3">
                  {item.icon}
                  <span>{item.text}</span>
                </div>
              )
            })
          }
        </div>
      </div>

    </div>
  )
  }

export default LeftSidebar