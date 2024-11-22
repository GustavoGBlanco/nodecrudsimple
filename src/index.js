import app from './app.js';
import connectDB from './config/database.js';

const PORT = process.env.PORT || 3002;

connectDB();

app.listen(PORT, ()=> {
    console.log(`Sevidor corriendo en http://localhost:${PORT}`)
})