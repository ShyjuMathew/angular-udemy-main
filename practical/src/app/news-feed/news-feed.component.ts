import { Component, OnInit } from '@angular/core';
import { JsonDataService } from '../json-data.service';
import { NewsItem } from './news-interface.interface';

@Component({
  selector: 'app-news-feed',
  templateUrl: './news-feed.component.html',
  styleUrls: ['./news-feed.component.css'],
})
export class NewsFeedComponent implements OnInit {
  newsList: NewsItem[] = [];
  inputValue: string = '';
  selectedTitle = '';

  customSort = (a: NewsItem, b: NewsItem) => {
    const sourceOrder: any = { Bloomberg: 1, Reuters: 2, CNBC: 3 };
    const sourceA = a.source.name;
    const sourceB = b.source.name;

    if (sourceOrder[sourceA] && sourceOrder[sourceB]) {
      return sourceOrder[sourceA] - sourceOrder[sourceB];
    } else if (sourceOrder[sourceA]) {
      return -1;
    } else if (sourceOrder[sourceB]) {
      return 1;
    } else {
      return 0;
    }
  };

  constructor(private jsonData: JsonDataService) { }

  ngOnInit() {
    this.newsList = this.jsonData.jsonData.sort(this.customSort);
  }

  onSearch() {
    this.newsList = this.jsonData.jsonData.filter((el) => {
      if (this.selectedTitle) {
        return el.source.name.toUpperCase() === this.selectedTitle.toUpperCase() && el.description.toLowerCase().includes(this.inputValue.toLowerCase())
      }
      return el.description.toLowerCase().includes(this.inputValue.toLowerCase())
    });
  }

  onSelect(value: any) {
    this.selectedTitle = value.target.value
    if (value.target.value === '') {
      this.newsList = this.jsonData.jsonData.sort(this.customSort);
      return;
    }
    this.newsList = this.jsonData.jsonData.filter(
      (el) => el.source.name.toUpperCase() === value.target.value.toUpperCase()
    );
  }
}
