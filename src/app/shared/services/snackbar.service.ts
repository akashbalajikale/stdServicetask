import { Injectable } from "@angular/core";
import { MatSnackBar, MatSnackBarConfig } from "@angular/material/snack-bar";

 



@Injectable({
    providedIn : "root"
})
export class SnackbarService {
    open(arg0: string) {
        throw new Error("Method not implemented.");
    }
    constructor(
        private _MatSnackBar : MatSnackBar
    ){   }
   
    OpenSnackbar(msg : string){
        let matSnackbar : MatSnackBarConfig = {
            duration: 3000,
            horizontalPosition : "left",
            verticalPosition : "top"

        }
        this._MatSnackBar.open(msg, "close", matSnackbar)
    }
    
}