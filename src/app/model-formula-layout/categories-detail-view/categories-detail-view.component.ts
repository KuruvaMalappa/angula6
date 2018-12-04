import { Component, OnInit, OnDestroy } from '@angular/core';
import { CategoriesTreeService } from '../categories-tree-view/categories-tree.service';
import { Categories, ModelFormula } from './../categories-tree-view/categories-model';
import { IModelFormulaTableData } from '../categories-tree-view/categories-model';
import { Subscription } from 'rxjs/internal/Subscription';

@Component({
  selector: 'app-categories-detail-view',
  templateUrl: './categories-detail-view.component.html',
  styleUrls: ['./categories-detail-view.component.css']
})
export class CategoriesDetailViewComponent implements OnInit, OnDestroy {
  public categoryData: Categories;
  public modelFormula = new ModelFormula('', '', '');
  public categoryDataSubscription: Subscription;
  constructor(private _categoriesService: CategoriesTreeService) {}

  ngOnInit() {
    this.categoryDataSubscription = this._categoriesService.categorieDataChange.subscribe((currentCategoryData: Categories) => {
      console.log( 'node data detail view', currentCategoryData);
      this.categoryData = currentCategoryData;
      this.modelFormula.fundingModel = currentCategoryData.fundingModel;
      this.modelFormula.maxValue = currentCategoryData.maxValue;
      this.modelFormula.modelingValue = '';
    });
    this.modelFormula = new ModelFormula('', '', '');
  }

  modelFormulaSubmit() {
    console.log('this.modelFormula', this.modelFormula);
    const modelFormulaTableData: IModelFormulaTableData = {
      categoryID: this.categoryData.categoryID,
      categoryName: this.categoryData.categoryName,
      parentNodeName: this.categoryData.parentNodeName,
      fundingModel: this.modelFormula.fundingModel,
      maxValue: this.modelFormula.maxValue,
      modelingValue: this.modelFormula.modelingValue,
    };
    this._categoriesService.modelFormulaTableDataChange.next(modelFormulaTableData);
  }

  ngOnDestroy(): void {
    if (this.categoryDataSubscription) {
      this.categoryDataSubscription.unsubscribe();
    }
  }


}
