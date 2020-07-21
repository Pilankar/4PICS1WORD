import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-l2c',
  templateUrl: './l2c.page.html',
  styleUrls: ['./l2c.page.scss'],
})
export class L2cPage implements OnInit {

	I1: string = "";
	I2: string = "";
	I3: string = "";
	I4: string = "";
	count: number = 0;
	hint1: number = 0;
	Answer1: string = "";
  constructor(public router:Router) {}

  ngOnInit() {
  }
	S(){
	console.log(this.count);
	console.log(this.hint1);
	this.count = this.count + 1;
	if (this.hint1 == 1 && this.count == 3)
		this.count = this.count + 1;
	console.log(this.count);
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
	U(){
	console.log(this.count);
	this.count = this.count + 1;
	if (this.hint1 == 1 && this.count == 3)
		this.count = this.count + 1;
	console.log("U");
		if (this.count == 1){
			this.I1 = "U";
		}
		if (this.count == 2){
			this.I2 = "U";
		}
		if (this.count == 3){
			this.I3 = "U";
		}
		if (this.count == 4){
			this.I4 = "U";
		}
		(document.querySelector("#U") as HTMLInputElement).disabled = true;
	}
	I(){
	console.log(this.count);
	this.count = this.count + 1;
	if (this.hint1 == 1 && this.count == 3)
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
	Y(){
	console.log(this.count);
	this.count = this.count + 1;
	if (this.hint1 == 1 && this.count == 3)
		this.count = this.count + 1;
	console.log("Y");
		if (this.count == 1){
			this.I1 = "Y";
		}
		if (this.count == 2){
			this.I2 = "Y";
		}
		if (this.count == 3){
			this.I3 = "Y";
		}
		if (this.count == 4){
			this.I4 = "Y";
		}
		(document.querySelector("#Y") as HTMLInputElement).disabled = true;
	}
	N(){
	console.log(this.count);
	this.count = this.count + 1;
	if (this.hint1 == 1 && this.count == 3)
		this.count = this.count + 1;
	console.log("N");
		if (this.count == 1){
			this.I1 = "N";
		}
		if (this.count == 2){
			this.I2 = "N";
		}
		if (this.count == 3){
			this.I3 = "N";
		}
		if (this.count == 4){
			this.I4 = "N";
		}
		(document.querySelector("#N") as HTMLInputElement).disabled = true;
	}
	O(){
	console.log(this.count);
	this.count = this.count + 1;
	if (this.hint1 == 1 && this.count == 3)
		this.count = this.count + 1;
	console.log("O");
		if (this.count == 1){
			this.I1 = "O";
		}
		if (this.count == 2){
			this.I2 = "O";
		}
		if (this.count == 3){
			this.I3 = "O";
		}
		if (this.count == 4){
			this.I4 = "O";
		}
		(document.querySelector("#O") as HTMLInputElement).disabled = true;
	}
	K(){
	console.log(this.count);
	this.count = this.count + 1;
	if (this.hint1 == 1 && this.count == 3)
		this.count = this.count + 1;
	console.log("K");
		if (this.count == 1){
			this.I1 = "K";
		}
		if (this.count == 2){
			this.I2 = "K";
		}
		if (this.count == 3){
			this.I3 = "K";
		}
		if (this.count == 4){
			this.I4 = "K";
		}
		(document.querySelector("#K") as HTMLInputElement).disabled = true;
	}
	H(){
	console.log(this.count);
	this.count = this.count + 1;
	if (this.hint1 == 1 && this.count == 3)
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
		complete1(){
	this.Answer1 = this.I1 + this.I2 + this.I3 + this.I4;
		if (this. Answer1 == "SINK"){
		this.router.navigateByUrl("cl2-c");
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
		this.hint1 = 0;
		(document.querySelector("#i1") as HTMLInputElement).style.color="#000";
		(document.querySelector("#i2") as HTMLInputElement).style.color="#000";
		(document.querySelector("#i3") as HTMLInputElement).style.color="#000";
		(document.querySelector("#i4") as HTMLInputElement).style.color="#000";
		(document.querySelector("#S") as HTMLInputElement).disabled = false;
		(document.querySelector("#U") as HTMLInputElement).disabled = false;
		(document.querySelector("#I") as HTMLInputElement).disabled = false;
		(document.querySelector("#Y") as HTMLInputElement).disabled = false;
		(document.querySelector("#N") as HTMLInputElement).disabled = false;
		(document.querySelector("#O") as HTMLInputElement).disabled = false;
		(document.querySelector("#K") as HTMLInputElement).disabled = false;
		(document.querySelector("#H") as HTMLInputElement).disabled = false;
	}
	hint(){
		this.I3 = "N";
		(document.querySelector("#i3") as HTMLInputElement).style.color="#ffe119";
		this.hint1 = 1;
	}
}
