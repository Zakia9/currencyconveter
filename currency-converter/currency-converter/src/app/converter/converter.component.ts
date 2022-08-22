import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.css']
})
export class ConverterComponent implements OnInit {

  cadToUsAmount = 1;
  cad = 'CAD';
  usd = 'USD';

  cadToUsdRate = 0.89

  convertCadToUsd(): number{
    return this.cadToUsAmount * this.cadToUsdRate;
  }

  cadToEuroAmount = 1
  euro = 'Euro';

  cadToEurodRate = 0.29

  convertCadToEuro(): number{
    return this.cadToEuroAmount * this.cadToEurodRate;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
