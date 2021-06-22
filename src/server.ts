import express, { response } from 'express';

const app = express();

app.get('/test',(request, response)=>{
    return response.send('oi')
});

app.post("/test-post", (request, response)=>{
    return response.send('post')
})

app.listen(3000, () => console.log('Server is s'));