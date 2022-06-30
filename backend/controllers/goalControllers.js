const express = require("express");

const getGoals = (req, res) => {
  res.status(200).json({
    message: "Get Goals",
  });
};

const postGoal = (req, res) => {
  if(!req.body.text){
    res.status(404);
    throw new Error("requestErrored on goal");
  }
  res.status(200).json({
    message: "post Goal",
  });
};

const updateGoal = (req, res) => {
  res.status(200).json({
    message: `Update Goal Id ${req.params.id}`,
  });
};

const deleteGoal = (req, res) => {
  res.status(200).json({
    message: `Deleted Goal Id ${req.params.id}`,
  });
};

module.exports = {
    getGoals, postGoal, updateGoal, deleteGoal
}
