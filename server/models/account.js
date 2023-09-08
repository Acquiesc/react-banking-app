import mongoose from 'mongoose'

const accountSchema = mongoose.Schema({
    user_id: Number,
    account_type: String,
    balance: Number
}, { timestamps: true })

const Account = mongoose.model('account', accountSchema)

export default Account;