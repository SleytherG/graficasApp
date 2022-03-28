import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {debounce, debounceTime, delay, map} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class GraficasService {

  constructor(
    private http: HttpClient
  ) { }

  getUsuariosRedesSociales() {
    return this.http.get(`http://localhost:3000/graficas`);
  }

  getUsuariosRedesSocialesDonaData() {
    return this.getUsuariosRedesSociales()
      .pipe(
        debounceTime( 1500 ),
        map(data => {
          const labels = Object.keys( data );
          const values = Object.values( data );
          return { labels, values };
        })
      );
  }

}
