
# Real-Time CRUD App 📝

A **full-stack CRUD (Create, Read, Update, Delete) application** that allows users to manage a list of users in real-time. The frontend is built with **HTML, CSS, and JavaScript**, and the backend uses **Node.js, Express, and an in-memory data store**.  

## Concept

This project demonstrates the **CRUD operations** which are the foundation of most web applications:

1. **Create** – Add new users to the list.  
2. **Read** – Display all existing users dynamically.  
3. **Update** – Edit user information.  
4. **Delete** – Remove users from the list.

### Key Concepts Demonstrated:

- **Frontend Development**  
  - HTML and CSS to structure and style the page.  
  - JavaScript for dynamic interaction and fetching data from the backend.  

- **Backend Development**  
  - **Node.js** and **Express.js** to create RESTful APIs.  
  - **In-memory data store** to hold user data (no database required).  

- **RESTful API**  
  - `GET` – Fetch users.  
  - `POST` – Add new users.  
  - `PUT` – Update existing users.  
  - `DELETE` – Remove users.  

- **Asynchronous Programming**  
  - Using `fetch()` and `async/await` to interact with the backend without reloading the page.  

- **DOM Manipulation**  
  - Dynamically updating the list of users in the browser.  

- **User Interaction**  
  - Form inputs and buttons to trigger CRUD operations.  
  - Prompt dialogs for editing users.  
  - Confirmation dialogs for deleting users.  

- **Real-Time Updates**  
  - Changes made on the backend are reflected immediately on the frontend.

---

## Features

- Add users with name and email.  
- Display a dynamic list of all users.  
- Edit and update user details.  
- Delete users with confirmation.  
- Fully functional without a database (using in-memory storage).  
- Real-time interaction using JavaScript fetch API.

---

## Technologies Used

- **Frontend:** HTML5, CSS3, JavaScript (ES6+)  
- **Backend:** Node.js, Express.js  
- **Middleware:** Body-parser, CORS  
- **Server:** Runs locally on `http://localhost:3000`  
- **Data Storage:** In-memory JavaScript array  

---

## How It Works

1. The **frontend** sends HTTP requests to the backend API using JavaScript's `fetch()` function.  
2. The **backend** processes these requests using Express routes and updates the in-memory array.  
3. The **frontend** receives the response and dynamically updates the UI without reloading the page.  
4. CRUD operations happen in real-time:

   - **Add User:** POST request to `/api/users`.  
   - **Fetch Users:** GET request to `/api/users`.  
   - **Edit User:** PUT request to `/api/users/:id`.  
   - **Delete User:** DELETE request to `/api/users/:id`.

---

## Setup & Usage

1. Clone the repository:

```bash
git clone <repository-url>
````

2. Install dependencies:

```bash
npm install
```

3. Start the server:

```bash
node index.js
```

4. Open `index.html` in your browser.
5. Use the form to add, edit, or delete users. All changes will be reflected in real-time.

---

## API Endpoints

| Method | Endpoint         | Description                   |
| ------ | ---------------- | ----------------------------- |
| GET    | `/api/users`     | Get all users                 |
| GET    | `/api/users/:id` | Get a single user by ID       |
| POST   | `/api/users`     | Add a new user (name & email) |
| PUT    | `/api/users/:id` | Update a user by ID           |
| DELETE | `/api/users/:id` | Delete a user by ID           |

---

