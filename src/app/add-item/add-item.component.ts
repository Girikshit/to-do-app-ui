import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import {provideNativeDateAdapter} from '@angular/material/core';
import { FormGroup, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-add-item',
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [MatButtonModule, MatCardModule,MatDatepickerModule,
    MatInputModule,MatFormFieldModule, FormsModule, ReactiveFormsModule],
  templateUrl: './add-item.component.html',
  styleUrl: './add-item.component.css'
})
export class AddItemComponent {

  minDate: Date;
  maxDate: Date;
  form: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router) {
    this.form = this.fb.group({
      date: [''],
      title: [''],
      description: ['']
    });
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth();
    const currentDay = new Date().getDate();
    this.minDate = new Date(currentYear, currentMonth, currentDay);
    this.maxDate = new Date(currentYear + 1, 11, 31);
  }

  onSubmit() {
    const formData = this.form.value;


    const payload = {
      ...formData,
      date: new Date(formData.date).toISOString().split('T')[0]
    };

    this.http.post(`${environment.apiUrl}/list/`, payload)
      .subscribe({
        next: () => {console.log('Item submitted');
          this.router.navigate(['/']);
        },
        error: err => console.error('Submission failed', err)
      });
  
  }

}
