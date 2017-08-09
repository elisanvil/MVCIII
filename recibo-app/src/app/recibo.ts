export class Recibo {
  id: number;
  company: string = '';
  service: string='';
  time: number;
  deuda: string='';
  sumary: string='';

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
