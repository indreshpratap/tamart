import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  parentarr = [];
  childarr = [];
  constructor() { }

  ngOnInit() {
    this.parentarr=[
      {
      name:"abc",
      id:1,
      childQues:[
        {name:"child que1"},
        {name:"child que2"},
        {name:"child que3"},
      ]
    },
    {
      name:"xyz",
      id:2,
      childQues:[
        {name:"child que1"},
        {name:"child que2"},
        {name:"child que3"},
      ]
    }
  ];
  }

  clickedYes(parentobj) {
    this.childarr = parentobj.childQues;
  }

}
