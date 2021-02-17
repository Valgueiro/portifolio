import Service from '@ember/service';

export default class EmailService extends Service {
  sendEmail(destination, subject, body = ''){
    console.log({destination, subject, body})
  }
}
