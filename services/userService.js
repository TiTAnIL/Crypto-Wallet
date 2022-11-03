import { dbSerivce } from "./dbService.js"

const KEY = 'users'

export const userService = {
    getUser,
    query,
    // saveUser,
}

function getUser(id) {
    return dbSerivce.get(KEY, id)
}

async function query() {
    var users = await dbSerivce.query(KEY)
    console.log('users loaded', users)
    if (!users || !users.length) {
        users = _createDefaultUsers()
        await dbSerivce.insert(KEY, users)
    }
    return users
}
 
function _createDefaultUsers() {
    return [
        _createUser("Puki Ben David", 1000),
        _createUser("Muki Cohen", 5000),
        _createUser("Kuki Levi", 200),
    ]
}

function _createUser(name, balance) {
    return {
        name,
        balance,
        transactions: []
    }
}