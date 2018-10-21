import {
    MatButtonModule,
    MatCheckboxModule,
    MatGridListModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatPaginatorModule,
    MatSelectModule,
    MatOptionModule,
    MatTreeModule,
    MatIconModule,
    MatDialogModule
} from '@angular/material';
import {NgModule} from '@angular/core';

@NgModule({
    imports: [
        MatButtonModule,
        MatCheckboxModule,
        MatGridListModule,
        MatTableModule,
        MatFormFieldModule,
        MatInputModule,
        MatPaginatorModule,
        MatSelectModule,
        MatOptionModule,
        MatTreeModule,
        MatIconModule,
        MatDialogModule
    ],
    exports: [
        MatButtonModule,
        MatCheckboxModule,
        MatGridListModule,
        MatTableModule,
        MatFormFieldModule,
        MatInputModule,
        MatPaginatorModule,
        MatSelectModule,
        MatOptionModule,
        MatTreeModule,
        MatIconModule,
        MatDialogModule
    ]
})
export class SharedModule {}
