const http = require('http');
const express = require('express');
const app = express();
const mailer = require('nodemailer');
 
if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

const hostname = '127.0.0.1';
const PORT=process.env.PORT || 8900;

const SMTP_HOST=process.env.SMTP_HOST || '127.0.0.1';
const SMTP_PORT=process.env.SMTP_PORT || 25;

//console.log(process.env);


const opentransport = mailer.createTransport({
    host: SMTP_HOST,
    port: SMTP_PORT
})

const securetransport = mailer.createTransport({
    host: SMTP_HOST,
    port: SMTP_PORT,
    secure: true,
    auth: {
        user: 'ABC',
        pass: '123'
    }
})

let transport = opentransport;

let textmessage = {
    from: 'emailer_service@domain.com',
    to: 'breasteve@gmail.com',
    subject: 'Text Test Email From Service',
    text: 'I guess this works fine.'
};

let htmlmessage = {
    from: 'emailer_service@domain.com',
    to: 'breasteve@gmail.com',
    subject: 'HTML Test Email From Service',
    html: '<h1>You won!</h1><p>Congrats to you.'
};



const server = http.createServer((req, res) => res.end('Running...'));

server.listen(PORT, hostname, () => {
    console.log(`Server running at http://${hostname}:${PORT}/`);
});


//root
app.get('/', function (req, res) {
    res.end('success');
})

//send text email
app.get('/sendtxt', function (req, res) {
    let out;
    transport.sendMail(textmessage, function(err, info) {
        if(err){
            console.error(err);
            out = err;
        }else{
            console.log(info);
            out = info;
        }
    });
    res.end(out);
})


//send html email
app.get('/sendhtml', function (req, res) {
    let out;
    transport.sendMail(htmlmessage, function(err, info) {
        if(err){
            console.error(err);
            out = err;
        }else{
            console.log(info);
            out = info;
        }
    });
    res.end(out);
})

/*
let attachmentmessage = {
    from: 'emailer_service@domain.com',
    to: 'breasteve@gmail.com',
    subject: 'Attachment Test Email From Service',
    text: 'Those files you wanted.',
    attachments: [{filename: 'puppy.jpg', path: 'images'}]
};

//send attachment email
transport.sendMail(attachmentmessage, function(err, info) {
    if(err) console.error(err);
    else console.log(info);
});
*/
