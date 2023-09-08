import User from '../models/user.js'

import { createAccount } from './accounts.js'

export const getUsers = async (req,  res) => {
    try {
        const users = await User.find()

        console.log(users)

        res.status(200).json(users)
    } catch(error) {
        res.status(404).json({ message: error.message })
    }
}

export const createUser = async (req,  res) => {
    const user = req.body;

    console.log("registration request: " + user);

    const existingUser = User.findOne(req.email)

    console.log("existing user: " + existingUser)

    if(existingUser) {
        return res.status(409).json({ message: "An account with this email already exists" })
    }
    
    const newUser = new User(user)

    try {
        await newUser.save()

        const checkingAccount = {
            user_id: newUser.id,
            account_type: 'checking',
            balance: 0,
        }

        const savingsAccount = {
            user_id: newUser.id,
            account_type: 'savings',
            balance: 0,
        }

        await createAccount(checkingAccount)

        await createAccount(savingsAccount)

        res.status(201).json(newUser)
    } catch(error) {
        res.status(409).json({ message: error.message })

    }
}

export const findUser = async (req, res) => {
    const userQuery = req.body

    console.log("Find user: " + userQuery)

    try {
        const user = await User.findOne({ email: userQuery.email, password: userQuery.password })

        if(!user) {
            return res.status(401).json({ message: 'invalid credentials' })
        }

        console.log("found user: " + user)

        res.status(201).json(user)
    } catch(error) {
        res.status(500).json({ message: error.message })
    }
}