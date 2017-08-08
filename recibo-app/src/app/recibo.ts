export class Recibo {
  num: number;
  company: string = '';
  service: string='Agua Potable';
  time: number;
  deuda: string='';
  sumary: string='Pagado';

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
