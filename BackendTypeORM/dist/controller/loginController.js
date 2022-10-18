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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userLogin = void 0;
const data_source_1 = require("../data-source");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const Register_1 = require("../entity/Register");
const userLogin = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let { email, password } = req.body;
    if (!(email && password)) {
        res.status(400).send();
    }
    const userRepository = data_source_1.AppDataSource.getRepository(Register_1.Register);
    let user = yield userRepository.findOne({ where: { email } });
    if (!user) {
        res.status(400).json({ "message": "***Invalid Email or Password" });
    }
    else {
        const validPassword = yield bcryptjs_1.default.compare(password, user.password);
        if (!validPassword) {
            res.status(400).send({ "message": "***Invalid Email or Password" });
        }
        else {
            //    const token = user.generateAutToken();
            //    //const token = jwt.sign({id:validUser.user_id}, config.get('jwtPrivateKey'));
            //    res.status(200).send(token);
            res.status(200).json({ "message": "true" });
        }
    }
    //     if(!user){
    //         res.status(400).json({"message": "***Invalid Email or Password"});
    //    }else{
    //         const validPassword = await bcript.compare(password,user.password);
    //         if(!validPassword) {
    //         res.status(400).send({"message": "***Invalid Email or Password"});
    //         }else{
    //             //    const token = user.generateAutToken();
    //                //const token = jwt.sign({id:validUser.user_id}, config.get('jwtPrivateKey'));
    //             //    res.status(200).send(token);
    //                res.status(200).json({"message": "true"});
    //            }
    //        }
    // if (!user.checkIfUnencryptedPasswordIsValid(password)) {
    //     res.status(401).send();
    //     return;
    //   }
    //   const token = jwt.sign(
    //     { ID: user.id, email:user.email, password:user.password},
    //     config.jwtSecret,
    //     { expiresIn : "10"}
    // );
    // res.send(token);   
});
exports.userLogin = userLogin;
exports.default = exports.userLogin;
//# sourceMappingURL=loginController.js.map