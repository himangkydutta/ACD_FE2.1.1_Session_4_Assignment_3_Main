"use strict";
/*
 * Creating same namespace BY INCLUDING IMPORT as earlier mentioned file
 * employeeManage with different function function
 */
exports.__esModule = true;
function secondFunc() {
    console.log("@@@@Calling Export using Export namespace from secondfile@@@@");
}
exports.secondFunc = secondFunc;
