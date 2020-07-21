import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-l1c',
  templateUrl: './l1c.page.html',
  styleUrls: ['./l1c.page.scss'],
})
export class L1cPage implements OnInit {

	I1: string = "";
	I2: string = "";
	I3: string = "";
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
		(document.querySelector("#S") as HTMLInputElement).disabled = true;
	}
	B1(){
	this.count = this.count + 1;
	console.log("B");
		if (this.count == 1){
			this.I1 = "B";
		}
		if (this.count == 2){
			this.I2 = "B";
		}
		if (this.count == 3){
			this.I3 = "B";
		}
		(document.querySelector("#B1") as HTMLInputElement).disabled = true;
	}
	B2(){
	this.count = this.count + 1;
	console.log("B");
		if (this.count == 1){
			this.I1 = "B";
		}
		if (this.count == 2){
			this.I2 = "B";
		}
		if (this.count == 3){
			this.I3 = "B";
		}
		(document.querySelector("#B2") as HTMLInputElement).disabled = true;
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
		(document.querySelector("#I") as HTMLInputElement).disabled = true;
	}
	V(){
	console.log(this.count);
	this.count = this.count + 1;
	console.log("V");
		if (this.count == 1){
			this.I1 = "V";
		}
		if (this.count == 2){
			this.I2 = "V";
		}
		if (this.count == 3){
			this.I3 = "V";
		}
		(document.querySelector("#V") as HTMLInputElement).disabled = true;
	}
	P(){
	this.count = this.count + 1;
	console.log("P");
		if (this.count == 1){
			this.I1 = "P";
		}
		if (this.count == 2){
			this.I2 = "P";
		}
		if (this.count == 3){
			this.I3 = "P";
		}
		(document.querySelector("#P") as HTMLInputElement).disabled = true;
	}	complete1(){
	this.Answer1 = this.I1 + this.I2 + this.I3;
		if (this. Answer1 == "OIL"){
		this.router.navigateByUrl("cl1c");
		}
		else{
			(document.querySelector("#i1") as HTMLInputElement).style.color="#ff0000";
			(document.querySelector("#i2") as HTMLInputElement).style.color="#ff0000";
			(document.querySelector("#i3") as HTMLInputElement).style.color="#ff0000";
			}
	}
	clear(){
		this.I1 = "";
		this.I2 = "";
		this.I3 = "";
		this.count = 0;
		(document.querySelector("#i1") as HTMLInputElement).style.color="#000";
		(document.querySelector("#i2") as HTMLInputElement).style.color="#000";
		(document.querySelector("#i3") as HTMLInputElement).style.color="#000";
		(document.querySelector("#L") as HTMLInputElement).disabled = false;
		(document.querySelector("#S") as HTMLInputElement).disabled = false;
		(document.querySelector("#B1") as HTMLInputElement).disabled = false;
		(document.querySelector("#B2") as HTMLInputElement).disabled = false;
		(document.querySelector("#O") as HTMLInputElement).disabled = false;
		(document.querySelector("#I") as HTMLInputElement).disabled = false;
		(document.querySelector("#V") as HTMLInputElement).disabled = false;
		(document.querySelector("#P") as HTMLInputElement).disabled = false;
	}
}
