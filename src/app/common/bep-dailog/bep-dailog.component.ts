import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-bep-dailog',
  templateUrl: './bep-dailog.component.html',
  styleUrls: ['./bep-dailog.component.css']
})
export class BepDailogComponent {

  constructor(public dialogRef: MatDialogRef<BepDailogComponent>,
  @Inject(MAT_DIALOG_DATA) public data: any) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}


export interface DialogData {
  title: string;
  modelId?: string;
  description?: string;
  noButtonTitle?: string;
  yesButtonTitle: string;
}

