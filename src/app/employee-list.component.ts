import {Component} from '@angular/core';

@Component({
    selector: 'employee-list',
    templateUrl: './employee-list.component.html'
})

export class EmployeeListComponent{
    title:string="List of Employees";
    employees:any[]=[
        {
            "empno":1,
            "name":"Sudi",
            "salary":5000,
            "dateOfJoining":"30-dec-2018"
        },
        {
            "empno":2,
            "name":"Meli",
            "salary":1500,
            "dateOfJoining":"30-dec-2018"
        },
        {
            "empno":3,
            "name":"Rishika",
            "salary":2000,
            "dateOfJoining":"30-dec-2018"
        }
    ]
}