import { Component } from '@angular/core';
import {colors} from '@angular-devkit/core/src/terminal';
import reset = colors.reset;
import {restoreView} from '@angular/core/src/render3';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {



click;
release;

  handlePress() {
    console.log( "Press" );
    this.click = "Pressing";

  }
  handlePan(ev) {
    console.log(ev.center);
  }
  handleSwipe() {
    console.log("swipe");

  }
  handleTap() {
    console.log(("tap"));
  }
}
