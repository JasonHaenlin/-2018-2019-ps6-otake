import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { LoaderState } from './loader';
import { LoaderService } from './loader.service';
@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
}

) export class LoaderComponent implements OnInit, OnDestroy {

  public show = false;
  public loaderActivated = false;
  public transitionTime = 750; // ms
  public load: number;

  private timer;
  private subscription: Subscription;
  private max = 70;

  public transtionStyle = {
    transition: `margin-left ${this.transitionTime}ms ease`
  };

  constructor(private loaderService: LoaderService) {
  }

  ngOnInit() {
    this.subscription = this.loaderService.loaderState.subscribe((state: LoaderState) => {
      this.show = state.show;
      this.shallBeActivated();
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  private shallBeActivated() { if (this.show && !this.loaderActivated) { this.startProgress(); } }
  private shallBeDesactivated() { if (!this.show) { this.stopProgress(); } }

  private initAnimation() { this.load = 0; }
  private updateAnimation() {
    this.load += this.max;
    if (this.load > this.max) { this.initAnimation(); }
  }

  startProgress() {
    this.loaderActivated = true;
    this.initAnimation();
    this.updateAnimation();
    this.timer = setInterval(() => {
      this.updateAnimation();
      this.shallBeDesactivated();
    }, this.transitionTime);
  }

  stopProgress() {
    clearInterval(this.timer);
    this.loaderActivated = false;
    this.initAnimation();
  }

}
