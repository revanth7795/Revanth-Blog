import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'google-adsense',
  templateUrl: './bannerad.component.html',
  styleUrls: ['./bannerad.component.css']
})
export class BanneradComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    setTimeout(() => {
     try {
        (window["adsbygoogle"] = window["adsbygoogle"] || []).push({});
      } catch (e) {
        console.error(e);
      }
    }, 200);
    }
}
