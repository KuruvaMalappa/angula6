import { BepDailogComponent } from './../../common/bep-dailog/bep-dailog.component';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { CategoriesTreeService } from '../categories-tree-view/categories-tree.service';
import { Categories, IModelFormulaTableData } from '../categories-tree-view/categories-model';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({selector: 'app-categories-table',
templateUrl: './categories-table.component.html',
styleUrls: ['./categories-table.component.css']})
export class CategoriesTableComponent implements OnInit {
  public categoriesListData: Categories[];
  public displayedColumns: string[] = ['parentNodeName', 'categoryName', 'fundingModel', 'modelingValue'];
  public modelFormulaTableDataSource = new MatTableDataSource([]);

  constructor(private _categoriesService: CategoriesTreeService, public dialog: MatDialog, private _router: Router) {
    this._categoriesService.modelFormulaTableDataChange.subscribe((responseData) => {
      if (responseData && !(responseData.length === 0)) {
        this.modelFormulaTableDataSource.data = [...this.modelFormulaTableDataSource.data , responseData];
      }
    });
    this._categoriesService.categorieData.subscribe((categoriesData: Categories[]) => {
      console.log( 'categoriesData', categoriesData);
     this.categoriesListData = categoriesData;
    });
  }

  ngOnInit() {}
  onSubmitRunModel(runModelForm) {
    console.log('runModelForm', runModelForm);
    const localCategoryList =  this.categoriesListData;
    console.log('Before updated value', localCategoryList);
    this.recurrsiveCategoryList(localCategoryList);
    const data = {
      'ModelID': null,
      'ModelName': null,
      'ModelDescription': runModelForm.value.modelDescription,
      'ModelCreateDate': '',
      'ModelCreatedBy': '',
      'FormulaCategories': [Object.assign({}, this.categoriesListData[0])]
     };
    console.log('After updated value', data);
    this._categoriesService.categoriesRunModel(data).subscribe((runModelResponse) => {
      console.log('runModelResponse', runModelResponse);
    });
    // this.openDialog();
  }

  recurrsiveCategoryList(categoryList) {
    if (categoryList && categoryList.length === 0) {
      return false;
    } else if (categoryList && categoryList.length > 0) {
      categoryList.forEach((categoryObj: Categories) => {
        if (this.modelFormulaTableDataSource && this.modelFormulaTableDataSource.data && this.modelFormulaTableDataSource.data.length > 0) {
          const modelObject: IModelFormulaTableData = this.modelFormulaTableDataSource.data.find((rowObj) => {
              if (rowObj.categoryID === categoryObj.categoryID) {
                return rowObj;
              }
          });
          if (modelObject) {
            categoryObj.fundingModel = modelObject.modelingValue;
          }
        }
        console.log(categoryObj);
        this.recurrsiveCategoryList(categoryObj.categories);
      });
    }
  }


  openDialog(): void {
    const dialogRef = this.dialog.open(BepDailogComponent, {
      width: 'auto',

      data: {
       title: 'Model Submitted',
       modelId: 1,
       description: 'Generating model. Results can be seen on Results windows shortly.',
       noButtonTitle: '',
       yesButtonTitle: 'Go to Results Page'
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
      this._router.navigate(['/modelprocessedhistory']);
    });
  }
}
