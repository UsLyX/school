const User = require('../Models/User')
const Role = require('../Models/Role')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { validationResult } = require('express-validator')
const {secret} = require("../config")

const generateAccessToken = (id, roles) => {
    const payload = {
        id,
        roles
    }
    return jwt.sign(payload, secret, {expiresIn: "24h"} )
}

class authController {
    async registration(req, res) {
        try {
            const errors = validationResult(req)
            if (!errors.isEmpty()) {
                return res.status(400).json({message: "Ошибка при валидации", errors})
            }
            const {name, email, login, password} = req.body;
            const candidate = await User.findOne({login})
            if (candidate) {
                return res.status(400).json({message: "Пользователь с таким логином уже существует"})
            }
            const hashPassword = bcrypt.hashSync(password, 7);
            const userRole = await Role.findOne({value: "USER"})
            const user = new User({name, email, login, password: hashPassword, roles: [userRole.value]})
            await user.save()
            return res.json({message: "Пользователь успешно зарегистрирован"})
        } catch (e) {
            console.log(e)
            res.status(400).json({message: 'Ошибка при регистрации'})
        }
    }

    async login(req, res) {
        try {
            const {login, password} = req.body
            const user = await User.findOne({login})
            if (!user) {
                return res.status(400).json({message: `Пользователь ${login} не найден`})
            }
            const validPassword = bcrypt.compareSync(password, user.password)
            if (!validPassword) {
                return res.status(400).json({message: `Введен неверный пароль`})
            }
            const token = generateAccessToken(user._id, user.roles)
            return res.json({token, user})
        } catch (e) {
            console.log(e)
            res.status(400).json({message: 'Ошибка авторизации'})
        }
    }

    async getUsers(req, res) {
        try {
            const users = await User.find()
            res.json(users)
        } catch (e) {
            console.log(e)
        }
    }
}

module.exports = new authController()