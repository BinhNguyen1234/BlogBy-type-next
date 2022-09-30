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
        input.setAttribute('name','upload-name')  
        input.click()
        input.onchange = async ()=>{
            console.log(input)
            console.log(input.files)
            let formData:any = new FormData()
            formData.append("upload-name",input.files?.[0],"upload-name");
            console.log(formData)
            axios({
                method: 'post',
                url:"/api/post/image",
                headers: {
                    'Content-Type': '"multipart/form-data"'
                },
                data: formData
            }).then((res)=>{
                console.log(res.data)
            }).catch((e)=>{
                console.log(e)
            })
            console.log("send image")
        }
    }
}
export default new Module()