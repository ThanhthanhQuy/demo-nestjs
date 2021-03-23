import {PipeTransform, BadRequestException} from '@nestjs/common'

export class validateInputNumber implements PipeTransform {
    transform(value, metadata) : Number {
        const number = parseInt(value, 10)
        if(isNaN(number)) {throw new BadRequestException('Fail to change')}
        return number
    }
}

