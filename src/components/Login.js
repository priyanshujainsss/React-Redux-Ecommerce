import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {USER_LOGIN} from './actions/actions';
const Login = () => {
//   const logindata=useSelector(state=>state.userReducer);
  const dispatch = useDispatch();
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
   

  const handleLogin=async(e)=>{
        e.preventDefault();
      const islogin= await dispatch(USER_LOGIN({email,password}));

    //   const data=islogin.payload
    //   console.log("action called data",data);
    //   console.log("reducer send data",logindata)
        //   const found=logindata.find(user=>user.email ===data.email && user.password === data.password)
       console.log(islogin)
  }


    return (
        <div>
            <form onSubmit={handleLogin} >
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"  value={email}  onChange={(e)=>setemail(e.target.value)}  />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" value={password} onChange={(e)=>setpassword(e.target.value)}  />
                </div>

                <button type="submit" className="btn btn-primary" >Submit</button>
            </form>
        </div>
    )
}

export default Login
