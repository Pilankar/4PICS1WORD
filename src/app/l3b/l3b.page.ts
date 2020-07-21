import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-l3b',
  templateUrl: './l3b.page.html',
  styleUrls: ['./l3b.page.scss'],
})
export class L3bPage implements OnInit {
	
	I1: string = "";
	I2: string = "";
	I3: string = "";
	I4: string = "";
	I5: string = "";
	count: number = 0;
	Answer1: string = "";
  constructor(public router:Router) {}

  ngOnInit() {
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
		if (this.count == 5){
			this.I5 = "H";
		}
	(document.querySelector("#H") as HTMLInputElement).disabled = true;
	}
	K(){
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
		if (this.count == 5){
			this.I5 = "K";
		}
		(document.querySelector("#K") as HTMLInputElement).disabled = true;
	}
	C1(){
	this.count = this.count + 1;
	console.log("C");
		if (this.count == 1){
			this.I1 = "C";
		}
		if (this.count == 2){
			this.I2 = "C";
		}
		if (this.count == 3){
			this.I3 = "C";
		}
		if (this.count == 4){
			this.I4 = "C";
		}
		if (this.count == 5){
			this.I5 = "C";
		}
		(document.querySelector("#C1") as HTMLInputElement).disabled = true;
	}
	C2(){
	this.count = this.count + 1;
	console.log("C");
		if (this.count == 1){
			this.I1 = "C";
		}
		if (this.count == 2){
			this.I2 = "C";
		}
		if (this.count == 3){
			this.I3 = "C";
		}
		if (this.count == 4){
			this.I4 = "C";
		}
		if (this.count == 5){
			this.I5 = "C";
		}
		(document.querySelector("#C2") as HTMLInputElement).disabled = true;
	}
	E(){
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
		if (this.count == 5){
			this.I5 = "E";
		}
		(document.querySelector("#E") as HTMLInputElement).disabled = true;
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
		if (this.count == 4){
			this.I4 = "O";
		}
		if (this.count == 5){
			this.I5 = "O";
		}
		(document.querySelector("#O") as HTMLInputElement).disabled = true;
	}
	R(){
	this.count = this.count + 1;
	console.log("R");
		if (this.count == 1){
			this.I1 = "R";
		}
		if (this.count == 2){
			this.I2 = "R";
		}
		if (this.count == 3){
			this.I3 = "R";
		}
		if (this.count == 4){
			this.I4 = "R";
		}
		if (this.count == 5){
			this.I5 = "R";
		}
		(document.querySelector("#r") as HTMLInputElement).disabled = true;
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
		if (this.count == 5){
			this.I5 = "L";
		}
		(document.querySelector("#L") as HTMLInputElement).disabled = true;
	}
	
	complete1(){
	this.Answer1 = this.I1 + this.I2 + this.I3 + this.I4 + this.I5;
		if (this. Answer1 == "CLOCK"){
		this.router.navigateByUrl("completelevel1");
		}
		else{
			(document.querySelector("#i1") as HTMLInputElement).style.color="#ff0000";
			(document.querySelector("#i2") as HTMLInputElement).style.color="#ff0000";
			(document.querySelector("#i3") as HTMLInputElement).style.color="#ff0000";
			(document.querySelector("#i4") as HTMLInputElement).style.color="#ff0000";
			(document.querySelector("#i5") as HTMLInputElement).style.color="#ff0000";
		}
	}
	clear(){
		this.I1 = "";
		this.I2 = "";
		this.I3 = "";
		this.I4 = "";
		this.I5 = "";
		this.count = 0;
		(document.querySelector("#i1") as HTMLInputElement).style.color="#000";
		(document.querySelector("#i2") as HTMLInputElement).style.color="#000";
		(document.querySelector("#i3") as HTMLInputElement).style.color="#000";
		(document.querySelector("#i4") as HTMLInputElement).style.color="#000";
		(document.querySelector("#i5") as HTMLInputElement).style.color="#000";
		(document.querySelector("#O") as HTMLInputElement).disabled = false;
		(document.querySelector("#R") as HTMLInputElement).disabled = false;
		(document.querySelector("#C1") as HTMLInputElement).disabled = false;
		(document.querySelector("#C2") as HTMLInputElement).disabled = false;
		(document.querySelector("#E") as HTMLInputElement).disabled = false;
		(document.querySelector("#K") as HTMLInputElement).disabled = false;
		(document.querySelector("#H") as HTMLInputElement).disabled = false;
		(document.querySelector("#L") as HTMLInputElement).disabled = false;
	}
}
