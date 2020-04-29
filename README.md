# Jobs-App

### In this App, we need 7 dependencies below:

- Express.js
- Vue.js
- Multer
- Font Awesome
- Body Parser
- MySQL (mysql driver for node.js)
- Bootstrap

### Quick Start

```bash
# Install dependencies
- Server
$ cd server && npm install

- Client
$ cd client && npm install

# Database

$ node_login.sql

# Start App
- Server
$ cd server && npm run dev

- Client
$ cd client && npm run dev

App Run On: http://localhost:8080/

```

### Test the APIs Using Postman
 In Postman

#### Register : http://localhost:8000/users/register
Request/ Key:
  - username : ?
  - password : ?

Example create a new user using POST http://localhost:8000/users/register Api
   <!-- ![alt text](https://github.com/khairul-abdi/customer-App/blob/Back-End/img/1.png) -->

#### Login : http://localhost:8000/users/login
Request/ Key:
  - username : admin  
  - password : 123456

Example login using POST http://localhost:8000/users/login Api
   <!-- ![alt text](https://github.com/khairul-abdi/customer-App/blob/Back-End/img/1.png) -->

#### Form : http://localhost:8000/api/form/init
Request/ Key:
  - email    : kabdi384@gmail.com
  - fullname : khairul abdi  
  - phone    : 086232323
  - letter   : I need a job

Example create a new form using POST http://localhost:8000/api/form/init Api
   <!-- ![alt text](https://github.com/khairul-abdi/customer-App/blob/Back-End/img/1.png) -->

#### Upload : http://localhost:8000/api/files/upload
Request/ Key:
  - uploadfile    : Select Files

Example upload using POST http://localhost:8000/api/form/init Api
   <!-- ![alt text](https://github.com/khairul-abdi/customer-App/blob/Back-End/img/1.png) -->


#### Form : http://localhost:8000/api/form/all

Example form all using GET http://localhost:8000/api/form/init Api
   <!-- ![alt text](https://github.com/khairul-abdi/customer-App/blob/Back-End/img/1.png) -->

### DEMO 


