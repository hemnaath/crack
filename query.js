const createCategoryQuery = `INSERT INTO category (name, status, filename, filepath) VALUES (?,?,?,?)`;
const readCategoryQuery = `SELECT * FROM category`;
const getCategoryQuery = `SELECT * FROM category WHERE id = ?`;
const updateCategoryQuery = `UPDATE category SET name = ?, status = ?, discount = ?, filename = ?, filepath = ? WHERE id = ?`;
const updateWithoutFile = `UPDATE category SET name = ?, status = ?, discount = ?, WHERE id = ?`;
const deleteCategoryQuery = `DELETE FROM category WHERE id = ?`;


const createProductQuery = `INSERT INTO product (name, status, unit, price, category_id, filename, filepath) VALUES (?,?,?,?,?,?,?)`;
const readProductQuery = `SELECT * FROM product`;
const getProductQuery = `SELECT * FROM product WHERE id = ?`;
const updateProductQuery = `UPDATE product SET name = ?, status = ?, unit = ?, price = ?, category_id = ?, filename = ?, filepath = ? WHERE id = ?`;
const updateProductWithoutFile = `UPDATE product SET name = ?, status = ?, unit = ?, price = ?, category_id = ? WHERE id = ?`;
const deleteProductQuery = `DELETE FROM product WHERE id = ?`;




module.exports={
    createCategoryQuery, createProductQuery,
    readCategoryQuery, readProductQuery,
    getCategoryQuery, getProductQuery,
    updateCategoryQuery, updateProductQuery,
    deleteCategoryQuery, updateProductWithoutFile,
    updateWithoutFile, deleteProductQuery,
}