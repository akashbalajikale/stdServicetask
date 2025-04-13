import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UuidServices } from '../../services/Uuid.service';
import { ToDosServices } from '../../services/todo.service';

@Component({
  selector: 'app-todoform',
  templateUrl: './todoform.component.html',
  styleUrls: ['./todoform.component.scss']
})
export class TodoformComponent implements OnInit {
@ViewChild('todoform') todoform !: NgForm


  constructor(
    private _uuidService : UuidServices,
    private _todoservice : ToDosServices
  ) { }

  ngOnInit(): void {
  }


  OnTodoAdd( ){
     if(this.todoform.valid){
      let newTodo = this.todoform.value;
      newTodo.todoId = this._uuidService.generateUuid()
      this.todoform.reset()
      console.log(newTodo);
      this._todoservice.AddTodo(newTodo)
     }
  }
}
