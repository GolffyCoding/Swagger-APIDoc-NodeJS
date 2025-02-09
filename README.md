# Node.js CRUD API with Swagger Documentation

## 🚀 Overview
This project is a simple CRUD API built with Node.js and Express, documented using Swagger. It allows users to create, read, update, and delete items via RESTful endpoints.

## 📦 Installation

1. Clone this repository:
   ```sh
   git clone
   cd nodejs-crud-swagger
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

## ▶️ Running the Server

Start the server using:
   ```sh
   node server.js
   ```
The API will be available at `http://localhost:3000`

## 📖 API Documentation

Once the server is running, open your browser and go to:
   ```
   http://localhost:3000/api-docs
   ```
This will display the Swagger UI, where you can test and interact with the API.

## 🛠 Endpoints

### 1️⃣ Get All Items
- **URL:** `/items`
- **Method:** `GET`
- **Response:** List of all items

### 2️⃣ Create an Item
- **URL:** `/items`
- **Method:** `POST`
- **Body:**
  ```json
  {
    "name": "Item Name"
  }
  ```
- **Response:** Created item

### 3️⃣ Update an Item
- **URL:** `/items/{id}`
- **Method:** `PUT`
- **Body:**
  ```json
  {
    "name": "Updated Name"
  }
  ```
- **Response:** Updated item

### 4️⃣ Delete an Item
- **URL:** `/items/{id}`
- **Method:** `DELETE`
- **Response:** Deletion confirmation

## 📜 License
This project is open-source and available under the [MIT License](LICENSE).
![Screenshot 2025-02-09 170552](https://github.com/user-attachments/assets/bb137911-1845-4de1-bd08-a7423dfd66ac)


