import { Injectable } from "@angular/core";
import { Istd } from "../models/student";
import { SnackbarService } from "./snackbar.service";

 


@Injectable({
    providedIn : "root"
})
 export class StudentsService{

    stdArray : Array<Istd> =[

        {
            fname : "akash",
            lname : "kale",
            email : "abc@gmail.com",
            contact : 8530713956,
            isActive : true,
            stdId :"123"
        },
        {
            fname : "avinash",
            lname : "kale",
            email : "avinash@gmail.com",
            contact :9876713956,
            isActive : false,
             stdId :"122"
        },
        {
            fname : "rajesh",
            lname : "kale",
            email : "abrajc@gmail.com",
            contact : 887413956,
            isActive : true,
             stdId :"124"
        },
        {
            fname : "mohini",
            lname : "kale",
            email : "mohini@gmail.com",
            contact : 78963956,
            isActive : false,
             stdId :"125"
        }
    ] 
    constructor(
        private _snackbar : SnackbarService
    ){

    }
    fetchAllstd(): Array<Istd>{
        return this.stdArray
    }

    createNewstd(std : Istd){
        this.stdArray.push(std)
        this._snackbar.OpenSnackbar(`New student ${std.fname} ${std.lname} added succefully`)
    }


    removeStd(stdobj : Istd){
        let getindex = this.stdArray.findIndex(std => std.stdId === stdobj.stdId)
        this.stdArray.splice(getindex, 1)
        this._snackbar.OpenSnackbar(`The student ${stdobj.fname} delete succefully`)
    }

 }