const mailer = require('nodemailer');
 
const HOST='localhost';
const PORT=8080;

const opentransport = mailer.createTransport({
    host: HOST,
    port: PORT
});

const securetransport = mailer.createTransport({
    host: HOST,
    port: PORT,
    auth: {
        user: 'ABC',
        pass: '123'
    }
});

let transport = opentransport;

let textmessage = {
    from: 'emailer_service@domain.com',
    to: 'breasteve@gmail.com',
    subject: 'Text Test Email From Service',
    text: 'I guess this works fine.'
};

//send text email
transport.sendMail(textmessage, function(err, info) {
    if(err) console.error(err);
    else console.log(info);
});


let htmlmessage = {
    from: 'emailer_service@domain.com',
    to: 'breasteve@gmail.com',
    subject: 'HTML Test Email From Service',
    html: '<h1>You won!</h1><p>Congrats to you.'
};

//send html email
transport.sendMail(htmlmessage, function(err, info) {
    if(err) console.error(err);
    else console.log(info);
});

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
