import {Component} from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-add-item-button',
  standalone: true,
  imports: [MatIconModule, MatButtonModule, MatDividerModule, RouterLink],
  templateUrl: './add-item-button.component.html',
  styleUrl: './add-item-button.component.css'
})
export class AddItemButtonComponent {

}
