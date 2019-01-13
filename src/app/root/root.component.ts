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
    this.info = {
      score:0,
      transactions:[]
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
    this.http.get('http://hackathon-api.10fungames.com/api/'+this.address+'/info').subscribe(json =>this.info = json);
  } 

  setScore(score:number){
     this.http.post('http://hackathon-api.10fungames.com/api/score',{address:this.address,score}).subscribe(json =>this.info = json);
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
