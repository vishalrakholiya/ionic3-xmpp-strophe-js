import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { XMPPService } from '../../app/xmpp.service';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  private jid : string = "";
  private host : string = "";
  private password : string = "";

  constructor(public navCtrl: NavController, public navParams: NavParams, public xmppService: XMPPService) {
    this.host = "okdone-chat.turboapps.in";
    this.password = "919904763022";
    this.jid = "919904763022"
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  login(){
    this.xmppService.login(this.jid, this.host, this.password);
  }
}
