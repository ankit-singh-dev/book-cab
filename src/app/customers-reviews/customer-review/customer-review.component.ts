import { Component, OnInit } from '@angular/core';
import { CustomerReviews } from 'src/app/models/customer-reviews.model';

@Component({
  selector: 'app-customer-review',
  templateUrl: './customer-review.component.html',
  styleUrls: ['./customer-review.component.css']
})
export class CustomerReviewComponent implements OnInit {

  customerReviews : CustomerReviews[];

  constructor() { }

  ngOnInit(): void {
    this.fetchCustomerReviews();
  }

  fetchCustomerReviews(){
    this.customerReviews = [{
      title : "Good Service",comment : "Service is really good",userName:"Ankit Singh","likeCount":5,commentedOn:new Date()
    },{
      title : "Good Service",comment : "Service is really good",userName:"Ankit Singh","likeCount":6,commentedOn:new Date()
    },{
      title : "Good Service",comment : "Service is really good",userName:"Ankit Singh","likeCount":7,commentedOn:new Date()
    },{
      title : "Good Service",comment : "Service is really good",userName:"Ankit Singh","likeCount":8,commentedOn:new Date()
    },{
      title : "Good Service",comment : "Service is really good",userName:"Ankit Singh","likeCount":9,commentedOn:new Date()
    },{
      title : "Good Service",comment : "Service is really good",userName:"Ankit Singh","likeCount":10,commentedOn:new Date()
    },{
      title : "Good Service",comment : "Service is really good",userName:"Ankit Singh","likeCount":0,commentedOn:new Date()
    },{
      title : "Good Service",comment : "Service is really good",userName:"Ankit Singh","likeCount":2,commentedOn:new Date()
    },{
      title : "Good Service",comment : "Service is really good",userName:"Ankit Singh","likeCount":99,commentedOn:new Date()
    },{
      title : "Good Service",comment : "Service is really good",userName:"Ankit Singh","likeCount":512,commentedOn:new Date()
    }]
  }

  liked(review : CustomerReviews){

  }

}
