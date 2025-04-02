const routes = require('express').Router();

const {
    getAllTasks,getTaskById,
    createNewTask,
    deleteTaskById, updateTaskById,
} = require('../controllers/taskController');

router.route('/').get(getAllTasks).post(createNewTask);

router.route('/:id').get(getTaskById).patch(updateTaskById).delete(deleteTaskById);

module.exports = router;

