import { sequelize } from "../../models";
import user from "../../models/user";

const db = require('../../models')

async function registerUser(req: any, res: any) {
    const username = req.body.name;
    const user = db.User.build({'name': req.body.name, 'password': ''});
    await user.save();
    res.json(user);
}

async function getUser(req: any, res: any) {
    const users = await db.User.findAll();
    res.json(users);
}

export {
    registerUser,
    getUser
}