import { Injectable } from "@angular/core";

   


@Injectable({
    providedIn : "root"
})
export class UuidServices {


    constructor(){


    } 
    
    generateUuid (){
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (character) => {
            const random = (Math.random() * 16) | 0;
            const value = character === "x" ? random : (random & 0x3) | 0x8;
    
            return value.toString(16);
        });
    };


}