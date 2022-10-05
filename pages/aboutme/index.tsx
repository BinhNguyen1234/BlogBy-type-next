import { ReactElement } from "react"
export async function getStaticProps(){
    return {props :{
        data: "nguyen vu binh"
    }}
}
interface AboutMeProps {
    data: string
}
function AboutMe({data}:AboutMeProps):ReactElement{
    return (
        <>
            <div>{data}</div>
            <div>about </div>
        </>
    )
}


export default AboutMe