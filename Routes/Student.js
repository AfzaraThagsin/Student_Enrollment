// const express = require('express')
// const router = express.Router();
// const studentModel=require('../models/student')


// //getAllstudents
// router.get('/',async(req,res)=>
// {
//     try{
//         const student= await studentModel.find();
//         res.status(200).json(student);
//         // res.send('Displaying all students');
//     }
//    catch(error)
//    {
//   console.log(error);
//   res.status(500).json({message:error.message});
//    }
// })

// //addstudent
// router.post('/',async(req,res)=>
// {
//     const newStudent = new studentModel({
// name:req.body.name,
// enrolledDepartment:req.body.enrolledDepartment,
// enrollmentDAte:req.body.enrollmentDAte
//     })
//     // res.send('Adding new students');
//     try{
//         const student = await newStudent.save();
//         res.status(201).json(student);
//     }
//     catch(error){
//  res.status(500).json({message:error.message});
//     }
// })

// router.get('/:id',getStudent,(req,res)=>
// {
//     res.status(200).json(res.student);
//     // res.send(`Displaying student with id ${req.params.id}`);
// })
// //updatestudent
// router.patch('/:id',getStudent,async(req,res)=>
// {
//     if(req.body.name!=null)
//     {
//         res.student.name=req.body.name;
//     }
//     if(req.body.enrolledDepartment!=null)
//     {
//         res.student.enrolledDepartment=req.body.name;
//     }
//     try
//     {
//     const updatedstudent = await res.student.save();
//     res.status(201).json(updatedstudent)
//     }
//     catch(error)
//     {
//     res.status(400).json({message:error.message})
//     }
//     // res.send(`updating student with id ${req.params.id}`);
// })
// //deletestudent
// router.delete('/:id',getStudent,async(req,res)=>
// {
//     try
//     {
//         await res.student.deleteOne();
//         res.json({message:`Deleted the user ${res.student.name} `})
//     }
//     catch(error)
//     {
//     res.json({message:error.message})
//     }
//     // res.send(`Deleting student with id ${req.params.id}`);
// })

//  async function getStudent(req,res,next)
//  {
//  let student
//  try{

//     student=await studentModel.findById(req.params.id)
//     if(student===null)
//     {
//         res.status(404).json({message :`cannot find user with id`})
//     }
//  }
//  catch(error)
//  {
//     return res.status(500).json({message:error.message})

//  }
//  res.student=student;
//  next();
//  }
// module.exports = router;


const express=require('express')
const router=express.Router()
const {getStudent,getAllstudents, createANewstudent, getAstudent,updateAstudent,deleteAstudent}=require('../controllers/student')
router.route('/').get(getAllstudents).post(createANewstudent)
router.route('/:id').get(getStudent,getAstudent).patch(getStudent,updateAstudent).delete(getStudent,deleteAstudent)

module.exports=router