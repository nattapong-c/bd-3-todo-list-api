import { Body, Controller, Get, Param, Post, Put, Query } from '@nestjs/common';

import { AppService } from './app.service';
import { ResponseSuccess } from './model/response';
import { TodoCreateDto } from './dto/todo.create';

@Controller('v1/todo')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  list(@Query('uncheck') uncheck: string) {
    return new ResponseSuccess(this.appService.list(uncheck === 'true'));
  }

  @Post()
  create(
    @Body() body: TodoCreateDto
  ) {
    this.appService.create({
      text: body.text
    });

    return new ResponseSuccess('create success');
  }

  @Put(':id')
  check(@Param('id') id: string) {
    this.appService.check(id);
    return new ResponseSuccess('update success');
  }
}
