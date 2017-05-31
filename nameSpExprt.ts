/*
 * Creating namespace for using Export 
 * employeeManage with interface and function
 */
export namespace employeeManage{
    export interface empDetails{

        empID:number;
        empName:String;
        empDept:String;
    }

    export function empRef(emp:empDetails){
        console.log(`Example using Export-Employee ID is ${emp.empID},Employee name is ${emp.empName} and Employee Department is ${emp.empDept}`);
    }
}