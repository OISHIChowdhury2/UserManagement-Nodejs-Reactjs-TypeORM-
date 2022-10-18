"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const registerController_1 = require("../controller/registerController");
const router = (0, express_1.Router)();
router.get("/all", registerController_1.userAuth);
router.get("/:id([0-9]+)", registerController_1.getOneById);
router.delete("/delete/:id", registerController_1.deleteUser);
//create user
router.post("/register", registerController_1.userResister);
router.put("/update/:id", registerController_1.userEdit);
exports.default = router;
//# sourceMappingURL=registerRoutes.js.map