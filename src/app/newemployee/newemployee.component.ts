import { Component, OnInit } from '@angular/core';
import { EmployeeService, Employee } from '../services/employee.service';

@Component({
  selector: 'app-newemployee',
  templateUrl: './newemployee.component.html',
  styleUrls: ['./newemployee.component.css']
})
export class NewemployeeComponent implements OnInit {
  employees: Employee[] = [];
  loading: boolean = true;
  error: string = '';

  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
    
    this.employeeService.getEmployees().subscribe({
      next: (response) => {
        this.employees = response.data;
        this.loading = false;
      },
      error: (err) => {
        console.error('Error fetching employees:', err);
        this.error = 'Failed to load employees. Please try again later.';
        this.loading = false;
      }
    });
  }
}
