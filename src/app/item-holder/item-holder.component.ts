import { Component, EventEmitter, Input, Output} from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { DeletionDialogComponent } from '../deletion-dialog/deletion-dialog.component';

@Component({
  selector: 'app-item-holder',
  standalone: true,
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './item-holder.component.html',
  styleUrl: './item-holder.component.css'
})
export class ItemHolderComponent {
  @Input() title!: string; 
  @Input() description!: string;
  @Input() completed!:boolean;
  @Input() date!: string;
  @Input() id!: number; 

  @Output() toggled = new EventEmitter<void>();

  completed_img_source:string = "/assets/images/checkedbox.png";
  pending_img_source:string = "/assets/images/blank-check-box.png";
  current_img:string="";
  cardColor: string = 'white';

  
  constructor(private http: HttpClient, private dialog: MatDialog){
    
  }

  ngOnInit(): void {
    if(!this.completed){
      this.current_img=this.pending_img_source;
    }else{
      this.current_img=this.completed_img_source;
      this.cardColor="antiquewhite";
    }
  }


  openDialog(): void {
    const dialogRef = this.dialog.open(DeletionDialogComponent, {
      width: '300px',        // or '50%' for relative size
      height: '20%',       // optional
      maxWidth: '90vw'       // optional, for responsiveness
    });
  
    dialogRef.afterClosed().subscribe(result => {
      if (result === true) {
        this.deleteItem();
      }
    });
  }

  updateCompleted(): void {
    this.http.put(`http://localhost:8080/api/list/${this.id}`, null)
    .subscribe({
      next: () => {
        console.log(`Item ${this.id} toggle request sent`);
        this.toggled.emit();
      },
      error: err => console.error('Toggle failed', err)
    });
  }

  deleteItem(): void {
    this.http.delete(`http://localhost:8080/api/list/${this.id}`)
      .subscribe({
        next: () => {console.log(`Item ${this.id} deleted`);
        this.toggled.emit();
      },
        error: err => console.error('Delete failed', err)
      });
  }

    

}
