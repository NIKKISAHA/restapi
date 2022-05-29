import express from 'express'
const router = express.Router()
import {v4 as uuidv4} from 'uuid'
uuidv4()


let userarray = []

router.get("/",(req,res)=>{
    res.send(userarray)
   
})

router.post("/",(req,res)=>{
   const user = req.body

   userarray.push({...user,id:uuidv4()});

   res.send(userarray)
   
})

router.get('/:id',(req,res)=>{
    const {id} = req.params

    const finduser = userarray.find((userarr)=> userarr.id === id)

    res.send(finduser)
})

router.delete('/:id',(req,res)=>{
    const {id} = req.params

    const finduser = userarray.filter((userarr)=> userarr.id !== id)

    res.send(finduser)
})

router.patch('/:id',(req,res)=>{
    const {id} = req.params
    const {username,email,password}=req.body

    const finduser = userarray.find((userarr)=> userarr.id === id)

    if(username){
        finduser.username=username
    }
    if(email){
        finduser.email=email
    }
    if(password){
        finduser.password=password
    }

    res.send(finduser)
})

export default router;