const express = require('express');
const taskRoute = require('./routes/taskRoute');
const connectDB = require('./config/db_connect');
const app = express();

//Middleware
app.use(express.json);

//routes
app.use('/api/v1/tasks', require('./routes/taskRoute'));


const PORT = process.env.PORT || 10000;
/*app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
*/

const startServer = async () => {
    try {
        await connectDB('mongodb+srv://zavinonellamahutin:Tiara12071@cluster0.ofurclq.mongodb.net/');
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    } catch (error) {
        console.error(error);
    }
}
startServer();