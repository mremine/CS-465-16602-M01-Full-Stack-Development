# CS-465 Full Stack Development

Repository for SNHU CS-465 coursework and projects.

Architecture

Throughout this project, I worked with several frontend technologies, including Express, Handlebars, HTML, CSS, JavaScript, and Angular. The customer-facing website was originally built with Express and Handlebars, where each page was rendered on the server before being sent to the browser. This approach worked well for displaying travel packages but required the browser to reload the page whenever the user navigated to another section.

The administrator interface was later rebuilt using Angular as a Single Page Application (SPA). Unlike the Express application, Angular loads the application once and dynamically updates only the necessary parts of the page. This created a faster, more responsive user experience and allowed reusable components such as the Login, Trip List, and Trip Card components to communicate with the backend through RESTful API calls.

MongoDB was selected as the database because it stores information as flexible JSON-like documents. Since both MongoDB and JavaScript use similar object structures, data can move efficiently between the client, server, and database without extensive conversion. MongoDB also works well with the MEAN stack and easily scales as the application grows.

Functionality

JSON is a lightweight format used to exchange data between applications, while JavaScript is a programming language used to create application logic and functionality. Throughout this project, the Express server returned JSON responses from the REST API, which Angular consumed and displayed within the SPA. JSON acted as the communication layer between the frontend and backend.

Several parts of the application were refactored during development to improve functionality and maintainability. Business logic was moved into Angular services, reusable components replaced duplicated code, and REST API endpoints centralized database operations. These changes reduced redundancy, improved code organization, and made future updates easier. Reusable UI components also created a more consistent interface while improving overall application performance.

Testing

Testing became more involved as additional layers were added to the application. REST API endpoints were tested using Postman to verify GET, POST, PUT, and DELETE requests returned the expected responses. After implementing JWT authentication, testing also included verifying that only authenticated users could access protected endpoints.

Understanding HTTP methods and endpoints was essential during development. GET retrieved trip information, POST created new records or authenticated users, PUT updated existing trips, and DELETE removed trips from the database. Security added another layer of testing because login credentials had to be validated, JWT tokens generated, and protected routes restricted to authenticated administrators. Testing confirmed that Angular, Express, MongoDB, and authentication worked together correctly.

Reflection

This course significantly improved my understanding of full-stack web development. Before this class, I had experience writing code but had never built a complete application that connected a frontend, backend, database, REST API, and authentication system together. Throughout the project, I learned how the different layers of a web application communicate and how each technology in the MEAN stack contributes to the overall architecture.

The most valuable skills I developed include designing RESTful APIs, working with MongoDB and Mongoose, building Angular components and services, implementing JWT authentication, and debugging communication between the frontend and backend. These experiences have increased my confidence in developing full-stack applications and have strengthened my technical portfolio. I believe these skills will make me a more competitive candidate for software development positions and provide a solid foundation for future web application projects.
