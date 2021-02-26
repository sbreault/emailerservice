# emailerservice
 Email service. Requires SMTP server (i.e. fakeSMTP)

## Dependencies
nodemailer - https://nodemailer.com/about/

# FakeSMTP instance.
To run FakeSMTP:
Assuming you have $JAVA_HOME set.
```shell script
java -jar $FAKE_SMTP_HOME\fakeSMTP-2.0.jar
```
Config FakeSMTP to persist emails to a local directory.

Config your service to use Host IP and port of your FakeSMTP instance.

# config service with SMTP IP and port
$SMTP_HOST='localhost';
$SMTP_PORT=2525;

## Running locally
SMTP_HOST='127.0.0.1' SMTP_PORT=25 node index.js