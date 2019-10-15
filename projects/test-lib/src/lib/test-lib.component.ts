import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tl-testLib',
  template: `
    <p>
      test-lib works!
    </p>
  `,
  styles: []
})
export class TestLibComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
