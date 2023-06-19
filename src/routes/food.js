'use strict'

const express = require("express");
const { Food } = require('../models/index');

const router=express.Router();

router.get('/food', getFood);
router.get('/food/:id', getOneFood);
router.post('/food', createFood);
router.put('/food/:id', updateFood);//update
router.delete('/food/:id', deleteFood)

async function getFood(req,res){
    const allFood=await Food.findAll();
    res.status(200).json(allFood)
}

async function getOneFood(req,res){
    const id = req.params.id;
    const foodItem=await Food.findOne({where:{id:id}})
    res.status(200).json(foodItem)
}

async function createFood(req,res){
    const obj = req.body;
    const newFood=await Food.create(obj);
    res.status(201).json(newFood)
}

async function updateFood(req,res){
    const id = req.params.id;
    const obj= req.body;
    // const foodItem= await Food.findOne({where:{id}});
    // const updatedFood=await foodItem.update(obj);
    const updatedFood = await Food.update(obj, { where: { id } })
    res.status(202).json(updatedFood);
    // return updatedFood;
    

}
 async function deleteFood(req,res){
    const id=req.params.id;
    const deleteTheFood=await Food.destroy({where:{id}});
    res.status(204).json(deleteTheFood);
    return deleteTheFood;
 }

module.exports=router;