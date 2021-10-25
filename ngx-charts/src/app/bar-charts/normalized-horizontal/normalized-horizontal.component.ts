import { Component, OnInit } from '@angular/core';
import { multi } from '../data';

@Component({
  selector: 'app-normalized-horizontal',
  templateUrl: './normalized-horizontal.component.html',
  styleUrls: ['./normalized-horizontal.component.css']
})
export class NormalizedHorizontalComponent implements OnInit {
  multi: any[];
  view: any[] = [700, 400];

  // options
  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };
  schemeType: string = 'ordinal'
  gradient: boolean = false; 

  showXAxis: boolean = true;
  showYAxis: boolean = true;

  showLegend: boolean = true;
  showXAxisLabel: boolean = true;
  yAxisLabel: string = 'Country';
  showYAxisLabel: boolean = true;
  xAxisLabel: string = 'Normalized Population';

  animations: boolean = true;

  

  constructor() {
    Object.assign(this, { multi })
   }

  ngOnInit(): void {
  }

  onSelect(event) {
    console.log(event);
  }

}
