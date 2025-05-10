# Node.js Playground

This is a minimal Node.js playground project designed for experimenting with microservice architecture, using `Node.js` and tools like `nodemon` for development efficiency and environment management.

---

## 🧰 Features

- Node.js native HTTP server
- Environment variable support via `.env` and `dotenv`
- Auto-restarting dev server using `nodemon`
- Modularized structure for microservices (e.g. `service.js`)
---
## 📁 Project Structure
---
## 🚀 Getting Started
### 1. Clone the Repo

```
git clone https://github.com/alexandergarbuz/node-js-playground.git
cd node-js-playground
```
### 2.  Install Dependencies
```
npm install
```
### 3. Set Up Environment Variables
Create a `.env` file at the root:
```
PORT=3000
HOST=127.0.0.1
```
### 4. Run in Development Mode
This uses `nodemon` for live reloading and dotenv for environment configuration.
```
npm run dev
```
