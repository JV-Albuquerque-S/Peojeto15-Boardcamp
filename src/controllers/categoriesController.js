import db from "./../db.js";

export async function getCategories(req, res){
    try{
        const result = await db.query("SELECT * FROM categories");
        res.send(result.rows).status(200);
    }
    catch(error){
        console.log(`Error: ${error}`);
        res.sendStatus(500);
    }
}