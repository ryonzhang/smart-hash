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
    this.info = {
      score:0,
      transactions:[]
    };
    this.itemsPerPage= 10;
    this.currentPage=1;
    this.hideAlert();
    this.address='';
  }
 

  title = 'smart-hash';
  isSearch = true;
  address:string;
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
    
    this.http.get('http://hackathon-api.10fungames.com/api/'+this.address+'/info').subscribe(json =>this.info = json);
    this.setSearch(false);
  } 

  change(event: any){
      this.address = event.target.value ;
  }

  setScore(score:number){
     this.http.post('http://hackathon-api.10fungames.com/api/score',{address:this.address,score}).subscribe(json =>console.log());
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
