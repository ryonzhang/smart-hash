import { Component, OnInit } from '@angular/core';
import { HttpClient ,HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import * as $ from 'jquery';

@Component({
  selector: 'root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.css']
})
export class RootComponent implements OnInit {

  constructor(private http: HttpClient) { }
  
  ngOnInit() {
   // this.http.get('http://hackathon-api.10fungames.com/api/'+this.address+'/info').subscribe(json => console.log(json));
    this.title = 'smart-hash';
    this.isSearch = true;
    this.address = "0xea4ad96481d0f5d9d737ff6a3e8027ff0b52843ef37ba48a5a50d68350f07b73";
    // this.info = {
    //   score:0,
    //   transactions:[]
    // };
    this.info = {
      "score": "100",
      "transactions": [{
          "id": "0xea4ad96481d0f5d9d737ff6a3e8027ff0b52843ef37ba48a5a50d68050f07b73",
          "amount": "60000000000000000000",
          "type": 3
        },
        {
          "id": "0x69d8b2dc624496c500fb7cff941dca2ac5bba31699f179f216bd91880fa331db",
          "amount": "141000000000000000000",
          "type": 1
        },
        {
          "id": "0x69d8b2dc624496c500fb7cff941dca2ac5bba31699f179f216bd91880fa331db",
          "amount": "141000000000000000000",
          "type": 2
        },
        {
          "id": "0x69d8b2dc624496c500fb7cff941dca2ac5bba31699f179f216bd91880fa331db",
          "amount": "141000000000000000000",
          "type": 1
        },
        {
          "id": "0x69d8b2dc624496c500fb7cff941dca2ac5bba31699f179f216bd91880fa331db",
          "amount": "141000000000000000000",
          "type": 1
        },
        {
          "id": "0x69d8b2dc624496c500fb7cff941dca2ac5bba31699f179f216bd91880fa331db",
          "amount": "141000000000000000000",
          "type": 1
        },
        {
          "id": "0x69d8b2dc624496c500fb7cff941dca2ac5bba31699f179f216bd91880fa331db",
          "amount": "141000000000000000000",
          "type": 1
        },
        {
          "id": "0x69d8b2dc624496c500fb7cff941dca2ac5bba31699f179f216bd91880fa331db",
          "amount": "141000000000000000000",
          "type": 1
        },
        {
          "id": "0x69d8b2dc624496c500fb7cff941dca2ac5bba31699f179f216bd91880fa331db",
          "amount": "141000000000000000000",
          "type": 1
        },
        {
          "id": "0x69d8b2dc624496c500fb7cff941dca2ac5bba31699f179f216bd91880fa331db",
          "amount": "141000000000000000000",
          "type": 1
        },
        {
          "id": "0x69d8b2dc624496c500fb7cff941dca2ac5bba31699f179f216bd91880fa331db",
          "amount": "141000000000000000000",
          "type": 1
        }, {
          "id": "0xea4ad96481d0f5d9d737ff6a3e8027ff0b52843ef37ba48a5a50d68050f07b73",
          "amount": "60000000000000000000",
          "type": 1
        },
        {
          "id": "0x69d8b2dc624496c500fb7cff941dca2ac5bba31699f179f216bd91880fa331db",
          "amount": "141000000000000000000",
          "type": 1
        },
        {
          "id": "0x69d8b2dc624496c500fb7cff941dca2ac5bba31699f179f216bd91880fa331db",
          "amount": "141000000000000000000",
          "type": 1
        },
        {
          "id": "0x69d8b2dc624496c500fb7cff941dca2ac5bba31699f179f216bd91880fa331db",
          "amount": "141000000000000000000",
          "type": 1
        },
        {
          "id": "0x69d8b2dc624496c500fb7cff941dca2ac5bba31699f179f216bd91880fa331db",
          "amount": "141000000000000000000",
          "type": 1
        },
        {
          "id": "0x69d8b2dc624496c500fb7cff941dca2ac5bba31699f179f216bd91880fa331db",
          "amount": "141000000000000000000",
          "type": 1
        },
        {
          "id": "0x69d8b2dc624496c500fb7cff941dca2ac5bba31699f179f216bd91880fa331db",
          "amount": "141000000000000000000",
          "type": 1
        },
        {
          "id": "0x69d8b2dc624496c500fb7cff941dca2ac5bba31699f179f216bd91880fa331db",
          "amount": "141000000000000000000",
          "type": 1
        },
        {
          "id": "0x69d8b2dc624496c500fb7cff941dca2ac5bba31699f179f216bd91880fa331db",
          "amount": "141000000000000000000",
          "type": 2
        },
        {
          "id": "0x69d8b2dc624496c500fb7cff941dca2ac5bba31699f179f216bd91880fa331db",
          "amount": "141000000000000000000",
          "type": 3
        },
        {
          "id": "0x69d8b2dc624496c500fb7cff941dca2ac5bba31699f179f216bd91880fa331db",
          "amount": "141000000000000000000",
          "type": 1
        }
      ]
    };
    this.itemsPerPage= 10;
    this.currentPage=1;
    this.hideAlert();
  }
 

  title = 'smart-hash';
  isSearch = true;
  address = "0xea4ad96481d0f5d9d737ff6a3e8027ff0b52843ef37ba48a5a50d68350f07b73";
  info:any;
  query:any;
  itemsPerPage: 10;
  currentPage:1


  setSearch(flag :boolean) {
    this.isSearch = flag;
  }

  getClass(type :number) {
    const typeMap = {
      1:'Dangerous',
      2:'Unknown',
      3:'Clean'
    };
    return typeMap[type];
  }

  click() {
    this.setSearch(false);

    //this.http.get('https://d9518525-6a8d-478e-ae33-b5c649bb72f4.mock.pstmn.io/a/info').subscribe(json =>this.info = json);
 
    console.log();
  } 

  setScore(score:number){
     this.http.post('https://efc29511-9a4f-404a-92a4-67463f5556db.mock.pstmn.io',{address:this.address,score}).subscribe(json =>this.info = json);
     this.showAlert();
    }

  showAlert() {
    $(".alert").show();
    var intervalID = window.setInterval(this.hideAlert, 2000);
  } 

  hideAlert(){
    $(".alert").hide();
  }
}
