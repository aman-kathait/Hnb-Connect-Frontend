import React, { useEffect, useState } from 'react'
import { Input } from './ui/input'
import { Button } from './ui/button'
import axios from 'axios';
import { toast } from 'sonner';
import { Link, useNavigate } from 'react-router-dom';
import { Loader2 } from 'lucide-react';
// import { useSelector } from 'react-redux';

const Signup = () => {
    const [input, setInput] = useState({
        username: "",
        email: "",
        password: ""
    });
    const [loading, setLoading] = useState(false);
    // const {user} = useSelector(store=>store.auth);
    const navigate = useNavigate();

    const changeEventHandler = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value });
    }

    const signupHandler = async (e) => {
        e.preventDefault();
        try {
            setLoading(true);
            const res = await axios.post('http://localhost:8000/api/v1/user/register', input, {
                headers: {
                    'Content-Type': 'application/json'
                },
                withCredentials: true
            });
            if (res.data.success) {
                navigate("/login");
                toast.success(res.data.message);
                setInput({
                    username: "",
                    email: "",
                    password: ""
                });
            }
        } catch (error) {
            console.log(error);
            toast.error(error.response.data.message);
        } finally {
            setLoading(false);
        }
    }

    // useEffect(()=>{
    //     if(user){
    //         navigate("/");
    //     }
    // },[])
    return (
      <div className='flex items-center w-screen md:h-screen justify-center'>
        <form onSubmit={signupHandler} className='md:shadow-lg flex flex-col gap-5 p-8'>
          <div className='my-4 text-center'>
            <img src='hnblogo.png' className='mx-auto h-20 w-20 mb-2'></img>
            <p className='text-sm font-bold text-gray-500'>Connect with your Batch Mates, Alumni and faculties.</p>
          </div>
          <div>
            <span className='font-medium'>Username</span>
            <Input
              type="text"
              name="username"
              value={input.username}
              onChange={changeEventHandler}
              className="focus-visible:ring-transparent my-2 h-10"
            />
          </div>
          <div>
            <span className='font-medium'>Email</span>
            <Input
              type="email"
              name="email"
              value={input.email}
              onChange={changeEventHandler}
              className="focus-visible:ring-transparent my-2 h-10"
            />
          </div>
          <div>
            <span className='font-medium'>Password</span>
            <Input
              type="password"
              name="password"
              value={input.password}
              onChange={changeEventHandler}
              className="focus-visible:ring-transparent my-2 h-10"
            />
          </div>
          {
            loading ? (
              <Button>
                <Loader2 className='mr-2 h-4 w-4 animate-spin' />
                Please wait
              </Button>
            ) : (
              <Button  className="h-10" type='submit'>Signup</Button>
            )
          }
          <span className='text-center'>Already have an account? <Link to="/login" className='text-blue-600'>Login</Link></span>
        </form>
      </div>
    )
}

export default Signup