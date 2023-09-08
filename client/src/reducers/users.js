export default (users = [], action) => {
    switch(action) {
        case 'FETCH_ALL':
            return action.payload;
        case 'CREATE':
            return users;
        default:
            return users;
    }
}