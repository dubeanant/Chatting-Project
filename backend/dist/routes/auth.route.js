"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_controllers_js_1 = require("../controllers/auth.controllers.js");
const protectRoute_js_1 = __importDefault(require("../middleware/protectRoute.js"));
const router = express_1.default.Router();
router.get("/me", protectRoute_js_1.default, auth_controllers_js_1.getMe);
router.post("/signup", auth_controllers_js_1.signup);
router.post("/login", auth_controllers_js_1.login);
router.post("/logout", auth_controllers_js_1.logout);
exports.default = router;
