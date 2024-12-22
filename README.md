# Project: API for services students

## Description 📜
**This API is designed to work with a collection of students, and there is also authentication by teacher and parent roles. the backend interacts with the MongoDB database**

## Functionality ⭐
The API functionality is designed to manage students through adding, deleting, editing, and filtering operations. For convenience and optimization, the system implements pagination. The API features role-based authentication for teachers and parents, with different functionality available based on user roles. Additionally, the backend supports Google authentication, photo uploading, and email sending capabilities.

## Technical part 🛠️
The API uses MongoDB for data storage and is deployed on render.com. Swagger is used for documentation, Brevo and Nodemailer for sending emails, and Cloudinary for storing photos.
[API documentation](https://studentsapi-gemi.onrender.com/api-docs)

### Use skills:
<p align="left">
<a href="https://git-scm.com/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/git-colored.svg" width="36" height="36" alt="Git" /></a>
<a href="https://nodejs.org/en/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/nodejs-colored.svg" width="36" height="36" alt="NodeJS" /></a><a href="https://expressjs.com/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/express-colored.svg" width="36" height="36" alt="Express" /></a><a href="https://www.mongodb.com/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/mongodb-colored.svg" width="36" height="36" alt="MongoDB" /></a>
</p>

### Use libraries📚:
- eslint (v. ^9.14.0)
- nodemon (v. ^3.1.7)
- @redocly/cli (v. ^1.25.11)
- bcrypt (v. ^5.1.1)
- cloudinary (v. ^2.5.1)
- cookie-parser (v. ^1.4.7)
- google-auth-library: (v. ^9.14.2")
- cors (v. ^2.8.5)
- dotenv (v. ^16.4.5)
- express (v. ^4.21.1)
- handlebars (v. ^4.7.8)
- http-errors (v. ^2.0.0)
- joi (v. ^17.13.3)
- jsonwebtoken (v. ^9.0.2)
- mongoose (v. ^8.8.1)
- multer (v. ^1.4.5-lts.1)
- nodemailer (v. ^6.9.16)
- pino-http (v. ^10.3.0)
- pino-pretty (v. ^13.0.0)
- swagger-jsdoc (v. ^6.2.8)
- swagger-ui-express (v. ^5.0.1)

### Project structure🗃️:
```
├── docs/
├── node_modules/
├── src/
│   ├── constants/
│   ├── controllers/
│   ├── db/
│   ├── middlewares/
│   ├── routers/
│   ├── services/
│   ├── templates/
│   ├── utils/
│   ├── validation/
│   ├── index.js
│   └── server.js
├── swagger/
├── temp/
├── uploads/
├── .editorconfig
├── .env
├── .env.example
├── .gitignore
├── .prettierrc
├── eslint.config.mjs
├── package-lock.json
├── package.json
├── README.md
└── redocly.yaml
```
