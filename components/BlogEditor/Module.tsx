import axios from "axios"

class Module {
    public toolbarOptions = [
        ['bold', 'italic', 'underline'], 
        ['link', 'image'],
        [ {"size" : [ 'small', "normal", 'large', 'huge' ]}],
        [{ 'color': [] }, { 'background': [] }],
        [{ 'font': [] }],
        [{ 'align': [] }],
        [{ 'header': [ 2, 3, 4, 5, 6, false] }],
        ['clean'] 
        ]
    public handleImage (){
        let input = document.createElement("input")
        input.setAttribute('type', 'file');  
        input.setAttribute('accept', 'image/*');  
        input.click()
        input.onchange = async ()=>{
            let formData:any = new FormData()
            formData.append("test",input.files?.[0],"testname")
            axios({
                method: 'post',
                url:"/api/post/image",
                headers:{
                    "Content-Type": "multipart/form-data"
                },
                data: {
                    image: formData
                }
            }).then((res)=>{
                console.log(res.data)
            }).catch((e)=>{
                console.log(e)
            })
        }
    }
}
export default new Module()