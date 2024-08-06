const db = require('../config/database');
const query = require('../query');

const createCategory = async(req, res)=>{
    const {name, status} = req.body;
    try{
        db.query(query.createCategoryQuery, [name, status, req.file.originalname, req.file.path], (err, result) =>{
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

const readCategory = async(req, res)=>{
    try{
        db.query(query.readCategoryQuery, (err, values) =>{
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

const updateCategory = async(req, res)=>{
    const categoryId = req.params.id;
    const {name, status, discount} = req.body;
    try{
        db.query(query.getCategoryQuery, [categoryId], (err, values) =>{
            if(values.length > 0){
                db.query(query.updateCategoryQuery, [name, status, discount, req.file.originalname, req.file.path, categoryId], (err, values) =>{
                    if(err){
                        console.error(err);
                        return res.status(500).json({error:err});
                    }else{
                        return res.status(301).json({message:'Category updated'});
                    }
                })
            }else{
                return res.status(404).json({message:'category do not exists'});
            }
        })
    }catch(error){
        console.error(error);
        return res.status(500).json({error:'Internal server error'});
    }
}

const deleteCategory = async(req, res) =>{
    const categoryId = req.params.id;
    try{
        db.query(query.getCategoryQuery, [categoryId], (err, values) =>{
            if(values.length > 0){
                db.query(query.deleteCategoryQuery, [categoryId], (err, values) =>{
                    if(err){
                        console.error(err);
                        return res.status(500).json({error:err});
                    }else{
                        return res.status(301).json({message:'Category deleted'});
                    }
                })
            }else{
                return res.status(404).json({message:'category do not exists'});
            }
        })
    }catch(error){
        console.error(error);
        return res.status(500).json({error:'Internal server error'});
    }
}



module.exports={
    createCategory,
    readCategory,
    updateCategory,
    deleteCategory,
}