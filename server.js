const express = require('express');

const app = express();
const port = process.env.PORT || 3000;
const path=require('path');

app.use(express.static(path.join(__dirname, 'public')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.get('/', (req, res) => {
  res.send('Hello, AWS Elastic Beanstalk!');
});





app.get('/student',(req,res)=>{
res.send('[{"rollno":1,"name":"John Smith","dob":"2002-05-12T00:00:00.000Z","marks":"85.50"},{"rollno":2,"name":"Jane Doe","dob":"2003-01-22T00:00:00.000Z","marks":"92.75"},{"rollno":3,"name":"Bob Johnson","dob":"2001-11-08T00:00:00.000Z","marks":"78.00"},{"rollno":4,"name":"Sarah Williams","dob":"2002-08-15T00:00:00.000Z","marks":"89.25"},{"rollno":5,"name":"David Lee","dob":"2003-03-19T00:00:00.000Z","marks":"95.00"},{"rollno":44,"name":"agrimmm","dob":"2023-06-06T00:00:00.000Z","marks":"99.00"}]');
});


app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
