const express = require("express");
const asyncHandler = require("express-async-handler");
const Goal = require("../model/goalModel");

const getGoals = asyncHandler ( async (req, res) => {
  let goals = await Goal.find();
  res.status(200).json(goals);
});

const postGoal = asyncHandler ( async (req, res) => {
  if(!req.body.text){
    res.status(404);
    throw new Error("requestErrored on goal");
  }
  const goal = await Goal.create({ text: req.body.text });
  res.status(200).json(goal);
});

const updateGoal = asyncHandler ( async(req, res) => {
  const goal = await Goal.findById(req.params.id);
  if(!goal){
    res.status(404);
    throw new Error("requestErrored on goal");
  }
  const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.status(200).json(updatedGoal);
});

const deleteGoal = asyncHandler ( async(req, res) => {
  const goal = await Goal.findById(req.params.id);
  if(!goal){
    res.status(404);
    throw new Error("requestErrored on goal");
  }
  await goal.remove();
  res.status(200).json("deleted successfully");
});

module.exports = {
    getGoals, postGoal, updateGoal, deleteGoal
}
