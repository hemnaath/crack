const createCategoryQuery = `INSERT INTO category (name, status) VALUES (?,?)`;
const readCategoryQuery = `SELECT * FROM category`;



module.exports={
    createCategoryQuery,
    readCategoryQuery,
}