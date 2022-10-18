"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Register = exports.UserStatus = void 0;
const typeorm_1 = require("typeorm");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
// import * as bcrypt from "bcryptjs";
var UserStatus;
(function (UserStatus) {
    UserStatus["ACTIVE"] = "A";
    UserStatus["INACTIVE"] = "I";
})(UserStatus = exports.UserStatus || (exports.UserStatus = {}));
let Register = class Register {
    hashPassword() {
        this.password = bcryptjs_1.default.hashSync(this.password, 8);
    }
    checkIfUnencryptedPasswordIsValid(unencryptedPassword) {
        return bcryptjs_1.default.compare(unencryptedPassword, this.password);
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Register.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Register.prototype, "firstName", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Register.prototype, "lastName", void 0);
__decorate([
    (0, typeorm_1.Column)({ unique: true }),
    __metadata("design:type", String)
], Register.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)({ select: false }),
    __metadata("design:type", String)
], Register.prototype, "password", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Register.prototype, "role", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "enum",
        enum: UserStatus,
        default: UserStatus.ACTIVE
    }),
    __metadata("design:type", String)
], Register.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Register.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], Register.prototype, "updatedAt", void 0);
Register = __decorate([
    (0, typeorm_1.Entity)()
], Register);
exports.Register = Register;
//# sourceMappingURL=Register.js.map