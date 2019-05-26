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
    
    // Please have your logic here
  
}
