import { Injectable } from '@nestjs/common';

@Injectable()
export class LoginService {
    getUserInfo() {
        console.log("im a user@@")
    }

    getUserCount() {
        console.log("im get user count")
    }
}
