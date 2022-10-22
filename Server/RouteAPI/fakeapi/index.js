const fakeapi = require('express').Router()
const data =[
    {
        title: "title1",
        contentString:"content1",
        url:null,
        imgThumbnail:"image1",
        date:"01/01/1991"
    },
    {
        title: "title2",
        contentString:"content2",
        url:null,
        imgThumbnail:"image2",
        date:"02/02/2992"
    }
    ,{
        title: "title3",
        contentString:"content3",
        url:null,
        imgThumbnail:"image3",
        date:"03/03/3993"
    },
    {
        title: "title4",
        contentString:"content4",
        url:null,
        imgThumbnail:"image4",
        date:"04/04/4994"
    },
    {
        title: "title5",
        contentString:"content5",
        url:null,
        imgThumbnail:"image5",
        date:"05/05/5995"
    },
    {
        title: "title6",
        contentString:"content6",
        url:null,
        imgThumbnail:"image6",
        date:"06/06/6996"
    },{
        title: "title7",
        contentString:"content7",
        url:null,
        imgThumbnail:"image7",
        date:"07/07/7997"
    },
    {
        title: "title8",
        contentString:"content8",
        url:null,
        imgThumbnail:"image8",
        date:"08/08/8998"
    }
]
fakeapi.get("",(req,res)=>{
    res.status(222).send(data)
})
fakeapi.get("/querry=:querry",(req,res)=>{
    console.log("req",req.params.querry)
    res.status(222).send(req.params.querry)
})

module.exports = fakeapi