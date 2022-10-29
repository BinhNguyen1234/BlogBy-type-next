import { ReactElement, useState } from "react";

interface Props {
    onClick: ReturnType<typeof useState>
}
export default function LoadMore({onClick}:any):ReactElement{
    return (<>
        <button onClick={()=>{
           onClick.setStage(onClick.stage.concat(onClick.stage))
        
        }} type="button" className="btn btn-primary">Load More ...</button>
    </>)
}