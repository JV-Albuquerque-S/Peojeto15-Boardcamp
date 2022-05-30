import db from "./../db.js";

export async function getGames(req, res){
    try{
        const result = await db.query("SELECT * FROM games");
        res.send(result.rows).status(200);
    }
    catch(error){
        console.log(`Error: ${error}`);
        res.sendStatus(500);
    }
}

export async function postGames(req, res){
    const {name, image, stockTotal, categoryId, pricePerDay} = req.body;
    try{
        const categoryExist = await db.query(`SELECT * FROM categories WHERE id = $1`, [categoryId]);
        if(name && stockTotal>0 && pricePerDay>0 && categoryExist.rows[0]){
            const gameExist = await db.query(`SELECT * FROM games WHERE name = $1`, [name]);
            if(!gameExist.rows[0]){
                await db.query(`INSERT INTO games (name, image, "stockTotal", "categoryId", "pricePerDay") VALUES ($1, $2, $3, $4, $5)`, [name, image, stockTotal, categoryId, pricePerDay]);
                res.sendStatus(201);
            }
            else{
                res.sendStatus(409);
            }
        }
        else{
            res.sendStatus(400);
        }
    }
    catch(error){
        console.log(error);
        res.sendStatus(500);
    }
}