import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    console.log('im service!!!!!!!!!!!')
    return 'Hello World!';
  }
}
