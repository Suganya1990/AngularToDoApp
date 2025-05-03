import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface TaskModule { 
  id:string,
  title: string,
  description:Date,
  isComplete:boolean

}
