import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Layout from "../layout/layout"
import TestAnimation from "../components/TestAnimation"
import { useSelector } from 'react-redux'
import {useEffect} from "react"
export default function Home() {
  const state = useSelector((state)=>state)
  useEffect(()=>{
    
    console.log("render on root",state)
  },null)
  return (
    <>
    <div>home</div>
    
    </>
  )
}
