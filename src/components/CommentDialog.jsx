import React from 'react'
import { MoreHorizontal } from 'lucide-react'
import { Dialog, DialogContent, DialogTrigger } from './ui/dialog'
import { useState } from 'react'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import { Button } from './ui/button'
import { Link } from 'react-router-dom'
const CommentDialog = ({open, setOpen}) => {
  const [text, setText] = useState("");
  const changeEventHandler = (e) => {
    const inputText = e.target.value;
    if (inputText.trim()) {
      setText(inputText);
    } else {
      setText("");
    }
  }
  const sendMessageHandler = () => {
    alert(text);
  }
  return (
    <Dialog open={open}>
    <DialogContent onInteractOutside={() => setOpen(false)} className="max-w-9xl p-2 flex flex-col h-2/3 justify-between">
      <div className='flex flex-1'>
        <div className='w-1/2'>
          <img
            src="post1.jpg"
            alt="post_img"
            className='w-full h-full object-cover rounded-l-lg'
          />
        </div>
        <div className='w-1/2 flex flex-col justify-between'>
          <div className='flex items-center justify-between p-4'>
            <div className='flex gap-3 items-center'>
              <Link>
                <Avatar>
                  <AvatarImage src=""/>
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </Link>
              <div>
                <Link className='font-semibold text-xs'>user</Link>
                {/* <span className='text-gray-600 text-sm'>Bio here...</span> */}
              </div>
            </div>

            <Dialog>
              <DialogTrigger asChild>
                <MoreHorizontal className='cursor-pointer' />
              </DialogTrigger>
              <DialogContent className="flex flex-col items-center text-sm text-center">
                <div className='cursor-pointer w-full text-[#ED4956] font-bold'>
                  Unfollow
                </div>
                <div className='cursor-pointer w-full'>
                  Add to favorites
                </div>
              </DialogContent>
            </Dialog>
          </div>
          <hr />
          <div className='flex-1 overflow-y-auto max-h-96 p-4'>
            comments aayenge
            {/* {
              comment.map((comment) => <Comment key={comment._id} comment={comment} />)
            } */}
          </div>
          <div className='p-4'>
            <div className='flex items-center gap-2'>
              <input type="text" value={text} onChange={changeEventHandler} placeholder='Add a comment...' className='w-full outline-none border text-sm border-gray-300 p-2 rounded' />
              <Button disabled={!text.trim()} onClick={sendMessageHandler} variant="outline">Send</Button>
            </div>
          </div>
        </div>
      </div>
    </DialogContent>
  </Dialog>
  )
}

export default CommentDialog