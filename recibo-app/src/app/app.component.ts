import { Component } from '@angular/core';
import {ReciboDataService} from './recibo-data.service';
import {Recibo} from './recibo'; 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: []
})
export class AppComponent {
  newRecibo: Recibo= new Recibo();
  constructor(private reciboDataService: ReciboDataService) {
  }

  addRecibo() {
    this.reciboDataService.addRecibo(this.newRecibo);
    this.newRecibo = new Recibo();
  }

  
  removeRecibo(recibo) {
    this.reciboDataService.deleteReciboById(recibo.id);
  }

  get recibos() {
    return this.reciboDataService.getAllRecibos();
  }
}
