import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Bookmark, MessageCircle, MoreHorizontal, Send } from "lucide-react";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import CommentDialog from "./CommentDialog";
const Post = () => {
  const [text, setText] = useState("");
  const [open,setOpen]=useState(false);

  const changeEventHandler = (e) => {
    const inputText=e.target.value;
    if(inputText.trim()) {
      setText(inputText);
    }else{
      setText("");
    }
  };

  return (
    <div className="my-8 w-full max-w-sm mx-auto">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <h1>username</h1>
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <MoreHorizontal className="cursor-pointer" />
          </DialogTrigger>
          <DialogContent className="flex flex-col items-center text-sm text-center">
            {/* {post?.author?._id !== user?._id && ( */}
            <Button
              variant="ghost"
              className="cursor-pointer w-fit text-[#ED4956] font-bold"
            >
              Unfollow
            </Button>
            {/* )} */}

            <Button variant="ghost" className="cursor-pointer w-fit">
              Add to favorites
            </Button>
            {/* {user && user?._id === post?.author._id && ( */}
            <Button
              // onClick={deletePostHandler}
              variant="ghost"
              className="cursor-pointer w-fit"
            >
              Delete
            </Button>
            {/* )} */}
          </DialogContent>
        </Dialog>
      </div>
      <img
        className="rounded-sm my-2 w-full aspect-square object-cover"
        src="post1.jpg"
        alt="post_img"
      />

      <div className="flex items-center justify-between my-2">
        <div className="flex items-center gap-3">
          <FaRegHeart
            size={"22px"}
            className="hover:text-gray-600 cursor-pointer"
          />
          <MessageCircle className="cursor-pointer hover:text-gray-600" />
          <Send className="cursor-pointer hover:text-gray-600" />
        </div>
        <Bookmark className="text-xl cursor-pointer" />
      </div>

      <span className="font-medium block mb-2">100 likes</span>
      <p>
        <span className="font-medium mr-2">username</span>
      </p>
      <span onClick={()=> setOpen(true)} className="cursor-pointer text-sm text-gray-600">View all 10 comments</span>
      <CommentDialog open={open} setOpen={setOpen} />

      <div className="flex items-center justify-between">
        <input
          type="text"
          placeholder="Add a comment..."
          value={text}
          onChange={changeEventHandler}
          className="outline-none text-sm w-full"
        />

        {
          text && <span className="text-blue-500">Post</span>
        }
      </div>
    </div>
  );
};

export default Post;
