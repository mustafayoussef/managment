# Management

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.5.

## Description:
The Angular Deals Pipeline Application is a single-page application that displays deals data from a public CRM Contacts API endpoint. The deals data is displayed in a visual pipeline that is divided into five stages: Potential Value, Focus, Contact Made, Offer Sent, and Getting Ready. Users can drag and drop deals between the different stages of the pipeline, and the application updates the deal status when it is moved to a different stage. The application also provides a search functionality to search for contacts based on first name, last name, or email. The application is responsive and works on both desktop and mobile devices.

## Requirements:

- Angular
- Single-page application (SPA)
- Fetch deals data from `https://my-json-server.typicode.com/mabukoush1/contacts/db`

- Deals data fields: id, first_name, last_name, email, phone, company, status, date, probability_status, state.
- Visual pipeline with 5 stages: Potential Value, Focus, Contact Made, Offer Sent, Getting Ready.
- Drag and drop functionality for deals between pipeline stages.
- Update deal status when it is moved to a different stage.
- Search functionality for contacts based on first name, last name, or email.
- Responsive design for desktop and mobile devices.

## Setup Instructions:

1) Clone or download the project from GitHub.
2) Open the terminal and navigate to the project directory.
3) Run the command 'npm install' to install the project dependencies.
4) Run the command 'ng serve' to start the development server.
5) Open a web browser and navigate to `http://localhost:4200/` to view the application.

#### Usage Instructions:

- When the application loads, it fetches deals data from the API endpoint and displays it in the visual pipeline.
- Users can drag and drop deals between the different stages of the pipeline.
- When a deal is moved to a different stage, the application updates the deal status.
- To search for contacts, enter a first name, last name, or email address in the search bar and press Enter. The application will display any contacts that match the search criteria.
- The application is designed to be responsive and work on both desktop and mobile devices.