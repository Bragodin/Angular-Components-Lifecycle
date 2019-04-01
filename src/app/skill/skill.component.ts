import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit {
  @Input() i: number = 0;
  @Input() skillName: string = 'Name';
  @Input() numb: string;
  total: number = 0;
  @Output() send: EventEmitter<number> = new EventEmitter<number>();
  color: string = 'color: Red';
  totalChange(){
    this.send.emit(this.total);
  }
  subtraction(){
    if(this.i > 0){
      this.i--;
      this.total = 1;
      this.totalChange();
    }
  }
  addition(){
    this.i++;
    this.total = 0;
    this.totalChange();
  }
  constructor() {
    console.log('%cconstructor', this.color);
  }
  ngOnInit() {
    if(this.numb == '2'){
      this.color = 'color: blue';
    }
    if(this.numb == '3'){
      this.color = 'color: yellowgreen';
    }
    console.log('%cDoOnInit', this.color);
  }
  ngDoCheck(){
    console.log('%cDoCheck', this.color);
  }
  ngOnChanges(){
    console.log('%cOnChanges', this.color);
  }
  ngAfterViewInit(){
    console.log('%cAfterViewInit', this.color);
  }
  ngAfterViewChecked(){
    console.log('%cAfterViewChecked', this.color);
  }
  ngOnDestroy(){
    console.log('%cOnDestroy', this.color);
  }
}
