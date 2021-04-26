import { Component,OnInit,AfterViewInit } from '@angular/core';
import { ArcgisService } from './arcgis.service';
import MapView from '@arcgis/core/views/MapView'; 
import config from '@arcgis/core/config';
import Map from '@arcgis/core/Map';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  {
  title = 'sampleProgram';

  constructor(public arcgis:ArcgisService) {
   }

  ngOnInit() {
    //this.arcgis.initMap();
    this.initMap();
  }

  ngAfterViewInit(){
    //this.initMap();
  }

  initMap(){
    config.assetsPath = './assets';
    config.apiKey = "xx"
    debugger
    const map = new Map({
      basemap: "arcgis-topographic" //Basemap layer service
    });
    // Create a MapView instance (for 2D viewing) and reference the map instance
    const view = new MapView({
      map: map,
      center: [-118.80500, 34.02700], //Longitude, latitude
      zoom: 13,
      container: "viewDiv"
  });
    view.when(() => console.log('view ready'));
  }

}
