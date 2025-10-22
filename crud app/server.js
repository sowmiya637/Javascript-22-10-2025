// const express = require("express");
// const bodyParser = require("body-parser");
// const cors = require("cors");
// const users = require("./data");

// const app = express();
// const PORT = 3000;

// // -------------------- Middleware --------------------
// app.use(cors());
// app.use(bodyParser.json());

// // ================== CRUD API ==================

// // 🔹 GET all users
// app.get("/api/users", (req, res) => {
//   res.json(users);
// });

// // 🔹 GET user by ID
// app.get("/api/users/:id", (req, res) => {
//   const id = parseInt(req.params.id);
//   const user = users.find(u => u.id === id);
//   if (user) res.json(user);
//   else res.status(404).json({ error: "User not found" });
// });

// // 🔹 CREATE new users (single or multiple)
// app.post("/api/users", (req, res) => {
//   const newUsers = Array.isArray(req.body) ? req.body : [req.body];

//   newUsers.forEach(user => {
//     if (!user.name || !user.email) return; // ignore invalid entries

//     const newUser = {
//       id: users.length ? users[users.length - 1].id + 1 : 1,
//       name: user.name,
//       email: user.email
//     };

//     users.push(newUser);
//     console.log("Added user:", newUser.name);
//   });

//   res.status(201).json(users);
// });

// // 🔹 UPDATE user by ID
// app.put("/api/users/:id", (req, res) => {
//   const id = parseInt(req.params.id);
//   const { name, email } = req.body;

//   const user = users.find(u => u.id === id);
//   if (user) {
//     user.name = name || user.name;
//     user.email = email || user.email;
//     res.json(user);
//   } else {
//     res.status(404).json({ error: "User not found" });
//   }
// });

// // 🔹 DELETE user by ID
// app.delete("/api/users/:id", (req, res) => {
//   const id = parseInt(req.params.id);
//   const index = users.findIndex(u => u.id === id);

//   if (index !== -1) {
//     const deleted = users.splice(index, 1);
//     res.json(deleted[0]);
//   } else {
//     res.status(404).json({ error: "User not found" });
//   }
// });

// // -------------------- Start Server --------------------
// app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const users = require("./data"); // make sure this is an array

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post("/api/users", (req, res) => {
  const newUsers = Array.isArray(req.body) ? req.body : [req.body];

  newUsers.forEach(user => {
    if (!user.name || !user.email) return;

    const newUser = {
      id: users.length ? users[users.length - 1].id + 1 : 1,
      name: user.name,
      email: user.email
    };

    users.push(newUser);
  });

  res.status(201).json(users);
});

app.listen(3000, () => console.log("Server running at http://localhost:3000"));
