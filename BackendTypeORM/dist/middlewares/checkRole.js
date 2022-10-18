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
exports.checkRole = void 0;
const data_source_1 = require("../data-source");
const Register_1 = require("../entity/Register");
const checkRole = (roles) => {
    return (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        const id = res.locals.jwtPayload.id;
        const userRepository = data_source_1.AppDataSource.getRepository(Register_1.Register);
        let user = yield userRepository.findOneByOrFail(id);
        console.log(id);
        if (roles.indexOf(user.role) > -1)
            next();
        else
            res.status(401).send();
    });
};
exports.checkRole = checkRole;
//# sourceMappingURL=checkRole.js.map