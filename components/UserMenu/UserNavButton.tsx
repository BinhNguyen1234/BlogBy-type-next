import React from "react"
 interface Props{
    children: React.ReactNode | React.ReactNode[]
 }

const UserNavButton:React.FC<Props> =({children}: Props)=>{
    return (
        <>
        <div>
            {children}
        </div>
        </>
    )
}
