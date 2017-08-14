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
    if (!recibo.id) {
      recibo.id = ++this.lastId;
    }
    this.recibos.push(recibo);
    return this;
  }

  // Simulate DELETE /recibos/:id
  deleteReciboById(id: number): ReciboDataService {
    this.recibos = this.recibos
      .filter(recibo => recibo.id !== id);
    return this;
  }

  // Simulate PUT /recibos/:id
  updateReciboById(id: number, values: Object = {}): Recibo {
    let recibo = this.getReciboById(id);
    if (!recibo) {
      return null;
    }
    Object.assign(recibo, values);
    return recibo;
  }

  // Simulate GET /recibos
  getAllRecibos(): Recibo[] {
    return this.recibos;
  }

  // Simulate GET /recibos/:id
  getReciboById(id: number): Recibo {
    return this.recibos
      .filter(recibo => recibo.id === id)
      .pop();
  }

  // Check recibo
  checkReciboById(id: number): boolean {
    let recibo = this.getReciboById(id);
    if (!recibo) {
      return false;
    }
    return true;
  }

  

  
}
