import { HttpException, Injectable } from '@nestjs/common';
import { v4 } from 'uuid';

const mockup: TodoModel[] = [
  {
    id: v4(),
    text: 'Clean up',
    checked: false
  },
  {
    id: v4(),
    text: 'Exercise',
    checked: false
  },
  {
    id: v4(),
    text: 'Workout',
    checked: false
  },
  {
    id: v4(),
    text: 'Appointment A',
    checked: false
  },
  {
    id: v4(),
    text: 'Do something',
    checked: false
  },
  {
    id: v4(),
    text: 'Go home',
    checked: false
  },
]



@Injectable()
export class AppService {

  list(uncheckedOnly: boolean = false): TodoModel[] {
    if(uncheckedOnly) {
      return mockup.filter(item => !item.checked)
    }
    return mockup;
  }

  create(model: TodoCreate): void {
    const data: TodoModel = {
      id: v4(),
      text: model.text,
      checked: false,
    }

    mockup.push(data);
  }

  check(id: string): void {
    const todo = mockup.find(item => item.id === id);
    if(!todo) {
      throw new HttpException('todo not found', 404);
    }

    todo.checked = true;
  }

}
