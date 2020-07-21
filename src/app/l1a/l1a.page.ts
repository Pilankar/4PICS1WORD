import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-l1a',
  templateUrl: './l1a.page.html',
  styleUrls: ['./l1a.page.scss'],
})
export class L1aPage implements OnInit {

 	I1: string = "";
	I2: string = "";
	I3: string = "";
	count: number = 0;
	Answer1: string = "";
  constructor(public router:Router) {}

  ngOnInit() {
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
		(document.querySelector("#A") as HTMLInputElement).disabled = true;
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
		(document.querySelector("#K") as HTMLInputElement).disabled = true;
	}
	C(){
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
		(document.querySelector("#C") as HTMLInputElement).disabled = true;
	}
	D(){
	this.count = this.count + 1;
	console.log("D");
		if (this.count == 1){
			this.I1 = "D";
		}
		if (this.count == 2){
			this.I2 = "D";
		}
		if (this.count == 3){
			this.I3 = "D";
		}
		(document.querySelector("#D") as HTMLInputElement).disabled = true;
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
		(document.querySelector("#R") as HTMLInputElement).disabled = true;
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
		complete1(){
	this.Answer1 = this.I1 + this.I2 + this.I3;
		if (this. Answer1 == "CAR"){
		this.router.navigateByUrl("cl1a");
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
		(document.querySelector("#A") as HTMLInputElement).disabled = false;
		(document.querySelector("#K") as HTMLInputElement).disabled = false;
		(document.querySelector("#C") as HTMLInputElement).disabled = false;
		(document.querySelector("#D") as HTMLInputElement).disabled = false;
		(document.querySelector("#E") as HTMLInputElement).disabled = false;
		(document.querySelector("#O") as HTMLInputElement).disabled = false;
		(document.querySelector("#R") as HTMLInputElement).disabled = false;
		(document.querySelector("#L") as HTMLInputElement).disabled = false;
	}
}
