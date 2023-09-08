import axios from 'axios'

const allUsers = 'http://localhost:5000/api/users'

export const fetchUsers = () => axios.get(allUsers)