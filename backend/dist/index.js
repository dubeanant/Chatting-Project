"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const auth_route_js_1 = __importDefault(require("./routes/auth.route.js"));
const message_route_js_1 = __importDefault(require("./routes/message.route.js"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const PORT = process.env.PORT || 5001;
const app = (0, express_1.default)();
app.use((0, cookie_parser_1.default)()); //for parsing cookies
app.use(express_1.default.json()); //for parsing application/json
app.use("/api/auth", auth_route_js_1.default);
app.use("/api/messages", message_route_js_1.default);
app.listen(PORT, () => {
    console.log("Server is running on port " + PORT);
});
