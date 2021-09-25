import {Controller, Get, Param} from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    // return this.appService.getHello();
    return 'test';
  }
  @Get('/:id')
  getId(
      @Param() params:{id:string}
  ): string {
    // return this.appService.getHello();
    return 'test' + params.id;
  }
}
