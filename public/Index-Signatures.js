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
//async promise function
function getBudgetAsync() {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, _) => {
            resolve({
                'shopping': 150,
                'food': 210,
                'utlities': 100
            });
        });
    });
}
function getBudget() {
    return __awaiter(this, void 0, void 0, function* () {
        //Apply the Budget interface to the result
        const result = yield getBudgetAsync();
        console.log(result);
    });
}
getBudget();
