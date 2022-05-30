import db from "./../db.js";

export async function getCustomers(req,res){
    try{
        const result = await db.query("SELECT * FROM customers");
        res.send(result.rows).status(200);  
    }
    catch(error){
        console.log(error);
        res.sendStatus(500);
    }
}

export async function getCustomersId(req,res){
    const {id} = req.params;
    try{
        const result = await db.query("SELECT * FROM customers WHERE id = $1", [id]);
        if(result.rows[0]){
            res.send(result.rows[0]).status(200);
        }
        else{
            res.sendStatus(404);
        }
    }
    catch(error){
        console.log(error);
        res.sendStatus(500);
    }
}