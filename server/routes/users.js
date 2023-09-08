import express from 'express'

import { getUsers, createUser, findUser } from '../controllers/users.js'

const router = express.Router()

router.get('/users', getUsers)
router.post('/user/create', createUser)
router.post('/user/find', findUser)

export default router;