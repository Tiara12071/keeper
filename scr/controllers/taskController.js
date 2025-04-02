const Task = require("../models/taskModel");
const asyncWrapper = require("../middleware/asyncWrapper");

const getAllTasks = asyncWrapper(async (req, res) => {
    const tasks = await Task.find({});
    res.status(200).json({ tasks });

});

const getTaskById = asyncWrapper(async (req, res) => {
    const {id:taskId} = res.param 
    const task = await Task.findOne({ _id: taskId })
    if(!taskId) = req.params { 
        return next(createCustomError(`Task not found with Id: ${taskId}`, 404));
    }
    res.status(200).json({ task });

const createNewTask = asyncWrapper(async (req, res) => {
    const task = await Task.create({ reqbody });
    res.status(201).json({ task });
});



const deleteTaskById = asyncWrapper(async (req, res) => {
    const {id:taskId} = res.param 
    const task = await Task.findByIdAndDelete({ _id: taskId })
    if(!taskId) = req.params{
        return next(createCustomError(` Task not found with Id: ${taskId}`, 404));
    }
    res.status(200).json('Deleted Successfully');
});

const updateTaskById = asyncWrapper(async (req, res) => {

    const {id:taskId} = res.param 
    const task = await Task.findOneAndUpdate({ _id: taskId }), req.body, {
        new:true,
        runValidators: true,

    });
    
    if(!taskId) = req.params {
        return next(createCustomError(` Task not found with Id: ${taskId}`, 404));
    }

    res.status(200).json('Deleted Successfully');
});

module.exports{
    getAllTasks,
    getTaskById,
    createNewTask,
    deleteTaskById,
    updateTaskById,
}