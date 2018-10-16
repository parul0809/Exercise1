import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Exercise 1';
  values_N;
  values_p;
  values_q;
  outputArray=[];
  outputString;
  outputError;

  onKey_N(value: number) {
    this.values_N = value;
  };
  onKey_p(value: number) {
    this.values_p = value;
  };
  onKey_q(value: number) {
    this.values_q = value;
  };
  
  onClickMe(){
    if(this.values_q == undefined || this.values_p == undefined || this.values_N == undefined){
      this.outputArray.length = 0;
      this.outputError = "Fields should not be blanked";
    }
    else if(this.values_q >= 9 || this.values_q <= 0 || this.values_p >= 9 || this.values_p <= 0  || this.values_N >= 99 || this.values_N <= 0 ){
      this.outputArray.length = 0;  
      this.outputError = "Please Enter correct fields"
    }
    else{
      this.outputError = "";
      this.outputArray.length = 0;
         for(var i = 1; i <= this.values_N; i++){
            this.outputArray.push(i);
         }
    
         for(var a = 0; a < this.values_N; a++){
                 if(this.outputArray[a] % this.values_p == 0 && this.outputArray[a] /this.values_p!= 1 && this.outputArray[a] %this.values_q== 0 && this.outputArray[a] /this.values_q!= 1 ){
                  this.outputArray[a] = "WATSON"
          }
          else if(this.outputArray[a] % this.values_p== 0 && this.outputArray[a] / this.values_p!= 1 ){
               this.outputArray[a] = "WAT"
          }
    
          else if(this.outputArray[a] %this.values_q== 0 && this.outputArray[a] /this.values_q!= 1 ){
               this.outputArray[a] = "SON"
          }
    
          else{
              this.outputArray[a]=this.outputArray[a]
          }
     }
 }
  this.outputString = this.outputArray.join(' ')
  }
  constructor() {
        
  }
 


}
