import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-l2a',
  templateUrl: './l2a.page.html',
  styleUrls: ['./l2a.page.scss'],
})
export class L2aPage implements OnInit {

	I1: string = "";
	I2: string = "";
	I3: string = "";
	I4: string = "";
	count: number = 0;
	Answer1: string = "";
  constructor(public router:Router) {}

  ngOnInit() {
  }
	L(){
	this.count = this.count + 1;
		console.log("L");
		if (this.count == 1){
			this.I1 = "L";
		}
		if (this.count == 2){
			this.I2 = "L";
		}
		if (this.count == 3){
			this.I3 = "L";
		}
		if (this.count == 4){
			this.I4 = "L";
		}
		(document.querySelector("#L") as HTMLInputElement).disabled = true;
	}
	S(){
	console.log(this.count);
	this.count = this.count + 1;
	console.log("S");
		if (this.count == 1){
			this.I1 = "S";
		}
		if (this.count == 2){
			this.I2 = "S";
		}
		if (this.count == 3){
			this.I3 = "S";
		}
		if (this.count == 4){
			this.I4 = "S";
		}
	(document.querySelector("#S") as HTMLInputElement).disabled = true;
	}
	H(){
	console.log(this.count);
	this.count = this.count + 1;
	console.log("H");
		if (this.count == 1){
			this.I1 = "H";
		}
		if (this.count == 2){
			this.I2 = "H";
		}
		if (this.count == 3){
			this.I3 = "H";
		}
		if (this.count == 4){
			this.I4 = "H";
		}
		(document.querySelector("#H") as HTMLInputElement).disabled = true;
	}
	E1(){
	this.count = this.count + 1;
	console.log("E");
		if (this.count == 1){
			this.I1 = "E";
		}
		if (this.count == 2){
			this.I2 = "E";
		}
		if (this.count == 3){
			this.I3 = "E";
		}
		if (this.count == 4){
			this.I4 = "E";
		}
		(document.querySelector("#E1") as HTMLInputElement).disabled = true;
	}
	E2(){
	this.count = this.count + 1;
	console.log("E");
		if (this.count == 1){
			this.I1 = "E";
		}
		if (this.count == 2){
			this.I2 = "E";
		}
		if (this.count == 3){
			this.I3 = "E";
		}
		if (this.count == 4){
			this.I4 = "E";
		}
		(document.querySelector("#E2") as HTMLInputElement).disabled = true;
	}
	O(){
	this.count = this.count + 1;
	console.log("O");
		if (this.count == 1){
			this.I1 = "O";
		}
		if (this.count == 2){
			this.I2 = "O";
		}
		if(this.count == 3){
			this.I3 = "O";
		}
		if(this.count == 4){
			this.I4 = "O";
		}
		(document.querySelector("#O") as HTMLInputElement).disabled = true;
	}
	I(){
	console.log(this.count);
	this.count = this.count + 1;
	console.log("I");
		if (this.count == 1){
			this.I1 = "I";
		}
		if (this.count == 2){
			this.I2 = "I";
		}
		if (this.count == 3){
			this.I3 = "I";
		}
		if (this.count == 4){
			this.I4 = "I";
		}
		(document.querySelector("#I") as HTMLInputElement).disabled = true;
	}
	M(){
	console.log(this.count);
	this.count = this.count + 1;
	console.log("M");
		if (this.count == 1){
			this.I1 = "M";
		}
		if (this.count == 2){
			this.I2 = "M";
		}
		if (this.count == 3){
			this.I3 = "M";
		}
		if (this.count == 4){
			this.I4 = "M";
		}
		(document.querySelector("#M") as HTMLInputElement).disabled = true;
	}
		complete1(){
	this.Answer1 = this.I1 + this.I2 + this.I3 + this.I4;
		if (this. Answer1 == "SHOE"){
		this.router.navigateByUrl("cl2a");
		}
		else{
			(document.querySelector("#i1") as HTMLInputElement).style.color="#ff0000";
			(document.querySelector("#i2") as HTMLInputElement).style.color="#ff0000";
			(document.querySelector("#i3") as HTMLInputElement).style.color="#ff0000";
			(document.querySelector("#i4") as HTMLInputElement).style.color="#ff0000";
			}
	}
	clear(){
		this.I1 = "";
		this.I2 = "";
		this.I3 = "";
		this.I4 = "";
		this.count = 0;
		(document.querySelector("#i1") as HTMLInputElement).style.color="#000";
		(document.querySelector("#i2") as HTMLInputElement).style.color="#000";
		(document.querySelector("#i3") as HTMLInputElement).style.color="#000";
		(document.querySelector("#i4") as HTMLInputElement).style.color="#000";
		(document.querySelector("#L") as HTMLInputElement).disabled = false;
		(document.querySelector("#S") as HTMLInputElement).disabled = false;
		(document.querySelector("#E1") as HTMLInputElement).disabled = false;
		(document.querySelector("#E2") as HTMLInputElement).disabled = false;
		(document.querySelector("#O") as HTMLInputElement).disabled = false;
		(document.querySelector("#M") as HTMLInputElement).disabled = false;
		(document.querySelector("#H") as HTMLInputElement).disabled = false;
		(document.querySelector("#I") as HTMLInputElement).disabled = false;
	}
}
