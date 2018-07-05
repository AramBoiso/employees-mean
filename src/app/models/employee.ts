export class Employee {
    constructor( name = "", position = "",   office = "",  salary = 0 ){ 

        this.name = name;
        this.position = position;
        this.office = office;
        this.salary = salary;
    }

    _id:string;
    name:string;
    position:string;
    office:string;
    salary:number;
}
