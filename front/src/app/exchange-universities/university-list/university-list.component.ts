import { CdkScrollable, ScrollDispatcher } from '@angular/cdk/scrolling';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { University } from '../../../models/University';
import { UniversityService } from '../../../services/university/university.service';
import { ViewportScroller } from '@angular/common';

const OFFSET_FOOTER = 280;
const SCROLL_TIME = 1000;

@Component({
  selector: 'app-university-list',
  templateUrl: './university-list.component.html',
  styleUrls: ['./university-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UniversityListComponent implements OnInit, OnDestroy {

  public universityList: University[] = [];
  public display: boolean;

  private scrollSubscription: Subscription;
  private destination = null;
  private language = null;
  private department = null;
  private pageNumber = 0;

  constructor(public universityService: UniversityService,
    private route: ActivatedRoute,
    private scroll: ScrollDispatcher,
    private cd: ChangeDetectorRef,
    private viewportScroller: ViewportScroller) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.pageNumber = 0;
      this.destination = params.destination;
      this.language = params.language;
      this.department = params.department;
      this.scrollToTop();
      this.universityService.getUniversities(this.pageNumber++, this.destination, this.language, this.department)
        .subscribe((list: University[]) => {
          this.universityList = list;
          this.scrollSub();
          this.display = true;
          this.refresh();
        });
    });
  }

  ngOnDestroy(): void {
    this.scrollSubscription.unsubscribe();
  }

  private refresh() {
    this.cd.detectChanges();
  }

  private scrollSub() {
    if (this.scrollSubscription) {
      this.scrollSubscription.unsubscribe();
    }
    this.scrollSubscription = this.scroll
      .scrolled(SCROLL_TIME)
      .subscribe((data: CdkScrollable) => this.onWindowScroll(data));
  }

  onWindowScroll(data: CdkScrollable) {
    const nt = data.getElementRef().nativeElement;
    const curHeight = nt.scrollHeight - (nt.scrollTop + nt.offsetHeight);
    if (curHeight <= OFFSET_FOOTER) {
      this.scrollSubscription.unsubscribe();
      this.universityService.getUniversities(this.pageNumber++, this.destination, this.department, this.language)
        .subscribe((l) => {
          l.forEach(e => this.universityList.push(e));
          if (l.length === 0) {
            this.display = false;
          } else {
            this.scrollSub();
          }
          this.refresh();
        });
    }
  }

  scrollToTop() {
    this.viewportScroller.scrollToPosition([0, 0]);
  }

}
