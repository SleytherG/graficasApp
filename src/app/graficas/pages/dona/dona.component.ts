import { Component, OnInit } from '@angular/core';
import {Color, Label, MultiDataSet} from "ng2-charts";
import {ChartDataSets, ChartType} from "chart.js";

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [
  ]
})
export class DonaComponent {

  public doughnutChartLabels: Label[] = [ 'Download Sales', 'In-Store Sales', 'Mail-Order Sales', 'Other' ];
  public doughnutChartData: MultiDataSet = [
      [ 350, 450, 100, 150 ],
    ];
  public doughnutChartType: ChartType = 'doughnut';

  public colors: Color[] = [
    {
      backgroundColor: [
        '#0075ED',
        '#00BAF7',
        '#00E0DB',
        '#00F7AD',
        '#00ED63',
      ]
    }
  ];

  public actualizar() {
    console.log(this.doughnutChartData[0])
    this.doughnutChartData[0] =
      [
        Math.round(Math.random() * 100),
        Math.round(Math.random() * 100),
        Math.round(Math.random() * 100),
      ]
    console.log(this.doughnutChartData[0])
  }

  constructor() { }


}
