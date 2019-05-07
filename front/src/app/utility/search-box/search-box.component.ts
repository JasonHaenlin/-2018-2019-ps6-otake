import { Component, OnInit } from '@angular/core';
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

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.searchUniversity();
  }

  updateUrlByLanguage(writtenTerm: string) {
    if (writtenTerm.length > 0)  {
      this.router.navigate(['/exchange-universities'], {
        queryParams: { search: writtenTerm },
        queryParamsHandling: 'merge'
      });
    } else {
      this.router.navigate(['/exchange-universities'], {
        queryParams: { search: null },
        queryParamsHandling: 'merge'
      });
    }
  }

  searchUniversity() {
    this.searchTerm$.pipe(
    debounceTime(400),
    distinctUntilChanged(),
    map(name => this.updateUrlByLanguage(name))
    ).subscribe();
  }

}
