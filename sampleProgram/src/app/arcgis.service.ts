import { Injectable } from '@angular/core';
// import MapView from '@arcgis/core/views/MapView'; 
// import config from '@arcgis/core/config';
// import Map from '@arcgis/core/Map';

@Injectable({
  providedIn: 'root'
})
export class ArcgisService {

  constructor() { }

  // initMap(){
  //   config.assetsPath = '';
  //   config.apiKey = "AAPKe6bb23cd4a4548729760e84d007e0cddtCf8GL_AsDf9cEJ6EruUT-LIis3GRGHb0L5AWkIJpPrfEzWrLM6_DZ66Ta28DFXB";
  //   debugger
  //   const map = new Map({
  //     basemap: "arcgis-topographic" //Basemap layer service
  //   });
  //   // Create a MapView instance (for 2D viewing) and reference the map instance
  //   const view = new MapView({
  //     map: map,
  //     center: [-118.80500, 34.02700], //Longitude, latitude
  //     zoom: 13,
  //     container: "viewDiv"
  // });
  //   view.when(() => console.log('view ready'));
  // }
}
