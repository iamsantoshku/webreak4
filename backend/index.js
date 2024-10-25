// const express = require('express')
// const cors = require('cors')
// const cookieParser = require('cookie-parser')
// const bodyParser = require('body-parser');
// require('dotenv').config()
// const connectDB = require('./config/db')
// const router = require('./routes')

// const app = express()
// app.use(cors({
//     origin : process.env.FRONTEND_URL,
//     credentials : true
// }))

// app.use(express.json({ limit: '50mb' }));
// app.use(express.urlencoded({ limit: '50mb', extended: true }));

// // app.use(express.json())
// app.use(cookieParser())



// app.use("/api",router)
// app.get("/", (req, res)=>{
//     res.send("api working")
// })

// const PORT = 8080 || process.env.PORT
// app.timeout = 120000;

// connectDB().then(()=>{
//     app.listen(PORT,()=>{
//         console.log("connnect to DB")
//         console.log("Server is running "+PORT)
//     })
// })



// const express = require('express');
// const cors = require('cors');
// const cookieParser = require('cookie-parser');
// const bodyParser = require('body-parser'); // Not used but included here if you need it for certain content-types
// require('dotenv').config();
// const connectDB = require('./config/db');
// const router = require('./routes');

// const app = express();

// // CORS configuration
// app.use(cors({
//     origin: process.env.FRONTEND_URL,
//     credentials: true,
// }));

// // Increase body parsing limits for large requests
// app.use(express.json({ limit: '50mb' }));
// app.use(express.urlencoded({ limit: '50mb', extended: true }));

// // Cookie parser middleware
// app.use(cookieParser());

// // Routes
// app.use("/api", router);
// app.get("/", (req, res) => {
//     res.send("API working");
// });

// // Default timeout settings (optional, based on your server's needs)
// const PORT = process.env.PORT || 8080;
// app.timeout = 120000; // 2 minutes

// // Connect to the database and start the server
// connectDB().then(() => {
//     app.listen(PORT, () => {
//         console.log("Connected to DB");
//         console.log("Server is running on port " + PORT);
//     });
// }).catch((err) => {
//     console.error("Failed to connect to DB:", err.message);
//     process.exit(1); // Exit with failure if DB connection fails
// });

// // General error handler (for uncaught errors)
// app.use((err, req, res, next) => {
//     console.error("Unhandled error:", err.message);
//     res.status(500).json({ message: "An unexpected error occurred" });
// });




const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const cookieParser = require('cookie-parser');
require('dotenv').config();
const connectDB = require('./config/db');
const router = require('./routes');

const app = express();

// Security middlewares
app.use(helmet());
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // limit each IP to 100 requests per windowMs
});
app.use(limiter);

// CORS configuration
const allowedOrigins = [process.env.FRONTEND_URL];
app.use(cors({
    origin: (origin, callback) => {
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    credentials: true,
}));

// Increase body parsing limits for large requests
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));

// Cookie parser middleware
app.use(cookieParser());

// Routes
app.use("/api", router);
app.get("/", (req, res) => {
    res.send("API working");
});

// Handle 404 errors
app.use((req, res, next) => {
    res.status(404).json({ message: "Route not found" });
});

// General error handler (for uncaught errors)
app.use((err, req, res, next) => {
    console.error("Unhandled error:", err.stack);
    res.status(500).json({
        message: "An unexpected error occurred",
        error: process.env.NODE_ENV === 'development' ? err.message : undefined
    });
});

// Connect to the database and start the server
connectDB().then(() => {
    const server = app.listen(process.env.PORT || 8080, () => {
        console.log("Connected to DB");
        console.log("Server is running on port " + process.env.PORT || 8080);
    });
    server.setTimeout(120000); // 2 minutes timeout
}).catch((err) => {
    console.error("Failed to connect to DB:", err.message);
    process.exit(1);
});
