

import { useSelector, useDispatch } from 'react-redux'
import { useEffect} from "react"
import React from 'react'
import {LOGIN} from "../feature/login"
interface ContextType {
  req: any
}
export function getServerSideProps ({req}:ContextType){
  let data: any = "home"
  try{
    data = req.user.username
  }
  catch {
  data = "failed"
  }
  return {
    props: {
      data
    }
  }
}
interface Propstype {
  data: any
}

function Home({data}:Propstype) {
  const dispatch = useDispatch()

  const state = useSelector((state)=>state)
  useEffect(()=>{
    dispatch(LOGIN(data))
    console.log("data",data)
  },[])
     return (
        <>
          <div>{data}</div>
      
        </>
  )
}
export default Home;