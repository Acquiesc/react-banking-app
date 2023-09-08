import mongoose from 'mongoose'

const transactionSchema = mongoose.Schema({
    account_id: Number,
    transaction_amount: Number,
    transaction_type: String,
}, { timestamps: true })

const Transaction = mongoose.model('transaction', transactionSchema)

export default Transaction;