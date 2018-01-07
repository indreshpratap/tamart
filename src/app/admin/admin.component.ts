import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-admin',
    template:`
    <app-header title="Admin"></app-header>
    <router-outlet></router-outlet>
    ` ,
    
})
export class AdminComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}