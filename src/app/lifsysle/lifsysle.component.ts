import { Component, OnInit, ViewChild } from '@angular/core';
import { SkillComponent } from '../skill/skill.component';

@Component({
  selector: 'app-lifsysle',
  templateUrl: './lifsysle.component.html',
  styleUrls: ['./lifsysle.component.css']
})
export class LifsysleComponent implements OnInit {
  name: string = 'Name';
  rez: number = 0;

  get(total){
    if(total === 0){
      this.rez++;
    }
    else{
      this.rez--;
    }
  }
  onChange(){
  }
  constructor() {
    console.log('%cconstructor', 'color: #008080')
  }
  ngOnInit() {
    console.log('%cDoOnInit', 'color: #008080');
  }
  ngDoCheck(){
    console.log('%cDoCheck', 'color: #008080');
  }
  ngOnChanges(){
    console.log('%cOnChanges', 'color: #008080');
  }
  ngAfterViewInit(){
    console.log('%cAfterViewInit', 'color: #008080');
  }
  ngAfterViewChecked(){
    console.log('%cAfterViewChecked', 'color: #008080');
  }
  ngOnDestroy(){
    console.log('%cOnDestroy', 'color: #008080');
  }
}
