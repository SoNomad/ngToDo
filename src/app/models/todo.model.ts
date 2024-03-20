import { ITodo } from '../components/types/ITodo';

export class Todo implements ITodo {
  constructor(
    public id: string,
    public name: string,
    public isDone: boolean = false
  ) {}
}
