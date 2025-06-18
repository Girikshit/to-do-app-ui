import { Component } from '@angular/core';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatDialogTitle,
  MatDialogContent,
  MatDialogActions,
  MatDialogClose,
} from '@angular/material/dialog';

import { MatButton } from '@angular/material/button';

@Component({
  selector: 'app-deletion-dialog',
  standalone: true,
  imports: [MatDialogActions, MatButton],
  templateUrl: './deletion-dialog.component.html',
  styleUrl: './deletion-dialog.component.css'
})
export class DeletionDialogComponent {

  constructor(private dialogRef: MatDialogRef<DeletionDialogComponent>) {}

  onNo(){
    this.dialogRef.close(false);
  }

  onYes(){
    this.dialogRef.close(true);
  }

}
