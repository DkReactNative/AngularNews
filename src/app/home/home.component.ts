import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'Demo';
  constructor( private meta: Meta ) { }

  ngOnInit(): void {
   
    this.meta.updateTag({ name: 'viewport', content: 'width=device-width, initial-scale=1' });
  
    this.meta.updateTag({ name: 'viewport', content: 'minimum-scale=1.0, maximum-scale=1.0,width=device-width, user-scalable=no' });
    
     $(document).ready(function() {
         $("head").append('<meta http-equiv="refresh" content="1">');
         this.addTag()
     });


  }

  addTag(){
  var link = document.createElement('meta');
  link.setAttribute('name', 'apple-mobile-web-app-status-bar-style');
  link.content = "black-translucent";
  document.getElementsByTagName('head')[0].appendChild(link);
  }


}
