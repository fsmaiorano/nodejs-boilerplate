"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
class GithubController {
    constructor() {
    }
    getUser(app, req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const isValid = this.validate(app, req, res);
                const response = yield this.handleVersion(app, req);
                res.send(response);
            }
            catch (err) {
                res.send(err.message);
            }
            ;
        });
    }
    handleVersion(app, req) {
        return __awaiter(this, void 0, void 0, function* () {
            let apiVersion = req.headers.accept;
            switch (apiVersion) {
                case "1.0":
                    return yield app.services.githubServices.v1.github.getUser(req.body.username);
                    break;
                default:
                    return yield app.services.githubServices.v1.github.getUser(req.body.username);
                    break;
            }
        });
    }
    validate(app, req, res) {
        req.assert("username", "Error: Param 'username' is missing.").notEmpty();
        const errors = req.validationErrors();
        if (errors)
            res.send(errors);
        return true;
    }
}
exports.default = new GithubController();
