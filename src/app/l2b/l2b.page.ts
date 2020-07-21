import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-l2b',
  templateUrl: './l2b.page.html',
  styleUrls: ['./l2b.page.scss'],
})
export class L2bPage implements OnInit {

	I1: string = "";
	I2: string = "";
	I3: string = "";
	I4: string = "";
	count: number = 0;
	Answer1: string = "";
  constructor(public router:Router) {}

  ngOnInit() {
  }
		U(){
	console.log(this.count);
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
	A(){
	console.log(this.count);
	this.count = this.count + 1;
	console.log("A");
		if (this.count == 1){
			this.I1 = "A";
		}
		if (this.count == 2){
			this.I2 = "A";
		}
		if (this.count == 3){
			this.I3 = "A";
		}
		if (this.count == 4){
			this.I4 = "A";
		}
		(document.querySelector("#A") as HTMLInputElement).disabled = true;
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
		if (this.count == 4){
			this.I4 = "P";
		}
		(document.querySelector("#P") as HTMLInputElement).disabled = true;
	}
	O(){
	console.log(this.count);
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
	T(){
	this.count = this.count + 1;
	console.log("T");
		if (this.count == 1){
			this.I1 = "T";
		}
		if (this.count == 2){
			this.I2 = "T";
		}
		if (this.count == 3){
			this.I3 = "T";
		}
		if (this.count == 4){
			this.I4 = "T";
		}
		(document.querySelector("#T") as HTMLInputElement).disabled = true;
	}
	X(){
	this.count = this.count + 1;
	console.log("X");
		if (this.count == 1){
			this.I1 = "X";
		}
		if (this.count == 2){
			this.I2 = "X";
		}
		if (this.count == 3){
			this.I3 = "X";
		}
		if (this.count == 4){
			this.I4 = "X";
		}
		(document.querySelector("#X") as HTMLInputElement).disabled = true;
	}
		complete1(){
	this.Answer1 = this.I1 + this.I2 + this.I3 + this.I4;
		if (this. Answer1 == "PALM"){
		this.router.navigateByUrl("cl2b");
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
		(document.querySelector("#i5") as HTMLInputElement).style.color="#000";
		(document.querySelector("#U") as HTMLInputElement).disabled = false;
		(document.querySelector("#A") as HTMLInputElement).disabled = false;
		(document.querySelector("#P") as HTMLInputElement).disabled = false;
		(document.querySelector("#O") as HTMLInputElement).disabled = false;
		(document.querySelector("#M") as HTMLInputElement).disabled = false;
		(document.querySelector("#L") as HTMLInputElement).disabled = false;
		(document.querySelector("#T") as HTMLInputElement).disabled = false;
		(document.querySelector("#X") as HTMLInputElement).disabled = false;
	}
}
