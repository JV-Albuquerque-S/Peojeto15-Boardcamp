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

export async function postCustomers(req, res){
    const { name, phone, cpf, birthday } = req.body
    try{
        const alreadyExist = await db.query(`SELECT * FROM customers WHERE cpf = $1`, [cpf]);
        if(!alreadyExist.rows[0]){
            await db.query(`INSERT INTO customers (name, phone, cpf, birthday) VALUES ($1, $2, $3, $4)`, [name, phone, cpf, birthday]);
            res.sendStatus(201);
        }
        else{
            res.sendStatus(409);
        }
    }
    catch(error){
        console.log(error);
        res.sendStatus(500);
    }
}

export async function putCustomers(req, res){
    const {id} = req.params;
    const { name, phone, cpf, birthday } = req.body;
    try{
        const alreadyExist = await db.query(`SELECT * FROM customers WHERE cpf = $1 AND id != $2`, [cpf, id]);
        if(!alreadyExist.rows[0]){
            await db.query(`UPDATE customers SET name = $1, phone =$2, cpf = $3, birthday = $4 WHERE id = $5`, [name, phone, cpf, birthday, id]);
            res.sendStatus(200);
        }
        else{
            res.sendStatus(409);
        }
    }
    catch(error){
        console.log(error);
        res.sendStatus(500);
    }
}
