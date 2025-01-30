const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });
const app = require('./app');




const port = process.env.PORT || 8888;


app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})
