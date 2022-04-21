import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Gesture, GestureController, GestureDetail } from '@ionic/angular';

@Component({
  selector: 'app-gesture-routing',
  templateUrl: './gesture-routing.page.html',
  styleUrls: ['./gesture-routing.page.scss'],
})
export class GestureRoutingPage implements OnInit {

  @ViewChild('slider') private slider: any;

  public details = '';

  constructor(private gestureCtrl: GestureController) { }

  ngOnInit() {
    const gesture: Gesture = this.gestureCtrl.create({
      el: this.slider,
      gestureName: 'slide-gesture',
      threshold: 20,
      onMove: detail => { this.onMove(detail); },
      onEnd: (ev) => { this.end(ev); },
    }, true);
    gesture.enable();
  }
  private end(ev: GestureDetail) {
      console.log('end', ev);
    }

  private onMove(detail) {
    const type = detail.type;
    const currentX = detail.currentX;
    const deltaX = detail.deltaX;
    const velocityX = detail.velocityX;

    this.details = `
      <div>Type: ${type}</div>
      <div>Current X: ${currentX}</div>
      <div>Delta X: ${deltaX}</div>
      <div>Velocity X: ${velocityX}</div>
    `;
  }
}
