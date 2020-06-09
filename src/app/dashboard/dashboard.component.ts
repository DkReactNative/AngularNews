import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../global.service';
import { NgxUiLoaderService } from 'ngx-ui-loader';
declare var $: any;
import * as jQuery from 'jquery';
import { Router } from "@angular/router";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  user;
  page = 1;
  perPage = 10;
  totalPages = 1;
  pagination = [];
  data: any = [];
  dummyData:any=[]
  searchData:any = {
    keyword: 'er',  
    from:new Date(),  
    country:'IN',
  }

  countries = [
    {
        name: "India",
        code: "IN"
    },
    {
        name: "United States",
        code: "US"
    },
    {
        name: "United Kingdom",
        code: "GB"
    },
    {
        name: "United Arab Emirates",
        code: "AE"
    },
    {
        name: "South Africa",
        code: "ZA"
    },
     {
        name: "France",
        code: "FR"
    },
    {
        name: "Germany",
        code: "DE"
    },
    {
        name: "Japan",
        code: "JP"
    },
  ]


  constructor(
    private myservices: GlobalService,
    private ngxService: NgxUiLoaderService,
    private route: Router
  ) {
    
  }

  ngOnInit() {
    this.getRecords();
  }

  getRecords(){
    this.page = 1
    var searchData = this.searchData;    
    var body = `q=${searchData.keyword}&from=${searchData.from}&sortBy=popularity&country=${searchData.country}&apiKey=408a7277e9a048e7a3f2524e053f87af`
    
    this.ngxService.start();   
    this.myservices.get(body, response => { 
      this.ngxService.stop();   
      if(response.status){
      console.log('response',response)                
      this.data = response.articles;
      }
    },err=>{
        this.ngxService.stop();  
        this.myservices.showDangerToast("", err.message); 
    },false)
  }

  deleteRecord(i){
   if (confirm('Are you sure you want to Delete record?')) {
   this.data.splice(i,1);
   this.dummyData(i,1);
   }
  }
  reset(){
	  this.searchData = {
	  keyword: 'er',  
    from:new Date(),  
    country:'IN',
	  }
	  this.getRecords()
	}

  view(record){
   this.myservices.newsData = record;
   this.route.navigate(["detail"]);
  }

  parseDate(dateString: string): Date {
    if (dateString) {
        return new Date(dateString);
    }
    return null;
}
}