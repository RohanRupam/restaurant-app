
# 🍽️ Restaurant - Restaurant App by Rohan Rupam 🍽️

## Project Overview

This is a **Restaurant App** that allows users to browse and manage restaurant menus, place orders, and interact with a streamlined interface. Built using the **MERN stack** (MongoDB, Express.js, React, and Node.js), the app offers robust user authentication and secure session management, making it ideal for both regular users and administrators. With Google and Facebook sign-in options, along with OTP-based verification managed via an external **SMVT Server**, the app provides multiple ways for users to authenticate. The backend is highly modular and structured using Express.js, with various endpoints for handling user authentication, menu management, and session handling. Redis is employed to efficiently manage user sessions, ensuring smooth interaction across devices. Firebase is integrated to allow real-time image uploads and retrieval, making the menu management process seamless for restaurant owners. The app provides a full restaurant management experience for users, including viewing, adding, editing, and deleting menu items.

---

## 💻 Tech Stack

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![Redis](https://img.shields.io/badge/redis-%23DD0031.svg?style=for-the-badge&logo=redis&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens)

---

## 🚀 Key Features

- **🛠️ Modular architecture**: The backend (API) is structured using Express.js, providing endpoints for user authentication, menu management, and session handling.
- **🔒 User Authentication**: JWT-based authentication is implemented for security.
- **🌐 OAuth Integration**: Google and Facebook sign-ins are integrated using OAuth2.
- **📲 OTP Service**: OTP functionality is managed via an external **SMVT Server**.
- **🕒 Session Management**: Redis is used to manage user sessions, ensuring active users can interact with the app seamlessly.
- **📸 Image Upload**: Firebase is integrated to store and retrieve menu item images.

---

## 🛠️ How to Run the Project

### Prerequisites:
1. **Node.js** and **npm** installed on your system.
2. **MongoDB** instance either locally or through a cloud service like MongoDB Atlas.
3. **Firebase** account for image upload.
4. **Redis** for session management.

### Steps to Run:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/RohanRupam/restaurant-app.git
   cd restaurant-app
   ```

2. **Install dependencies for backend**:
   ```bash
   cd server
   npm install
   ```

3. **Install dependencies for frontend**:
   ```bash
   cd ../client
   npm install
   ```

4. **Set up environment variables**: Create a `.env` file in the `server` directory. Use the following variables:
   ```env
   MONGO_URI=mongodb://localhost:27017/restaurantdb
   JWT_SECRET=your_jwt_secret_key
   REDIS_URL=redis://localhost:6379
   FIREBASE_API_KEY=your_firebase_api_key
   FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
   FIREBASE_PROJECT_ID=your_firebase_project_id
   FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
   FIREBASE_MESSAGING_SENDER_ID=your_firebase_sender_id
   FIREBASE_APP_ID=your_firebase_app_id
   GOOGLE_CLIENT_ID=your_google_client_id
   GOOGLE_CLIENT_SECRET=your_google_client_secret
   FACEBOOK_APP_ID=your_facebook_app_id
   FACEBOOK_APP_SECRET=your_facebook_app_secret
   ```

5. **Start the backend server**:
   ```bash
   cd server
   npm start
   ```

6. **Start the frontend (client)**:
   ```bash
   cd ../client
   npm start
   ```

---

## 📦 MongoDB Setup:

1. **Install MongoDB locally** or create a cloud instance using **MongoDB Atlas**.
2. **Create a new database**:
   ```bash
   use restaurantdb
   ```
3. **Create the required collections** (`users`, `menuitems`, `categories`) using the following command in the MongoDB shell:
   ```bash
   db.createCollection("users")
   db.createCollection("menuitems")
   db.createCollection("categories")
   ```

4. **Connect MongoDB to the app**: Add your MongoDB connection URI in the `.env` file as:
   ```env
   MONGO_URI=mongodb://localhost:27017/restaurantdb
   ```

---

## 📑 API Documentation:

### Authentication:

1. **Login**:
   - `POST /api/auth/login`
   - Body: `{ email: string, password: string }`
   - Response: `{ token: string }`

2. **Sign Up**:
   - `POST /api/auth/signup`
   - Body: `{ email: string, password: string, username: string }`
   - Response: `{ message: "User created", token: string }`

3. **Google Sign-In**:
   - `POST /api/auth/google`
   - Body: `{ token: string }`
   - Response: `{ token: string }`

4. **Facebook Sign-In**:
   - `POST /api/auth/facebook`
   - Body: `{ token: string }`
   - Response: `{ token: string }`

### Menu Management:

1. **Add Menu Item**:
   - `POST /api/menu`
   - Body: `{ name: string, price: number, category: string }`
   - Response: `{ message: "Menu item added" }`

2. **Edit Menu Item**:
   - `PUT /api/menu/:id`
   - Body: `{ name: string, price: number, category: string }`
   - Response: `{ message: "Menu item updated" }`

3. **Delete Menu Item**:
   - `DELETE /api/menu/:id`
   - Response: `{ message: "Menu item deleted" }`

4. **Get Menu Items**:
   - `GET /api/menu`
   - Response: `{ items: [...] }`

---

## 💡 Project Difficulties

During the development of this project, several challenges were encountered and successfully overcome:

1. **Session Management**: Implementing Redis for session management posed difficulties in ensuring that user sessions remained active across multiple devices, but with careful configuration and troubleshooting, this was resolved.
2. **OAuth Integration**: Integrating Google and Facebook OAuth was complex, especially with handling token verification and managing multiple login types. This required careful coordination of authentication flows.
3. **Firebase Image Uploads**: Handling large image uploads with Firebase and ensuring real-time updates on the frontend was challenging but was successfully managed through optimized asynchronous calls.
4. **Error Handling**: Implementing consistent error handling across the API and the frontend was a challenge but was critical to providing a smooth user experience. A robust error handling middleware was created to address this issue.



## 👥 Contributors

- **Rohan Rupam**  
- [GitHub](https://github.com/RohanRupam)  
- Email: rohanrupam14@gmail.com

---
