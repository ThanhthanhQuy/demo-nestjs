import {Injectable} from '@nestjs/common'

@Injectable()
export class AppService {
    getHello(): string {
        return 'Hello World!!!'
    }

    init(): object {
        return {name: 'thanh quy'}
    }
}
