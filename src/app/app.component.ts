import { Component, OnInit } from '@angular/core';
import { GitSearchService } from "./git-search.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(private GitSearchService: GitSearchService) {
    
  }

  ngOnInit() {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.GitSearchService.gitSearch('rxjs')
    .then((response) => {
      alert("Total Library found " + response.total_count);
    }, (error) => {
      alert("error:" + error.statusText )
    })    
  }
  title = 'app is functional';
}
