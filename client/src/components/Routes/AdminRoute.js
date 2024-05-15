import { useState,useEffect } from "react";
import { useAuth } from "../../context/auth";
import { Outlet } from "react-router-dom";
import axios from 'axios';
import Spinner from "../Spinner";

export default function AdminRoute() {
    const  [ok,setOk] = useState(false);
    const [auth,setAuth] = useAuth();

    useEffect(()=>{
        // const authCheck = async() => {
        //     const res = await axios.get('/api/v1/auth/admin-auth')
        //     if(res.data.ok){
        //         setOk(true)
        //     }
        //     else{
        //         setOk(false)
        //     }
        // }
        const authCheck = async () => {
            try {
              const res = await axios.get('/api/v1/auth/admin-auth');
              console.log(res.data.ok);
              if (res.data.ok) {
                setOk(true);
              } else {
                setOk(false);
              }
            } catch (error) {
                console.log(error);
              console.error('Error while checking authentication:');
              // You can set an appropriate error state or handle the error in another way.
            }
          };
          
        if(auth?.token) {
            authCheck()}
    },[auth?.token]);
    return ok ? <Outlet /> : <Spinner path="" /> 
}