import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scanqrcode',
  templateUrl: './scanqrcode.page.html',
  styleUrls: ['./scanqrcode.page.scss'],
})
export class ScanqrcodePage implements OnInit {
  code: string;
  constructor() {}

  ngOnInit() {}
  signIn() {
    console.log('Enter Code:' + this.code);
  }
}
