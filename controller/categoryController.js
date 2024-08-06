const db = require('../config/database');
const query = require('../query');

const createCategory = async(req, res)=>{
    const {name, status} = req.body;
    try{
        db.query(query.createCategoryQuery, [name, status], (err, result) =>{
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




module.exports={
    createCategory,
    readCategory,
}