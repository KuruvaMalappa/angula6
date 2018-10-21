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
    this.categoriesListDataSource.data = categoriesList.categories;
   });
  }

  getCurrentNodeData(node: any) {
    this.currentCategoryId = node.categoryID;
    node.parentNodeName = this.parentNode.categoryName;
    const childrenNode = this.nestedTreeControl.getChildren(node);
    this._categoriesService.categorieDataChange.next(node);
  }
  getParentNode(node: Categories) {
    this.currentCategoryId = node.categoryID;
    this.parentNode = node;
  }
}
