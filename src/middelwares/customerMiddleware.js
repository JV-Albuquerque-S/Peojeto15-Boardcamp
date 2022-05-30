import Joi from "joi";

export  function customerValidation(req, res, next) {
    const { name, phone, cpf, birthday } = req.body;

    const customerSchema = Joi.object({
        name: Joi.string().required(),
        cpf: Joi.string().min(11).max(11).required(),
        phone: Joi.string().min(10).max(11).required(),
        birthday: Joi.string().pattern(/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/).required()
    });

    const validation = customerSchema.validate({name, phone, cpf, birthday});
    if(validation.error) {
        console.log(validation.error);
        res.sendStatus(400);
        return;
    }
    
    next();
}