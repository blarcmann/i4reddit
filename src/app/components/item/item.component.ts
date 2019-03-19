import { Component, OnInit, Input } from '@angular/core';
import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';
import { Item } from 'src/app/models/item';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})
export class ItemComponent implements OnInit {
  @Input() item: Item;
  constructor() { }

  ngOnInit() { }

}

@Pipe({
  name: 'timeAgo'
})

export class TimeAgoPipe implements PipeTransform {
  transform(time: number): string {
    return moment.duration(moment().diff(moment(time * 1000))).humanize();
  }
}
