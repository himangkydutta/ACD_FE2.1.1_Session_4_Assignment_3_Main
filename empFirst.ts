/*
 * Creating same namespace BY INCLUDING IMPORT as earlier mentioned file
 * employeeManage with different function function
 */

import {employeeManage} from './nameSpExprt'

export function secondFunc(){
    console.log("@@@@Calling Export using Export namespace from secondfile@@@@");
}
