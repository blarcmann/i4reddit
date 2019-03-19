import { Component, OnInit, OnDestroy } from '@angular/core';
import { ItemService } from '../services/item/item.service';
import { Items } from '../models/items';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-top-stories',
  templateUrl: './top-stories.page.html',
  styleUrls: ['./top-stories.component.scss'],
})
export class TopStoriesComponent implements OnInit, OnDestroy {
  items: Items;
  private subscription: Subscription;
  constructor(private itemService: ItemService) { }

  ngOnInit() {
    this.subscription = this.itemService.load(0, 10)
      .subscribe((items) => {
        return this.items = items;
      })
  }
  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

}
