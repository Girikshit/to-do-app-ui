import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule} from '@angular/common/http';
import { NgIf , CommonModule} from '@angular/common';
import { ItemHolderComponent } from '../item-holder/item-holder.component';


@Component({
  selector: 'app-item-list',
  standalone: true,
  imports: [HttpClientModule, NgIf, CommonModule, ItemHolderComponent],
  templateUrl: './item-list.component.html',
  styleUrl: './item-list.component.css'
})
export class ItemListComponent implements OnInit {

  data: Item[]=[];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<Item[]>('http://localhost:8080/api/list/')
      .subscribe(response => {
        this.data = response;
        console.log(this.data);
        this.data=this.sort(this.data);
      });
  }

  sort(data:Item[]){
    let completedItems:Item[] = this.data.filter(item => item.completed);
    let incompleteItems: Item[]= this.data.filter(item => !item.completed);

    completedItems.sort((a, b) => a.date.localeCompare(b.date));
    incompleteItems.sort((a, b) => a.date.localeCompare(b.date));
    let mergedArray = [...incompleteItems, ...completedItems];

    return mergedArray;
  }
}

interface Item {
  id: number;
  title: string;
  description: string;
  completed:boolean;
  date:string;
}
