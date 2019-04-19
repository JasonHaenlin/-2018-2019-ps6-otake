import { Component, OnInit, AfterViewChecked, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscriber, Subscription } from 'rxjs';
import { University } from '../../../models/University';
import { UniversityService } from '../../../services/university/university.service';
import { ScrollDispatcher, CdkScrollable } from '@angular/cdk/scrolling';

const offsetFooter = 280;

@Component({
  selector: 'app-university-list',
  templateUrl: './university-list.component.html',
  styleUrls: ['./university-list.component.scss']
})
export class UniversityListComponent implements OnInit, OnDestroy {
  public universityList: University[];
  public scrollSubscription: Subscription;

  constructor(public universityService: UniversityService, private route: ActivatedRoute, public scroll: ScrollDispatcher) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.universityService.getUniversities(params.destination, params.language, params.department)
        .subscribe((l: University[]) => {
          this.universityList = l;
        });
    });
    this.scrollSubscription = this.scroll
      .scrolled()
      .subscribe((data: CdkScrollable) => {
        this.onWindowScroll(data);
      });
  }

  ngOnDestroy(): void {
    this.scrollSubscription.unsubscribe();
  }

  onWindowScroll(data: CdkScrollable) {
    const scrollHeight = data.getElementRef().nativeElement.scrollHeight;
    const scrollTop = data.getElementRef().nativeElement.scrollTop;
    const offsetHeight = data.getElementRef().nativeElement.offsetHeight;
    const curHeight = scrollHeight - (scrollTop + offsetHeight);
    if (curHeight <= offsetFooter) {
      console.log('load!!!!!!');
      this.scrollSubscription.unsubscribe();
    }
  }

}
