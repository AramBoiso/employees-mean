import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
import { NgForm } from '@angular/forms';
import { Employee } from '../../models/employee';

declare var M:any;

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  constructor(private employeeService:EmployeeService) { }

  ngOnInit() {
    this.getEmployees();
  }

  addEmployee(form: NgForm){

    if(form.value._id){
      this.employeeService.putEmployee(form.value)
          .subscribe(res => {
            console.log(res);
            this.resetForm(form);
            M.toast({html: 'Update Successfuly'});
            this.getEmployees();
          });
    }else{
      this.employeeService.postEmployees(form.value)
        .subscribe(res => {

         this.resetForm(form);
         M.toast({html: 'Save Successfuly'});
         this.getEmployees();
        console.log(res);
        });
    }

  }

  getEmployees(){
    this.employeeService.getEmployees()
        .subscribe( res => {
            this.employeeService.employees = res as Employee[];
            console.log(res);
        })

  }

  editEmployee(e:Employee){
    this.employeeService.selectedEmployee = e ;
  }

  deleteEmployee(_id:string){
    if(confirm('Are you sure you want to deleted it?')){

      this.employeeService.deleteEmployee(_id)
      .subscribe(res => {
          M.toast({html: 'Remove Successfuly'});
          this.getEmployees();
          console.log(res); 
      });
    }
   
  }

  resetForm(form?:NgForm){
    if(form){
      form.reset();
      this.employeeService.selectedEmployee = new Employee();
    }
  }
}
