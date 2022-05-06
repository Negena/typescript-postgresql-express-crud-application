// console.log(`welcome ${1+1}`)

// console.log("npm run build with npx tsc ")
// console.log("npm run:watch is npx tsc -w")

import express from 'express';

import router from './routes/router';

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: false}));


app.use(router);


app.listen(3000, () => {
    console.log("runs on the port 3000");
});