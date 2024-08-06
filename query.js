const createCategoryQuery = `INSERT INTO category (name, status) VALUES (?,?)`;
const readCategoryQuery = `SELECT * FROM category`;
const getCategoryQuery = `SELECT * FROM category WHERE id = ?`;
const updateCategoryQuery = `UPDATE category SET name = ?, status = ?, discount = ? WHERE id = ?`;



module.exports={
    createCategoryQuery,
    readCategoryQuery,
    getCategoryQuery,
    updateCategoryQuery,
}