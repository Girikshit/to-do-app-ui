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

  data: any;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get('http://localhost:8080/api/list/')
      .subscribe(response => {
        this.data = response;
        console.log(this.data);
      });
  }

}
