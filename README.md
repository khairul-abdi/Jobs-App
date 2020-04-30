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
   ![alt text](https://github.com/khairul-abdi/Jobs-App/blob/master/img-documentation/admin-register.png)

#### Login : http://localhost:8000/users/login
Request/ Key:
  - username : admin  
  - password : 123456

Example login using POST http://localhost:8000/users/login Api
   ![alt text](https://github.com/khairul-abdi/Jobs-App/blob/master/img-documentation/login.png)

#### Form : http://localhost:8000/api/form/init
Request/ Key:
  - email    : kabdi384@gmail.com
  - fullname : khairul abdi  
  - phone    : 086232323
  - letter   : I need a job

Example create a new form using POST http://localhost:8000/api/form/init Api
   ![alt text](https://github.com/khairul-abdi/Jobs-App/blob/master/img-documentation/form.png)

#### Upload : http://localhost:8000/api/files/upload
Request/ Key:
  - uploadfile    : Select Files

Example upload using POST http://localhost:8000/api/files/upload Api
   ![alt text](https://github.com/khairul-abdi/Jobs-App/blob/master/img-documentation/upload.png)


#### Form : http://localhost:8000/api/form/all

Example form all using GET hhttp://localhost:8000/api/form/all Api
   ![alt text](https://github.com/khairul-abdi/Jobs-App/blob/master/img-documentation/form-all.png)

### DEMO 

[![Application Form](https://res.cloudinary.com/marcomontalbano/image/upload/v1588223575/video_to_markdown/images/youtube--0oMaB5wGjTQ-c05b58ac6eb4c4700831b2b3070cd403.jpg)](https://www.youtube.com/watch?v=0oMaB5wGjTQ "Application Form")
