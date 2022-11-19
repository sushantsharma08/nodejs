const express = require('express')

const getAllUsers = (req, res) => {
    res.status(500).json({
        staus: 'error',
        message: 'route no implemented yet!!!'
    })
}
const createUser = (req, res) => {
    res.status(500).json({
        staus: 'error',
        message: 'route no implemented yet!!!'
    })
}
const getUser = (req, res) => {
    res.status(500).json({
        staus: 'error',
        message: 'route no implemented yet!!!'
    })
}
const updateUser = (req, res) => {
    res.status(500).json({
        staus: 'error',
        message: 'route no implemented yet!!!'
    })
}
const deleteUser = (req, res) => {
    res.status(500).json({
        staus: 'error',
        message: 'route no implemented yet!!!'
    })
}

const router = express.Router()

router
    .route('/')
    .get(getAllUsers)
    .post(createUser)
    
router
    .route('/:id')
    .get(getUser)
    .patch(updateUser)
    .delete(deleteUser)

    module.exports = router;