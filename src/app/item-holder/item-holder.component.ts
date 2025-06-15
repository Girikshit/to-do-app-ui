import { Component, Input} from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-item-holder',
  standalone: true,
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './item-holder.component.html',
  styleUrl: './item-holder.component.css'
})
export class ItemHolderComponent {
  @Input() title: string; 
  @Input() description: string;
  @Input() completed:boolean;
  @Input() date: string;
  @Input() id!: BigInteger; 


  constructor(private http: HttpClient){
    this.title='testtitle';
    this.description='test';
    this.completed= false;
    this.date='testdate';
  }


  deleteItem(): void {
    this.http.delete(`http://localhost:8080/api/list/${this.id}`)
      .subscribe({
        next: () => {console.log(`Item ${this.id} deleted`);
        window.location.reload()
      },
        error: err => console.error('Delete failed', err)
      });
  }
    

}
