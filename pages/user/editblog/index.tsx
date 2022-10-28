import { ReactElement } from "react";
import EditBlog from "../../../components/EditBlog";
import LargeContentLayout from "../../../layout/LargeContentLayout";
const simulatorData = [
    {
        title: "this is simulate title number 1",
        url: "simulate-url-1",
        date: "10/10/2020"
    },
    {
        title: "this is simulate title number 2",
        url: "simulate-url-2",
        date: "20/12/2020"
    }
]
export default function EditBlogPage():ReactElement{
    return (<>
        <LargeContentLayout>
            <EditBlog data={simulatorData}></EditBlog>
        </LargeContentLayout>
    </>)
}