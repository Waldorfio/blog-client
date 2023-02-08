# Blog API

A full-stack RESTful blog API that allows users to create, read, update, and delete blog posts.  
It includes two React front-end applications, one for the CMS (Content Management System) and one for the client-facing side.  
The back-end is built with Node.js, Express and MongoDB.

## [Live Link 👈](https://blog-client-8agn.vercel.app/)
#### [Link to CMS](https://github.com/Waldorfio/blog-cms#readme)
#### [Link to REST API](https://github.com/Waldorfio/blog-api#readme)

![](animation2.gif)

### Features
- Users can create, read, update and delete posts through CMS and client front-end
- Users can register and log in to the CMS
- Users can upload images and videos
- Users can search for posts by keywords
- Users can filter posts by categories

#### Goals
- Create a fully functional blog API with CRUD functionality
- Implement user authentication and authorization
- Create a user-friendly CMS for managing the blog posts
- To provide a client-facing side for users to view and read the blog posts

#### Challenges Faced
- Configuring the MongoDB database and connecting it to the Express backend
- Implementing and handling CORS (Cross-Origin Resource Sharing) errors
- Managing API calls in the React frontend via hooks
- Managing the state of the application in a way that allows for easy updates and deletion of posts
- Ensuring that the API is secure and protected against malicious attacks
- Implementing user authentication and authorization was challenging due to the complexity of the processes and the need to ensure the security of the data.
- Creating a CMS that is easy to use for non-technical users was a challenge as I had to ensure that the interface is intuitive and user-friendly.

## API Endpoints
The API has the following endpoints:
### Posts
- `GET /posts`: Retrieve all posts
- `GET /posts/:id`: Retrieve a specific post by ID
- `POST /posts/create`: Create a new post
- `PUT /posts/:id`: Update a specific post by ID
- `DELETE /posts/:id/delete`: Delete a specific post by ID
### Messages
- `GET /msgs`: Retrieve all messages
- `GET /posts/:id/msg`: Retrieve all messages on a specific post by ID
- `POST /posts/:id/msg/create`: Create a new message
- `PUT /posts/:id/msg/:id`: Update a specific message by ID
- `DELETE /posts/:id/msg/:id/delete`: Delete a specific message by ID
### Users
- `GET /users`: Retrieve all users
- `GET /users/:id`: Retrieve a specific user by ID
- `POST /users/create`: Create a new user
- `PUT /users/:id`: Update a specific user by ID
- `DELETE /users/:id/delete`: Delete a specific user by ID

## Local Installation
1.	Clone the repository `git clone https://github.com/Waldorfio/blog-client.git`
2.	Install the dependencies `npm install`
3.	Start the web server using `npm run dev`
4.	Open the CMS in your browser at `http://localhost:3001` and Client at `http://localhost:3000`

## Technologies Used
- React with TypesScript for the front-end
- Node.js and Express.js for the back-end
- MongoDB for the database
- Webpack for building and bundling the application
