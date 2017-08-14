import { Component, Input } from '@angular/core';
import {ReciboDataService} from './recibo-data.service';
import {Recibo} from './recibo'; 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: []
})
export class AppComponent {
  @Input() update: boolean;
  newRecibo: Recibo= new Recibo();
  
  constructor(private reciboDataService: ReciboDataService) {
    this.update = false;
  }

  wantUpdate() { 
    this.update = !this.update; 
    
  }

  addRecibo() {
    this.reciboDataService.addRecibo(this.newRecibo);
    this.newRecibo = new Recibo();
  }

  
  removeRecibo(recibo) {
    this.reciboDataService.deleteReciboById(recibo.id);
  }

  updateRecibo(recibo, values) {
    this.reciboDataService.updateReciboById(recibo.id, values);
  }

  get recibos() {
    return this.reciboDataService.getAllRecibos();
  }
}
