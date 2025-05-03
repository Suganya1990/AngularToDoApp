import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface TaskModule { 
  id:string ,
  title: string,
  date:Date,
  isComplete:boolean

}
