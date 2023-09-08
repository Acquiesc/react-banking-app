import Account from '../models/account.js'

export const createAccount = async (req, res) => {
    const account = req.body

    console.log('new account creation: ' + account)

    const newAccount = new Account(account)

    try {
        await newAccount.save()

        res.status(201).json(newAccount)
    } catch(error) {
        res.status(409).json({ message: error.message })
    }
}