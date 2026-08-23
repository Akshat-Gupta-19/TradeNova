# TradeNova

> A full-stack trading platform with a user-facing trading interface and dedicated portfolio dashboard.

TradeNova is a full-stack web application designed around a trading workflow, with separate frontend and dashboard applications connected to an Express.js and MongoDB backend.

---

## ✨ Features

### 🔐 Authentication

* User registration and login.
* Password hashing using bcrypt.
* JWT-based authentication.
* HTTP-only authentication cookies.
* Secure cookie configuration for cross-origin frontend communication.
* Token verification middleware for authenticated users.

### 📊 Trading Data

TradeNova manages core trading entities through MongoDB models:

* Holdings
* Positions
* Orders
* Users

The backend exposes APIs to retrieve holdings, positions, and orders, as well as create new orders.

### 📈 Portfolio Dashboard

The project includes a dedicated dashboard application for presenting trading and portfolio information.

The dashboard uses:

* Material UI
* Chart.js
* React Chart.js 2
* Axios
* React Router

These dependencies support the dashboard's data visualization and portfolio-oriented interface.

### 🖥️ Trading Frontend

The main frontend provides the user-facing trading interface and communicates with the backend through HTTP APIs.

The frontend uses React, React Router, Axios, React Toastify, and cookie-based authentication handling.

---

## 🏗️ Architecture

```text
                         TradeNova
                            │
          ┌─────────────────┼─────────────────┐
          │                 │                 │
          ▼                 ▼                 ▼
      Frontend          Dashboard          Backend
       React              React        Node + Express
          │                 │                 │
          └─────────────────┴─────────┬───────┘
                                      │
                                      ▼
                                   MongoDB
                                      │
                    ┌─────────────────┼─────────────────┐
                    ▼                 ▼                 ▼
                 Holdings          Positions           Orders
```

TradeNova separates the main trading interface from the dedicated dashboard while both applications communicate with the same backend services.

---

## 📁 Project Structure

```text
TradeNova/
│
├── backend/
│   ├── middleware/
│   │   └── AuthMiddleware.js
│   │
│   ├── model/
│   │   ├── HoldingsModel.js
│   │   ├── OrdersModel.js
│   │   ├── PositionsModel.js
│   │   └── UserModel.js
│   │
│   ├── schemas/
│   │   ├── HoldingsSchema.js
│   │   ├── OrdersSchema.js
│   │   └── PositionsSchema.js
│   │
│   ├── util/
│   ├── AuthController.js
│   ├── index.js
│   └── package.json
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   └── landing_page/
│   └── package.json
│
├── dashboard/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   └── data/
│   └── package.json
│
├── package.json
└── package-lock.json
```

The repository currently contains separate `backend`, `frontend`, and `dashboard` applications.

---

## 🔌 Backend API

### Authentication

```http
POST /signup
POST /login
GET /verify
```

### Holdings

```http
GET /allHoldings
```

### Positions

```http
GET /allPositions
```

### Orders

```http
POST /newOrder
GET /allOrders
```

The backend currently exposes APIs for authentication, holdings, positions, and order management.

---

## 🔐 Authentication Flow

```text
User
 │
 ├── Signup
 │      │
 │      ▼
 │   bcrypt password hashing
 │      │
 │      ▼
 │    MongoDB
 │
 └── Login
        │
        ▼
   Password verification
        │
        ▼
    JWT generation
        │
        ▼
 HTTP-only cookie
        │
        ▼
 Authenticated requests
```

The backend generates JWT tokens during signup/login and stores them in HTTP-only cookies. Authentication middleware verifies the token and retrieves the associated user.

---

## 🗄️ Database Models

### User

Stores registered user information and authentication-related data.

### Holdings

Stores portfolio holdings information.

### Positions

Stores active trading position information.

### Orders

Stores order information including:

```text
Order
├── name
├── quantity
├── price
└── mode
```

These models are implemented using Mongoose.

---

## 📊 Dashboard

The dedicated dashboard application uses React with Material UI and Chart.js-based visualization libraries.

```text
Dashboard
    │
    ├── Portfolio Data
    ├── Holdings
    ├── Positions
    ├── Orders
    └── Charts / Visualizations
```

Dashboard dependencies include Material UI, Chart.js, React Chart.js 2, Axios, and React Router.

---

## 🛠️ Tech Stack

### Frontend

* React.js
* React Router
* Axios
* React Toastify
* React Cookies

### Dashboard

* React.js
* Material UI
* Chart.js
* React Chart.js 2
* Axios
* React Router

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT
* bcrypt.js
* Passport
* Passport Local Mongoose
* CORS
* Cookie Parser
* dotenv

The technologies listed above are reflected in the current frontend, dashboard, and backend package configurations.

---

## ⚙️ Environment Variables

Create a `.env` file inside the backend:

```env
PORT=8080
MONGO_URL=your_mongodb_connection_string
TOKEN_KEY=your_jwt_secret
```

> Never commit database credentials or authentication secrets to GitHub.

---

## 📥 Installation

Clone the repository:

```bash
git clone https://github.com/Akshat-Gupta-19/TradeNova.git
cd TradeNova
```

### Backend

```bash
cd backend
npm install
npm start
```

### Frontend

Open another terminal:

```bash
cd frontend
npm install
npm start
```

### Dashboard

Open another terminal:

```bash
cd dashboard
npm install
npm start
```

---

## 🔄 Application Workflow

```text
                 User
                  │
          ┌───────┴────────┐
          ▼                ▼
      Frontend          Dashboard
          │                │
          └───────┬────────┘
                  │
                  ▼
              REST APIs
                  │
                  ▼
              Express.js
                  │
                  ▼
               MongoDB
          ┌───────┼───────┐
          ▼       ▼       ▼
      Holdings Positions Orders
```

---

## 🎯 Project Goals

TradeNova was developed to demonstrate:

* Full-stack application architecture
* Trading-oriented data modeling
* Authentication and authorization
* REST API development
* MongoDB integration
* Portfolio data visualization
* Separation of user-facing and dashboard interfaces
* Secure cookie-based authentication

---

## 🚀 Future Improvements

Potential improvements include:

* Live market data integration
* Real-time price updates
* Advanced order execution
* Portfolio performance analytics
* P&L calculations
* Watchlists
* Market search
* Advanced charting
* Transaction history
* Broker API integration

---

## 👨‍💻 Author

**Akshat Gupta**

GitHub:
https://github.com/Akshat-Gupta-19

---

## 📄 License

This project is currently released under the ISC License.
