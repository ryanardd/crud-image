
# Description 

This is a simple CRUD application with the mechanism of the system can upload images, this system uses multer middleware.

## Features

- CRUD Posting: Users can create, edit, and delete images of their blog posts.


## Tech Stack
| **Technology** |  **Description**               |
| :-------- | :---------------------------------- |
|Frontend                       |React.js|
|Programming Languages          |Javascript (Node.js)|
|Framework Backend              |Express.js|
|Database                       |MySQL|
|ORM (Object-Relational Mapping)|Prisma|
|Middleware for Upload File     |Multer|
|Request Validation             |Joi|

# Getting Started
## Installation
Open a terminal or command prompt and clone the blog API project repository from GitHub.
```
git clone <project>
```
Navigate to the directory of the project that was just cloned (fe and be).

Run the `npm install` command to install all the required dependencies on the fe and be directories
```
npm install
```
### Environment Variables
To run this project, you need to add the following environment variables to the `.env` file in your backend section
```
DATABASE_URL="mysql://user:password@host:port/database"
```

## How to run
Once all dependencies are installed, open a terminal run the command to start 

The Client server.
```
npm run dev
```
The API server.
```
npm run start
```
