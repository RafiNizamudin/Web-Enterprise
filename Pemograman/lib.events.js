import { EventEmitter } from 'events';

const emitter = new EventEmitter();
emitter.on('Send_Email', (email) => {
    console.info(`email berhasil dikirim: ${email}`);
});

function forgotPassword() {
    console.log('Start Forgot Password Prosses')
    emitter.emit('Send_Email', 'rafi@gmail.com')
}

forgotPassword();