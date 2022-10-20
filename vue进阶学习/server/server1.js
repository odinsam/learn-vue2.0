const express = require('express');
const app = express();

app.use((request, response, next) => {
    console.log('server1被请求');
    next();
});

app.get('/student', (request, response) => {
    const student = [
        { id: 1, stuName: 'odinsam1', age: 24 },
        { id: 2, stuName: 'odinsam2', age: 18 },
        { id: 3, stuName: 'odinsam3', age: 20 }
    ];
    response.send(student);
});

app.listen(8899, (err) => {
    if (!err)
        console.log(
            '服务器1启动，请求学生信息的url为: http://localhost:8899/student'
        );
});
