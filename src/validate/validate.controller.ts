import {Controller, Get, Param, ParseBoolPipe} from '@nestjs/common';
import {validateInputNumber} from "../../pipe/ValidatePipe";

@Controller('validate')
export class ValidateController {
    @Get('/number/:number')
    getNumber(@Param('number', validateInputNumber) id: number): number {
        return id + 3
    }

    @Get('/boolean/:value')
    parseBoolean(@Param('value', new ParseBoolPipe()) value: Boolean): String {
        if(value) return 'Ok'
    }

}
