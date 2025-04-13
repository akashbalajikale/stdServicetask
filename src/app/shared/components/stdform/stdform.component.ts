import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Istd } from '../../models/student';
import { UuidServices } from '../../services/Uuid.service';
import { StudentsService } from '../../services/student.service';

@Component({
  selector: 'app-stdform',
  templateUrl: './stdform.component.html',
  styleUrls: ['./stdform.component.scss']
})
export class StdformComponent implements OnInit {
@ViewChild("stdform") stdform !: NgForm;

  constructor(
    private _UuidService : UuidServices,
    private _stdService : StudentsService
  ) { }

  ngOnInit(): void {
  }

  OnStdAdd(){
    if(this.stdform.valid){
      let stdObj : Istd = this.stdform.value;
      stdObj.stdId = this._UuidService.generateUuid()
     
      
      stdObj.isActive = this.stdform.value.isActive === "Yes" ? true : false;
      console.log(stdObj);
      
      this.stdform.reset()
    
      this._stdService.createNewstd(stdObj)
      
    }
  }

}
