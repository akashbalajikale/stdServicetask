import { Component, OnInit } from '@angular/core';
import { StudentsService } from '../../services/student.service';
import { Istd } from '../../models/student';

@Component({
  selector: 'app-stdtable',
  templateUrl: './stdtable.component.html',
  styleUrls: ['./stdtable.component.scss']
})
export class StdtableComponent implements OnInit {

  stdData : Array<Istd> = []
  constructor(
    private _stdService : StudentsService
  ) { }

  ngOnInit( ): void {
    this.stdData = this._stdService.fetchAllstd()

  }

  OnRemove(std:Istd){
   let getconfirm = confirm("Are you sure you want to delete this student")
   if(getconfirm){
    this._stdService.removeStd(std)
   }

  }

}
