import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { CategoriesTreeService } from '../model-formula-layout/categories-tree-view/categories-tree.service';

@Component({
  selector: 'app-model-processed',
  templateUrl: './model-processed.component.html',
  styleUrls: ['./model-processed.component.css']
})
export class ModelProcessedComponent implements OnInit {

  public displayedColumns: string[] = ['Attribute', 'ModelYear', 'ModelId', 'Description', 'Compare', 'Note'];
  public modelProcessedDataSource = new MatTableDataSource([]);
  constructor(private _categoriesService: CategoriesTreeService) { }

  ngOnInit() {
    this.getModelProcessedData();
  }

  getModelProcessedData() {
    this._categoriesService.getModelProcessData().subscribe((modelProcessedData: any) => {
      this.modelProcessedDataSource.data = modelProcessedData;
    });
  }

  compareResults() {
    alert('Development under progress');
  }

}
