import { Component, Input } from '@angular/core';

@Component({
  selector: 'error',
  template: `<h4>errro page!</h4>`,
  styles: [`h1 { font-family: Lato; }`]
})
export class ErrorComponent  {
  @Input() name: string;
}
