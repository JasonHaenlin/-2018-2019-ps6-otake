import { Component, OnDestroy, OnInit, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { Subscription } from 'rxjs';
import { LoaderState } from './loader';
import { LoaderService } from './loader.service';
@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
}

) export class LoaderComponent implements OnInit, OnDestroy {

  public show = false;
  public loaderActivated = false;
  public transitionTime = 750;
  public load: number;

  private timer;
  private subscription: Subscription;
  private max = 70;

  public transtionStyle = {
    transition: `margin-left ${this.transitionTime}ms ease`
  };

  constructor(private loaderService: LoaderService,
    private cd: ChangeDetectorRef) { }

  ngOnInit() {
    this.subscription = this.loaderService.loaderState.subscribe((state: LoaderState) => {
      this.show = state.show;
      this.shallBeActivated();
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  private refresh() {
    this.cd.detectChanges();
  }

  private shallBeActivated() {
    if (this.show && !this.loaderActivated) { this.startProgress(); }
  }
  private shallBeDesactivated() {
    if (!this.show) { this.stopProgress(); }
  }
  private initAnimation() {
    this.load = 0;
  }
  private updateAnimation() {
    this.load += this.max;
    if (this.load > this.max) { this.initAnimation(); }
    this.refresh();
  }

  startProgress() {
    this.loaderActivated = true;
    this.refresh();
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
    this.refresh();
  }

}
