import { Component, OnInit } from '@angular/core';
import { ToDosServices } from '../../services/todo.service';
import { Itodo } from '../../models/todo';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.scss']
})
export class TodolistComponent implements OnInit {
 todoData : Array<Itodo> = []
  constructor(
    private _todoservice : ToDosServices,
    
  ) { }

  ngOnInit(): void {

    this.todoData = this._todoservice.fetchAllData();
  }

  OnRemove(data : Itodo){
    let getConfirm = confirm(" are you sure you want to remove this todo ")
    if(getConfirm){
      this._todoservice.removeTodo(data)
    }
  }

}
