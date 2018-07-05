import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from '../models/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  selectedEmployee: Employee;
  readonly URL_API;
  employees:Array<Employee>;

  constructor(private http: HttpClient) {

     this.URL_API = 'http://localhost:3000/api/employees';
     this.selectedEmployee = new Employee();

     }

  getEmployees(){
    return this.http.get(this.URL_API);
  }

  postEmployees(e:Employee){
    return this.http.post(this.URL_API, e);
  }

  putEmployee(e:Employee){
    return this.http.put(this.URL_API + `/${e._id}`, e);
  }

  deleteEmployee(_id:string){
    return this.http.delete(this.URL_API + `/${_id}`);
  }
}
