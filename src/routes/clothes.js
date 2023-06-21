'use strict'

const express = require("express");
const { Clothes } = require('../models/index');

const router=express.Router();

//enpoint for the clothes table
router.get('/Clothes', getClothes);//get all
router.get('/Clothes/:id', getOneClothes);//get one
router.post('/Clothes', createClothes);//create
router.put('/Clothes/:id', updateClothes);//update
router.delete('/Clothes/:id', deleteClothes)//delete

//get all the record
async function getClothes(req,res){
    const allClothes=await Clothes.findAll();
    res.status(200).json(allClothes)
}

//get one record
async function getOneClothes(req,res){
    const id = req.params.id;
    const clothesItem=await Clothes.findOne({where:{id:id}})
    res.status(200).json(clothesItem)
}

//add a record
async function createClothes(req,res){
    const obj = req.body;
    const newClothes=await Clothes.create(obj);
    res.status(201).json(newClothes)
}

//update a certain record
async function updateClothes(req,res){
    const id = req.params.id;
    const obj= req.body;
    // const ClothesItem= await Clothes.findOne({where:{id}});
    // const updatedClothes=await ClothesItem.update(obj);
    const updatedClothes = await Clothes.update(obj, { where: { id } })
    res.status(202).json(updatedClothes);

}

//delete a certain record
 async function deleteClothes(req,res){
    const id=req.params.id;
    const deleteTheClothes=await Clothes.destroy({where:{id}});
    res.status(204).json(deleteTheClothes);
 }

module.exports=router;