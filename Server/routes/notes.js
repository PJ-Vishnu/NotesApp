import express from 'express'
import { Notes } from '../Models/notes.js';

const router= express.Router()

router.get('/allnotes', async (req,res)=>{
    try {
        const notes= await Notes.find()
        return res.status(200).json({result:notes}).end();
    } catch (error) {
        return res.status(404).json({result:error}).end();
    }
});

router.post('/newnote', async (req,res)=>{
    try {
        const data=req.body
        const notes= new Notes(data)
        const newnote=notes.save();
        return res.status(200).json('Saved').end();
    } catch (error) {
        return res.status(404).json({result:error}).end();
    }
});
router.put('/newnote', async (req,res)=>{
    try {
        const data=req.body
        const notes= await Notes.findByIdAndUpdate({})
        const newnote=notes.save();
        return res.status(200).json('Saved').end();
    } catch (error) {
        return res.status(404).json({result:error}).end();
    }
});

router.get('/viewnote/:id', async (req,res)=>{
    const {id}=req.params;
    try {
        const notes= await Notes.findById(id)
        return res.status(200).json({notes}).end();
    } catch (error) {
        return res.status(404).json({result:error}).end();
    }
});

router.delete('/deletenote/:id', async (req,res)=>{
    const {id}=req.params;
    try {
        const notes= await Notes.findByIdAndDelete(id)
        return res.status(200).json('Deleted').end();
    } catch (error) {
        return res.status(404).json({result:error}).end();
    }
});

export default router
