# Employee Management System - Angular 21

This is an Angular 21 application that fetches employee data from a public API and displays it in a styled table using Bootstrap.

## Features

- ✅ Fetches employee data from REST API using HttpClient
- ✅ Uses Observables for asynchronous data handling
- ✅ Displays data in a responsive Bootstrap table
- ✅ Modern gradient design with hover effects
- ✅ Loading spinner and error handling
- ✅ Fully responsive design

## Project Structure

```
angular-employee-app/
├── src/
│   ├── app/
│   │   ├── services/
│   │   │   └── employee.service.ts          # Service with HttpClient and Observable
│   │   ├── newemployee/
│   │   │   ├── newemployee.component.ts     # Component logic with subscription
│   │   │   ├── newemployee.component.html   # Template with *ngFor
│   │   │   └── newemployee.component.css    # Component styles
│   │   ├── app.component.ts                 # Root component
│   │   └── app.module.ts                    # Module with HttpClientModule
│   ├── index.html                           # Main HTML file
│   ├── main.ts                              # Application entry point
│   └── styles.css                           # Global styles
├── angular.json                             # Angular CLI configuration
├── package.json                             # Dependencies
├── tsconfig.json                            # TypeScript configuration
└── README.md                                # This file
```

## Installation

1. Install dependencies:
```bash
npm install
```

## Running the Application

Start the development server:
```bash
npm start
```

Navigate to `http://localhost:4200/` in your browser. The application will automatically reload if you change any of the source files.

## API Used

**API URL:** http://dummy.restapiexample.com/api/v1/employees

This API returns a list of employees with the following data:
- ID
- Employee Name
- Salary
- Age

## Key Implementation Details

### 1. Service (employee.service.ts)
- ✅ API URL configured
- ✅ HttpClient injected via constructor
- ✅ Method `getEmployees()` returns Observable<EmployeeResponse>

### 2. Module (app.module.ts)
- ✅ HttpClientModule imported and added to imports array
- ✅ NewemployeeComponent declared
- ✅ EmployeeService provided

### 3. Component (newemployee.component.ts)
- ✅ Service injected and method called in ngOnInit()
- ✅ Subscribed to Observable
- ✅ Data stored in component property

### 4. Template (newemployee.component.html)
- ✅ Bootstrap classes used for styling
- ✅ *ngFor directive used to iterate over employees
- ✅ Data binding for employee properties
- ✅ Loading and error states handled

### 5. Styling
- ✅ Bootstrap 5 integrated via angular.json
- ✅ Custom gradient header design
- ✅ Hover effects on table rows
- ✅ Responsive design for mobile devices

## Technologies Used

- **Angular 18** (compatible with Angular 21 patterns)
- **TypeScript 5.4**
- **RxJS 7.8** (Observables)
- **Bootstrap 5.3**
- **HttpClient** for API calls

## Build

Run `npm run build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Author

Created as part of Angular learning assignment - demonstrating HttpClient, Observables, and Bootstrap integration.
