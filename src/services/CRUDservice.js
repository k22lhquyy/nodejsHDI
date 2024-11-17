const connection = require("../config/database")

const getAllUser = async () => {
    const [results, fields] = await connection.query(`
        SELECT * FROM Users u
    `);
    return results;
}


const getUserById = async (id) => {
    const [results, fields] = await connection.query(`
        SELECT * FROM Users WHERE id = ${id}
    `);
    return results;
}

module.exports = {
    getAllUser,
    getUserById
}