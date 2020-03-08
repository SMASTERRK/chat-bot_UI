import {Component, ViewChild, ElementRef } from '@angular/core';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'poc-screen-component',
  templateUrl: './poc-screen.component.html',
  styleUrls: ['./poc-screen.component.css'],
})
export class PocScreenComponent {

  @ViewChild("sendMessage") sendMessageField: ElementRef;

  constructor(private http: HttpClient) {
    }


  
  chatConv : any[] = [];
  chatBotConv : any[] = [];
  chatInput: string = "";
  chatOutput = "";
  textInput = "";


  ngOnInit(){
    this.sendMessageField.nativeElement.focus();
  }

  sendMessage(message){
      let botMsg = {
        "key": "BOT",
        "value": message
      }
      this.chatConv.push(botMsg);
      
    }


  msgSent() {
    let chatMsg = {
        "key": "user",
        "value": this.chatInput
      }
    this.chatConv.push(chatMsg);
    
    this.sendMessageField.nativeElement.focus();

    console.log('BOT is on the way !!');
    console.log(this.chatInput);
    if(this.chatInput=="@Bot" || this.chatInput=="@bot" || this.chatInput=="hello" || this.chatInput=="Hello" || this.chatInput=="HELLO"){
      let chatMsg = {
        "key": "BOT",
        "value": "Hi !!, Your name please :)"
      };
      this.chatConv.push(chatMsg);
      this.chatInput = "";
      }else if(this.chatInput != "") {
      let chatMsg = {
        "key": "BOT",
        "value": "Sorry, I'm new to this world - Right now in learning phase"
      };
    this.chatConv.push(chatMsg);
    }else {

    }
    
    // Please have your logic here
  
}
}
