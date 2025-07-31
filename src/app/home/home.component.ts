import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  text = "Hello, I am...";
  text_animation1 = "";
  text_animation2 = "";
  text_animation3 = "";
  i1 = 0;
  i2 = 0;
  i3 = 0;
  name = "Diego Delgado";
  delayedname= "";
  stack = "Fullstack Developer";
  delayedstack="";
  ngOnInit() {
      setTimeout(()=>this.showLeterbyLeter1(), 0 )
      setTimeout(()=>this.showLeterbyLeter2(), 2500 )
      setTimeout(()=>this.showLeterbyLeter3(), 5000 )
      setTimeout(()=>this.namedelay(),8000)
      setTimeout(()=>this.fullstackdelay(), 8000)
    }
  showLeterbyLeter1() {
    if(this.i1 < this.text.length){
      this.text_animation1 += this.text.charAt(this.i1);
      this.i1++;
      setTimeout(() =>  this.showLeterbyLeter1(), 200);

    }
  }
  showLeterbyLeter2(){
    if(this.i2< this.text.length){
      this.text_animation2 += this.text.charAt(this.i2);
      this.i2++;
      setTimeout(() => this.showLeterbyLeter2(), 200);
    }
  }
  showLeterbyLeter3(){
    if (this.i3<this.text.length) {
      this.text_animation3 += this.text.charAt(this.i3);
      this.i3++;
      setTimeout(() => this.showLeterbyLeter3(), 200);
    }
  }
  namedelay(){
    this.delayedname = this.name
  }
  fullstackdelay(){
    this.delayedstack = this.stack
  }
}
