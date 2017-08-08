import {Injectable} from '@angular/core';
import {Recibo} from './recibo';

@Injectable()
export class ReciboDataService {

  // Placeholder for last id so we can simulate
  // automatic incrementing of id's
  lastId: number = 0;

  // Placeholder for recibo's
  recibos: Recibo[] = [];

  constructor() {
  }

  // Simulate POST /Recibos
  addRecibo(recibo: Recibo): ReciboDataService {
    if (!recibo.num) {
      recibo.num = ++this.lastId;
    }
    this.recibos.push(recibo);
    return this;
  }

  

  
}
