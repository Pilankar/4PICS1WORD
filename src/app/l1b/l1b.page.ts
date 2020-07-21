import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-l1b',
  templateUrl: './l1b.page.html',
  styleUrls: ['./l1b.page.scss'],
})
export class L1bPage implements OnInit {
	
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
		(document.querySelector("#T") as HTMLInputElement).disabled = true;
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
	B(){
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
		(document.querySelector("#B") as HTMLInputElement).disabled = true;
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
	Q(){
	this.count = this.count + 1;
	console.log("Q");
		if (this.count == 1){
			this.I1 = "Q";
		}
		if (this.count == 2){
			this.I2 = "Q";
		}
		if (this.count == 3){
			this.I3 = "Q";
		}
		(document.querySelector("#Q") as HTMLInputElement).disabled = true;
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
		if (this. Answer1 == "BAT"){
		this.router.navigateByUrl("cl1b");
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
		(document.querySelector("#T") as HTMLInputElement).disabled = false;
		(document.querySelector("#P") as HTMLInputElement).disabled = false;
		(document.querySelector("#S") as HTMLInputElement).disabled = false;
		(document.querySelector("#B") as HTMLInputElement).disabled = false;
		(document.querySelector("#O") as HTMLInputElement).disabled = false;
		(document.querySelector("#Q") as HTMLInputElement).disabled = false;
		(document.querySelector("#L") as HTMLInputElement).disabled = false;
	}
}

