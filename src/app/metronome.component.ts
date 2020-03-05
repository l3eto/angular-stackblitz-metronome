import { Component, Input } from '@angular/core';

@Component({
  selector: 'metronome',
  template: `<h4>metronome {{name}}!</h4>`,
  styles: [`h1 { font-family: Lato; }`]
})
export class MetronomeComponent  {
  @Input() name: string;
}
