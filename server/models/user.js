import mongoose from 'mongoose'

const userSchema = mongoose.Schema({
    email: String,
    password: String,
}, { timestamps: true })

const User = mongoose.model('user', userSchema)

export default User;