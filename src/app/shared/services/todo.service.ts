import { Injectable } from "@angular/core";
import { Itodo } from "../models/todo";
import { SnackbarService } from "./snackbar.service";

   
@Injectable({
    providedIn : "root"
})
  export class ToDosServices {
     todoArray : Array<Itodo> = [
        {
            todoitem :  "angular",
            todoId : "123"
        },
        {
            todoitem :  "rxjs",
            todoId : "124"
        },
        {
            todoitem :  "typescript",
            todoId : "125"
        },
        {
            todoitem :  "javascript",
            todoId : "126"
        },
        {
            todoitem :  "nodejs",
            todoId : "127"
        }
     ]
    constructor(
        private _snackbar : SnackbarService
    ){

    }
    fetchAllData(): Array<Itodo>{
        return this.todoArray;
    }

    AddTodo(todo : Itodo){
        this.todoArray.push(todo)

        this._snackbar.OpenSnackbar(`new todo item ${todo.todoitem} added succefully`)
    }

    removeTodo(todoobj : Itodo){
        let getIndex = this.todoArray.findIndex(todo => todo.todoId === todoobj.todoId)

        this.todoArray.splice(getIndex, 1)

        this._snackbar.OpenSnackbar(`the todo ${todoobj.todoitem} remove succefully`)
    }
  }