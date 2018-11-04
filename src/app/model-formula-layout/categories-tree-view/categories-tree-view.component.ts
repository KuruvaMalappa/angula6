import { NestedTreeControl } from '@angular/cdk/tree';
import { Component, OnInit } from '@angular/core';
import { MatTreeNestedDataSource } from '@angular/material';
import { Categories } from './categories-model';
import { CategoriesTreeService } from './categories-tree.service';

@Component({
  selector: 'app-categories-tree-view',
  templateUrl: './categories-tree-view.component.html',
  styleUrls: ['./categories-tree-view.component.css'],
})
export class CategoriesTreeViewComponent implements OnInit {

  nestedTreeControl: NestedTreeControl<Categories>;
  categoriesListDataSource: MatTreeNestedDataSource<Categories>;
  public parentNode: Categories;
  public currentCategoryId = null;

  constructor(private _categoriesService: CategoriesTreeService) {
    this.nestedTreeControl = new NestedTreeControl<Categories>(this._getChildren);
    this.categoriesListDataSource = new MatTreeNestedDataSource();
  }

  hasNestedChild = (_: number, nodeData: Categories) => (nodeData.categories && !(nodeData.categories.length === 0));
  private _getChildren = (node: Categories) => node.categories;

  ngOnInit() {
    this._categoriesService.getCategoriesList().subscribe((categoriesList: Categories) => {
    this.categoriesListDataSource.data = [categoriesList];
    const listcopy = Object.assign({}, categoriesList);
    this._categoriesService.categorieData.next([listcopy]);
   });
  }

  getCurrentNodeData(node: any) {
    this.parentNode =  undefined;
    const parentTreeNode = this.recurrsiveCategoryList(this.categoriesListDataSource.data, node);
    console.log('parentTreeNode', parentTreeNode);
    this.currentCategoryId = node.categoryID;
    node.parentNodeName = parentTreeNode.categoryName;
    const childrenNode = this.nestedTreeControl.getChildren(node);
    this._categoriesService.categorieDataChange.next(node);
  }

  recurrsiveCategoryList(categoryList, currentNodeElement): Categories {
    if (categoryList && categoryList.length === 0) {
      return this.parentNode;
    } else if (categoryList && categoryList.length > 0) {
      categoryList.forEach((categoryObj: Categories) => {
        if (currentNodeElement && currentNodeElement.parentCategoryID) {
              if (currentNodeElement.parentCategoryID === categoryObj.categoryID) {
                return this.parentNode = categoryObj;
              }
        }
        this.recurrsiveCategoryList(categoryObj.categories, currentNodeElement);
      });
      return this.parentNode;
    }
  }

}
