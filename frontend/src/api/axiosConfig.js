import axios from "axios";

// Avoid CORS error - Cross origin error
export default axios.create({
    // baseURL: 'http://localhost:8080',
    baseURL: 'https://newsnexus-backend.anoopshivayogi.com',
    headers: {"ngrok-skip-browser-warning": "true", "Access-Control-Allow-Origin": "*"}
});