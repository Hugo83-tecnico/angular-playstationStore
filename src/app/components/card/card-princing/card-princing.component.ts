import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-princing',
  templateUrl: './card-princing.component.html',
  styleUrls: ['./card-princing.component.css']
})
export class CardPrincingComponent implements OnInit {

  @Input()
  gameType: string = ""
  @Input()
  gamePrice : string= ""

  constructor() { }

  ngOnInit(): void {
  }

}
