import { Component } from '@angular/core';

interface Currency {
  name: string, 
  convert: number, 
}

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styles: [`
    .hidden {
      white-space: nowrap !important;
      overflow: hidden !important;
      text-overflow: Ellipsis !important;
    }  
  `]
})
export class ConverterComponent {

  public currencies: Currency[] = [];
  public money!: number;
  public myCurrency: string = 'BSS';
  public wantCurrency: string = 'COL';
  public total: number = 0;

  constructor(){
   this.buildingCurrencies();
  }

  buildingCurrencies(){
   this.currencies = [
        {
          name: 'USD', 
          convert: 1
        },
        {
          name: 'COL', 
          convert: 3500
        },
        {
          name: 'BSS', 
          convert: 3500000
        }
      ]
  }

  onConverter(): void{
    if(this.money){
      let usd = this.money;
      if(this.myCurrency !== 'USD') usd = this.toUsd();

      const curren = this.getCurrency(this.wantCurrency);
      this.total = usd * curren?.convert!;
    }
  }

  toUsd(): number{
    const curren = this.getCurrency(this.myCurrency);
    return this.money / (curren?.convert!);
  }

  getCurrency(name: string){
    return this.currencies.find(c => c.name === name); 
  }

}
