import { Component, OnInit, ViewChild } from '@angular/core';
import { ObservablesComponent } from 'app/core/observables/observables.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  parentarr = [];
  childarr = [];
  
  @ViewChild("ms")
  myspan:any;

  @ViewChild("testagain")
  testagain:any;

  @ViewChild(ObservablesComponent)
  obsercomp:ObservablesComponent;
  
  constructor() { }

  ngOnInit() {
  // console.log("test again",this.testagain);
    console.log("component",this.obsercomp);
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


  getSpanHtml() {

    return "from fuction: "+(this.myspan.nativeElement.innerHTML);
   }
}
