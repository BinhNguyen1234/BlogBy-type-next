

import { useSelector, useDispatch } from 'react-redux'
import { ReactElement, useEffect} from "react"
import React from 'react'
import {LOGINSSR, LOGIN} from "../feature/login"
interface ContextType {
  req: any
}
export function getServerSideProps ({req}:ContextType){
  interface data {
    infoUser: string,
    isAuth: boolean
  }
  let data : data = {
    infoUser: "Login",
    isAuth: false
  }
  try{
    data  = {
      infoUser: req.user.username,
      isAuth: true
    }
  }
  catch {
   console.log("Not in log-in /pages/index.txs line 26 ")
  }
  return {
    props: {
      data: data
    }
    
  }
}
interface Propstype {
  data: any
}

function Home({data}:Propstype):ReactElement {
  const dispatch = useDispatch()
  const state = useSelector((state)=>state)
  useEffect(()=>{
    // dispatch(LOGINSSR(data)) // on product
     dispatch(LOGIN("Dev")) // one Dev
  },[])
     return (
        <>
          <div>Home</div>
      
        </>
  )
}
export default Home;