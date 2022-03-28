import { Component, OnInit } from '@angular/core';
import {GraficasService} from "../../services/graficas.service";
import {Color, Label, MultiDataSet} from "ng2-charts";
import {ChartType} from "chart.js";

@Component({
  selector: 'app-dona-http',
  templateUrl: './dona-http.component.html',
  styles: [
  ]
})
export class DonaHttpComponent implements OnInit {

  public doughnutChartLabels: Label[] = [
    'Download Sales', 'In-Store Sales', 'Mail-Order Sales', 'Other'
  ];
  public doughnutChartData: MultiDataSet = [
    // [ 350, 450, 100, 150 ],
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


  constructor(
    private graficasService: GraficasService
  ) { }

  ngOnInit(): void {
    // this.graficasService.getUsuariosRedesSociales()
    //   .subscribe(data => {
    //     console.log(data);
    //     const labels = Object.keys( data );
    //     const values = Object.values( data );
    //     this.doughnutChartLabels = labels;
    //     this.doughnutChartData = [...values];
    //     console.log( this.doughnutChartData )
    //   }
    // )
    this.graficasService.getUsuariosRedesSocialesDonaData()
      .subscribe(
        ( {labels, values }) => {
          this.doughnutChartLabels = labels;
          this.doughnutChartData.push( values );
          console.log(labels);
          console.log(values);
        }
      )
  }

}
