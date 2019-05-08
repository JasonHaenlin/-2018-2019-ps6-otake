import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { debounceTime, map, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss']
})
export class SearchBoxComponent implements OnInit {
  public searchTerm$ = new Subject<string>();

  @Output() termsEvent = new EventEmitter<string>();

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.searchUniversity();
  }

  searchUniversity() {
    this.searchTerm$.pipe(
      debounceTime(400),
      distinctUntilChanged(),
      map(name => this.termsEvent.emit(name))
    ).subscribe();
  }

}
