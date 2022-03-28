import {Component, Input, OnInit} from '@angular/core';
import {ChartDataSets, ChartOptions, ChartType} from "chart.js";
import {Label, MultiDataSet} from "ng2-charts";

@Component({
  selector: 'app-grafica-barra',
  templateUrl: './grafica-barra.component.html',
  styles: [
  ]
})
export class GraficaBarraComponent implements OnInit{

  @Input() horizontalBar: boolean = false;
  @Input() verticalBar: boolean = false;
  @Input() pie: boolean = false;
  @Input() doughnut: boolean = false;

  public barChartOptions: ChartOptions = {
    responsive: true,

  };
  @Input() barChartLabels: Label[] = [];
  public barChartType: ChartType = 'bar';
  @Input() barChartLegend = false;

  @Input() barChartData: ChartDataSets[] = [];

// { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A', backgroundColor: '#ED5F76', hoverBackgroundColor: 'red' },
// { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B', backgroundColor: '#F763C4', hoverBackgroundColor: 'red' },
// { data: [8, 38, 70, 59, 36, 87, 100], label: 'Series C', backgroundColor: '#D665E0', hoverBackgroundColor: 'red' },

  public randomize(): void {
    // Only Change 3 values
    // @ts-ignore
    this.barChartData[0].data = [
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
    ]
    // @ts-ignore
    this.barChartData[1].data = [
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
    ]
    // @ts-ignore
    this.barChartData[2].data = [
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
    ]
  }

  ngOnInit() {
    if ( this.horizontalBar ) {
      this.barChartType = 'horizontalBar';
    }

    if ( this.verticalBar ) {
      this.barChartType = 'bar';
    }

    if ( this.pie ) {
      this.barChartType = 'pie';
    }

    if ( this.doughnut ) {
      this.barChartType = 'doughnut';
    }

  }

}
