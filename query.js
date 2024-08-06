const createCategoryQuery = `INSERT INTO category (name, status, filename, filepath) VALUES (?,?,?,?)`;
const readCategoryQuery = `SELECT * FROM category`;
const getCategoryQuery = `SELECT * FROM category WHERE id = ?`;
const updateCategoryQuery = `UPDATE category SET name = ?, status = ?, discount = ?, filename = ?, filepath = ? WHERE id = ?`;
const deleteCategoryQuery = `DELETE FROM category WHERE id = ?`;



module.exports={
    createCategoryQuery,
    readCategoryQuery,
    getCategoryQuery,
    updateCategoryQuery,
    deleteCategoryQuery
}