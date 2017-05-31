/*
 * Including different file in single file using IMPORT.
 */
import {employeeManage} from './nameSpExprt'
import {secondFunc} from './empFirst'

let empInfo:employeeManage.empDetails={empID:101,empName:'Tina',empDept:'FA001'};
employeeManage.empRef(empInfo);
secondFunc();

