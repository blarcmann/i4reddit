import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemComponent, TimeAgoPipe } from './item/item.component';
import { ItemsComponent } from './items/items.component';

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [
    ItemComponent,
    ItemsComponent,
    TimeAgoPipe
  ],
  imports: [
    CommonModule
  ]
})
export class ComponentsModule { }
