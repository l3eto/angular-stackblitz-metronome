import { Component, Input } from '@angular/core';

@Component({
  selector: 'metronome',
  template: `<h1>Hello {{name}}!</h1>`,
  styles: [`h1 { font-family: Lato; }`]
})
export class MetronomeComponent  {
  @Input() name: string;
}
