import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { CategoriesTreeService } from '../model-formula-layout/categories-tree-view/categories-tree.service';
import { Subscription } from 'rxjs/internal/Subscription';

@Component({
  selector: 'app-model-processed',
  templateUrl: './model-processed.component.html',
  styleUrls: ['./model-processed.component.css']
})
export class ModelProcessedComponent implements OnInit, OnDestroy {
  

  public displayedColumns: string[] = ['Attribute', 'ModelYear', 'ModelId', 'Description', 'Compare', 'Note'];
  public modelProcessedDataSource = new MatTableDataSource([]);
  public categoryModelSubscription: Subscription;
  constructor(private _categoriesService: CategoriesTreeService) { }

  ngOnInit() {
    this.getModelProcessedData();
  }

  getModelProcessedData() {
    this.categoryModelSubscription = this._categoriesService.getModelProcessData().subscribe((modelProcessedData: any) => {
      this.modelProcessedDataSource.data = modelProcessedData;
    });
  }

  compareResults() {
    alert('Development under progress');
  }

  ngOnDestroy(): void {
    this.categoryModelSubscription.unsubscribe();
  }

}
