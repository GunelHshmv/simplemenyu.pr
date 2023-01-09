import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor() { }
  typec:boolean=false
  typef:boolean=false
  types:boolean=false
  change:boolean=false;
  empty:boolean=false
  foodname!:string
  userName!:string ;
  passWord!:string;
  checkArr:Array<any>=['d',"d"];
  listarr:Array<any>=[]

  menu():any{
    this.listarr.push(this.foodname)
    return this.empty=true
  }

 check(): any{
  this.checkArr.forEach((userName:any,passWord:any)=>{
    if(this.userName=='d' && this.passWord=='d'){
  return this.change=true;
}else{
 return false;
}
  })
  } 
  typecola():boolean{
    return this.typef=false,this.types=false,this.typec=true
  }
  typefanta():boolean{
    return this.typec=false,this.types=false,this.typef=true
  }
  typesprite():boolean{
    return this.typec=false,this.typef=false,this.types=true
  }
  ngOnInit(): void {
  }

}
