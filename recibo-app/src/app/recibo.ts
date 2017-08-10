export class Recibo {
  id: number;
  company: string = '';
  service: string='';
  time: Date;
  deuda: string='';
  sumary: string='';

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
