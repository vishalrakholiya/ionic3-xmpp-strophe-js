import { Component } from '@angular/core';
import { IonicPage, ViewController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-chat-invite',
  templateUrl: 'chat-invite.html',
})
export class ChatInvitePage {
  private jId: string = "";

  constructor(private view: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChatInvitePage');
  }

  closeModal() {
    this.view.dismiss("");
  }

  invite() {  	
    this.view.dismiss(this.jId);
  }

}
