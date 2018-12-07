import { Component, OnInit, OnDestroy } from '@angular/core';
import { CategoriesTreeService } from '../categories-tree-view/categories-tree.service';
import { Categories, ModelFormula } from './../categories-tree-view/categories-model';
import { Subscription } from 'rxjs/internal/Subscription';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-categories-detail-view',
  templateUrl: './categories-detail-view.component.html',
  styleUrls: ['./categories-detail-view.component.css']
})
export class CategoriesDetailViewComponent implements OnInit, OnDestroy {
  public categoryData: Categories;
  // public modelFormula = new ModelFormula('', '', '');
  public categoryDataSubscription: Subscription;
  public modelFormulaForm: FormGroup;
  constructor(private _categoriesService: CategoriesTreeService) {}

  ngOnInit() {
    this.modelFormulaForm = new FormGroup({
      categoryID: new FormControl(''),
      categoryName: new FormControl(''),
      parentNodeName: new FormControl(''),
      fundingModel: new FormControl(''),
      maxValue: new FormControl(''),
      modelingValue: new FormControl('')
    });
    this.categoryDataSubscription = this._categoriesService.categorieDataChange.subscribe((currentCategoryData: Categories) => {
      console.log( 'node data detail view', currentCategoryData);
      this.categoryData = currentCategoryData;
      this.modelFormulaForm.controls['categoryID'].setValue(currentCategoryData.categoryID);
      this.modelFormulaForm.controls['categoryName'].setValue(currentCategoryData.categoryName);
      this.modelFormulaForm.controls['parentNodeName'].setValue(currentCategoryData.parentNodeName);
      this.modelFormulaForm.controls['fundingModel'].setValue(currentCategoryData.fundingModel);
      this.modelFormulaForm.controls['maxValue'].setValue(currentCategoryData.maxValue);
      this.modelFormulaForm.controls['modelingValue'].setValue('');
    });
    this.modelFormulaForm.reset();
  }

  modelFormulaSubmit() {
    console.log('this.modelFormula', this.modelFormulaForm.value);
    this._categoriesService.modelFormulaTableDataChange.next(this.modelFormulaForm.value);
  }

  ngOnDestroy(): void {
    if (this.categoryDataSubscription) {
      this.categoryDataSubscription.unsubscribe();
    }
    this.modelFormulaForm.reset();
  }


}
