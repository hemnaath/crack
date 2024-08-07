const db = require('../config/database');
const query = require('../query');
const fileHelper = require('../helper/fileHelper');

const createProduct = async(req, res)=>{
    const {name, status, unit, price, categoryId} = req.body;
    try{
        let filename, filepath;
        filename = req.file ? req.file.originalname : null;
        filepath = req.file ? req.file.path : null;
        db.query(query.createProductQuery, [name, status, unit, price, categoryId, filename, filepath], (err, result) =>{
            if(err){
                console.error(err);
                return res.status(500).json({err});
            }else{
                return res.status(201).json({message:'Created', result});
            }
        })
    }catch(error){
        console.error(error);
        return res.status(500).json({error:'Internal server error'});
    }
}

const readProduct = async(req, res)=>{
    try{
        db.query(query.readProductQuery, (err, values) =>{
            if(err){
                console.error(err);
                return res.status(500).json({err});
            }else if(values.length > 0){
                return res.status(200).json(values);
            }else{
                return res.status(404).json({message:'No data'});
            }
        })
    }catch(error){
        console.error(error);
        return res.status(500).json({error:'Internal server error'});
    }
}

const updateProduct = async(req, res)=>{
    const productId = req.params.id;
    const {name, status, unit, price, categoryId} = req.body;
    try{
        db.query(query.getProductQuery, [productId], async (err, values) =>{
            if(values.length > 0){
                if(req.file !== undefined){
                    const filteredData = values.find(e => e.filename !== null && e.filepath !== null);
                    if(filteredData !== null){
                        const filePath = process.cwd() + '/' + filteredData.filepath;
                        await fileHelper.deleteFile(filePath);
                    }
                    db.query(query.updateProductQuery, [name, status, unit, price, categoryId, req.file.originalname, req.file.path, productId], (err, values) =>{
                        if(err){
                            console.error(err);
                            return res.status(500).json({error:err});
                        }else{
                            return res.status(301).json({message:'Product updated'});
                        }
                    })
                }else{
                    db.query(query.updateWithoutFile, [name, status, unit, price, categoryId, productId], (err, values) =>{
                        if(err){
                            console.error(err);
                            return res.status(500).json({error:err});
                        }else{
                            return res.status(301).json({message:'Product updated'});
                        }
                    })
                }
            }else{
                return res.status(404).json({message:'Product do not exists'});
            }
        })
    }catch(error){
        console.error(error);
        return res.status(500).json({error:'Internal server error'});
    }
}

const deleteProduct = async(req, res) =>{
    const productId = req.params.id;
    try{
        db.query(query.getProductQuery, [productId], async (err, values) =>{
            if(values.length > 0){
                const filteredData = values.find(e => e.filename !== null && e.filepath !== null);
                if(filteredData !== null){
                    const filePath = process.cwd() + '/' + filteredData.filepath;
                    await fileHelper.deleteFile(filePath);
                }
                db.query(query.deleteProductQuery, [productId], (err, values) =>{
                    if(err){
                        console.error(err);
                        return res.status(500).json({error:err});
                    }else{
                        return res.status(301).json({message:'Product deleted'});
                    }
                })
            }else{
                return res.status(404).json({message:'Product do not exists'});
            }
        })
    }catch(error){
        console.error(error);
        return res.status(500).json({error:'Internal server error'});
    }
}



module.exports={
    createProduct,
    readProduct,
    updateProduct,
    deleteProduct,
}