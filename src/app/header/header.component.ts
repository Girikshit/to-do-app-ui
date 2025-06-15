import { Component } from '@angular/core';
import { AddItemButtonComponent } from '../add-item-button/add-item-button.component';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [AddItemButtonComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  constructor(private router: Router) {}

  navigateToHome() {
    this.router.navigate(['/']);
  }

}
