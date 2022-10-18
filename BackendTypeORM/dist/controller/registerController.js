"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.userEdit = exports.userResister = exports.getOneById = exports.userAuth = void 0;
const class_validator_1 = require("class-validator");
const data_source_1 = require("../data-source");
const Register_1 = require("../entity/Register");
// import {useResister} from "../controller/userController"
const userAuth = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userRepository = data_source_1.AppDataSource.getRepository(Register_1.Register);
    const users = yield userRepository.find({
        select: ["id", "firstName", "lastName", "email", "role"]
    });
    res.send(users);
});
exports.userAuth = userAuth;
const getOneById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    //Get the ID from the url
    const id = req.params.id;
    //Get the user from database
    const userRepository = data_source_1.AppDataSource.getRepository(Register_1.Register);
    try {
        const user = yield userRepository.findOneOrFail({
            select: ["id", "email", "role"]
        });
    }
    catch (error) {
        res.status(404).send("User not found");
    }
});
exports.getOneById = getOneById;
const userResister = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { firstName, lastName, email, password, role } = req.body;
    const user = new Register_1.Register();
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.password = password;
    user.role = role;
    const error = yield (0, class_validator_1.validate)(user);
    if (error.length > 0) {
        res.status(400).send(error);
        return;
    }
    user.hashPassword();
    const userRepository = data_source_1.AppDataSource.getRepository(Register_1.Register);
    try {
        yield userRepository.save(user);
    }
    catch (e) {
        res.status(409).send("email already used");
        return;
    }
    res.status(201).send("Registed");
});
exports.userResister = userResister;
const userEdit = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { firstName, lastName, email, password, role } = req.body;
    const userRepository = data_source_1.AppDataSource.getRepository(Register_1.Register);
    try {
        const userEdit = yield userRepository
            .createQueryBuilder()
            .update(Register_1.Register)
            .set({ firstName: firstName, lastName: lastName, email: email, password: password, role: role })
            .where("id = :id", { id: id })
            .execute();
        res.json(userEdit);
    }
    catch (e) {
        res.status(409).send("email already used");
        return;
    }
});
exports.userEdit = userEdit;
const deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const userRepository = data_source_1.AppDataSource.getRepository(Register_1.Register);
    const deleteUser = yield userRepository
        .createQueryBuilder()
        .delete()
        .where("id = :id", { id: id })
        .execute();
    res.json(deleteUser);
});
exports.deleteUser = deleteUser;
//# sourceMappingURL=registerController.js.map