import { BepDailogComponent } from './../../common/bep-dailog/bep-dailog.component';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { CategoriesTreeService } from '../categories-tree-view/categories-tree.service';
import { Categories } from '../categories-tree-view/categories-model';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({selector: 'app-categories-table',
templateUrl: './categories-table.component.html',
styleUrls: ['./categories-table.component.css']})
export class CategoriesTableComponent implements OnInit {

  public displayedColumns: string[] = ['parentNodeName', 'categoryName', 'fundingModel', 'modelingValue'];
  public modelFormulaTableDataSource = new MatTableDataSource([]);

  constructor(private _categoriesService: CategoriesTreeService, public dialog: MatDialog, private _router: Router) {
    this._categoriesService.modelFormulaTableDataChange.subscribe((responseData) => {
      if (responseData && !(responseData.length === 0)) {
        this.modelFormulaTableDataSource.data = [...this.modelFormulaTableDataSource.data , responseData];
      }
    });
  }

  ngOnInit() {}
  runModel() {
    const data = {
      "categoryID": 0,
      "parentCategoryID": 0,
      "categoryName": "All BEP Categories",
      "categoryDescription": null,
      "fundingModel": null,
      "averageValue": null,
      "maxValue": null,
      "dataTypeID": null,
      "dataTypeName": null,
      "schoolYearBeginActive": 0,
      "schoolYearEndActive": null,
      "active": null,
      "categories": [{
          "categoryID": 2,
          "parentCategoryID": 0,
          "categoryName": "instructional Salaries",
          "categoryDescription": "Instructional Positions (State Share = 70%)",
          "fundingModel": "",
          "averageValue": "",
          "maxValue": "",
          "dataTypeID": null,
          "dataTypeName": null,
          "schoolYearBeginActive": 2016,
          "schoolYearEndActive": null,
          "active": "Y",
          "categories": [{
              "categoryID": 7,
              "parentCategoryID": 2,
              "categoryName": "Regular Instructional Positions",
              "categoryDescription": "All pupil/teacher ratios in kindergarten through Grade 12 are based upon average daily membership as provided for in the Education Improvement Act.",
              "fundingModel": "",
              "averageValue": "",
              "maxValue": "",
              "dataTypeID": null,
              "dataTypeName": null,
              "schoolYearBeginActive": 2016,
              "schoolYearEndActive": null,
              "active": "Y",
              "categories": [{
                  "categoryID": 3,
                  "parentCategoryID": 7,
                  "categoryName": "K-3",
                  "categoryDescription": "The ratio of students to teachers for grades K-3",
                  "fundingModel": "20:1",
                  "averageValue": "20:1",
                  "maxValue": "25:1",
                  "dataTypeID": 1,
                  "dataTypeName": "Ratio",
                  "schoolYearBeginActive": 2016,
                  "schoolYearEndActive": null,
                  "active": "Y",
                  "categories": []
                },
                {
                  "categoryID": 4,
                  "parentCategoryID": 7,
                  "categoryName": "4-6",
                  "categoryDescription": "The ratio of students to teachers for grades 4-6",
                  "fundingModel": "25:1",
                  "averageValue": "25:1",
                  "maxValue": "30:1",
                  "dataTypeID": 1,
                  "dataTypeName": "Ratio",
                  "schoolYearBeginActive": 2016,
                  "schoolYearEndActive": null,
                  "active": "Y",
                  "categories": []
                },
                {
                  "categoryID": 5,
                  "parentCategoryID": 7,
                  "categoryName": "7-9",
                  "categoryDescription": "The ratio of students to teachers for grades 7-9",
                  "fundingModel": "30:1",
                  "averageValue": "30:1",
                  "maxValue": "35:1",
                  "dataTypeID": 1,
                  "dataTypeName": "Ratio",
                  "schoolYearBeginActive": 2016,
                  "schoolYearEndActive": null,
                  "active": "Y",
                  "categories": []
                },
                {
                  "categoryID": 6,
                  "parentCategoryID": 7,
                  "categoryName": "10-12",
                  "categoryDescription": "The ratio of students to teachers for grades 10-12",
                  "fundingModel": "26.5:1",
                  "averageValue": "30:1",
                  "maxValue": "35:1",
                  "dataTypeID": 1,
                  "dataTypeName": "Ratio",
                  "schoolYearBeginActive": 2016,
                  "schoolYearEndActive": null,
                  "active": "Y",
                  "categories": []
                }
              ]
            },
            {
              "categoryID": 9,
              "parentCategoryID": 2,
              "categoryName": "Vocational Instructional Positions",
              "categoryDescription": "All pupil/teacher ratios in vocational education are based upon the full time equivalent average daily membership (FTEADM) in vocational education classes as provided for in the Educational Improvement Act.",
              "fundingModel": "",
              "averageValue": "",
              "maxValue": "",
              "dataTypeID": null,
              "dataTypeName": null,
              "schoolYearBeginActive": 2016,
              "schoolYearEndActive": null,
              "active": "Y",
              "categories": [{
                "categoryID": 10,
                "parentCategoryID": 9,
                "categoryName": "7-12",
                "categoryDescription": "The ratio of students to teachers for grades 7-12",
                "fundingModel": "20:1",
                "averageValue": "20:1",
                "maxValue": "25:1",
                "dataTypeID": 1,
                "dataTypeName": "Ratio",
                "schoolYearBeginActive": 2016,
                "schoolYearEndActive": null,
                "active": "Y",
                "categories": []
              }]
            },
            {
              "categoryID": 11,
              "parentCategoryID": 2,
              "categoryName": "Special Education Teachers",
              "categoryDescription": "Special Education teachers are determined by the number of special education pupils identified and served by option as presented in the following schedule.",
              "fundingModel": "",
              "averageValue": "",
              "maxValue": "",
              "dataTypeID": null,
              "dataTypeName": null,
              "schoolYearBeginActive": 2016,
              "schoolYearEndActive": null,
              "active": "Y",
              "categories": []
            },
            {
              "categoryID": 12,
              "parentCategoryID": 2,
              "categoryName": "English Language Learners",
              "categoryDescription": "English Language Learner teachers are calculated at a ratio of 1 per 20 pupils identified and served.  Teacher positions are calculated on a system wide basis using system wide headcounts.",
              "fundingModel": "",
              "averageValue": "",
              "maxValue": "",
              "dataTypeID": null,
              "dataTypeName": null,
              "schoolYearBeginActive": 2016,
              "schoolYearEndActive": null,
              "active": "Y",
              "categories": []
            },
            {
              "categoryID": 13,
              "parentCategoryID": 2,
              "categoryName": "English Language Translators",
              "categoryDescription": "English Language Learner Translators are calculated at a ratio of 1 per 200 pupils identified and served.",
              "fundingModel": "",
              "averageValue": "",
              "maxValue": "",
              "dataTypeID": null,
              "dataTypeName": null,
              "schoolYearBeginActive": 2016,
              "schoolYearEndActive": null,
              "active": "Y",
              "categories": []
            },
            {
              "categoryID": 14,
              "parentCategoryID": 2,
              "categoryName": "Physical Education Teachers",
              "categoryDescription": "Positions are calculated using system wide grade level ADM.",
              "fundingModel": "",
              "averageValue": "",
              "maxValue": "",
              "dataTypeID": null,
              "dataTypeName": null,
              "schoolYearBeginActive": 2016,
              "schoolYearEndActive": null,
              "active": "Y",
              "categories": []
            },
            {
              "categoryID": 15,
              "parentCategoryID": 2,
              "categoryName": "Elementary Art Teachers",
              "categoryDescription": "Positions are calculated using system wide grade level ADM.",
              "fundingModel": "",
              "averageValue": "",
              "maxValue": "",
              "dataTypeID": null,
              "dataTypeName": null,
              "schoolYearBeginActive": 2016,
              "schoolYearEndActive": null,
              "active": "Y",
              "categories": []
            },
            {
              "categoryID": 16,
              "parentCategoryID": 2,
              "categoryName": "Elementary Music Teachers",
              "categoryDescription": "Positions are calculated using system wide grade level ADM.",
              "fundingModel": "",
              "averageValue": "",
              "maxValue": "",
              "dataTypeID": null,
              "dataTypeName": null,
              "schoolYearBeginActive": 2016,
              "schoolYearEndActive": null,
              "active": "Y",
              "categories": []
            },
            {
              "categoryID": 17,
              "parentCategoryID": 2,
              "categoryName": "Elementary Guidance Councelors",
              "categoryDescription": "Elementary guidance counselors are calculated at the rate of 1 per 500 pupils in grades K – 6.",
              "fundingModel": "",
              "averageValue": "",
              "maxValue": "",
              "dataTypeID": null,
              "dataTypeName": null,
              "schoolYearBeginActive": 2016,
              "schoolYearEndActive": null,
              "active": "Y",
              "categories": []
            },
            {
              "categoryID": 18,
              "parentCategoryID": 2,
              "categoryName": "Secondary Guidance Councelors",
              "categoryDescription": "Elementary guidance counselors are calculated at the rate of 1 per 750 pupils in grades 7 – 12.",
              "fundingModel": "",
              "averageValue": "",
              "maxValue": "",
              "dataTypeID": null,
              "dataTypeName": null,
              "schoolYearBeginActive": 2016,
              "schoolYearEndActive": null,
              "active": "Y",
              "categories": []
            },
            {
              "categoryID": 19,
              "parentCategoryID": 2,
              "categoryName": "Elementary Librarians",
              "categoryDescription": "Elementary Librarians are earned based upon the following enrollment categories.",
              "fundingModel": "",
              "averageValue": "",
              "maxValue": "",
              "dataTypeID": null,
              "dataTypeName": null,
              "schoolYearBeginActive": 2016,
              "schoolYearEndActive": null,
              "active": "Y",
              "categories": []
            },
            {
              "categoryID": 20,
              "parentCategoryID": 2,
              "categoryName": "Secondary Librarians",
              "categoryDescription": "Elementary Librarians are earned based upon the following enrollment categories.",
              "fundingModel": "",
              "averageValue": "",
              "maxValue": "",
              "dataTypeID": null,
              "dataTypeName": null,
              "schoolYearBeginActive": 2016,
              "schoolYearEndActive": null,
              "active": "Y",
              "categories": []
            },
            {
              "categoryID": 21,
              "parentCategoryID": 2,
              "categoryName": "Principals",
              "categoryDescription": "Principals are earned based upon the following enrollment categories.",
              "fundingModel": "",
              "averageValue": "",
              "maxValue": "",
              "dataTypeID": null,
              "dataTypeName": null,
              "schoolYearBeginActive": 2016,
              "schoolYearEndActive": null,
              "active": "Y",
              "categories": []
            },
            {
              "categoryID": 22,
              "parentCategoryID": 2,
              "categoryName": "Elementary Assistant Principals",
              "categoryDescription": "Elementary Assistant Principals are earned based upon the following enrollment categories.",
              "fundingModel": "",
              "averageValue": "",
              "maxValue": "",
              "dataTypeID": null,
              "dataTypeName": null,
              "schoolYearBeginActive": 2016,
              "schoolYearEndActive": null,
              "active": "Y",
              "categories": []
            }
          ]
        },
        {
          "categoryID": 23,
          "parentCategoryID": 0,
          "categoryName": "Classroom Components",
          "categoryDescription": "Classroom component (State share 75%)",
          "fundingModel": "",
          "averageValue": "",
          "maxValue": "",
          "dataTypeID": null,
          "dataTypeName": null,
          "schoolYearBeginActive": 2016,
          "schoolYearEndActive": null,
          "active": "Y",
          "categories": []
        },
        {
          "categoryID": 24,
          "parentCategoryID": 0,
          "categoryName": "Non-Classroom Componenets",
          "categoryDescription": "Non-Classroom Componenets (State Share 50%)",
          "fundingModel": "",
          "averageValue": "",
          "maxValue": "",
          "dataTypeID": null,
          "dataTypeName": null,
          "schoolYearBeginActive": 2016,
          "schoolYearEndActive": null,
          "active": "Y",
          "categories": []
        },
        {
          "categoryID": 25,
          "parentCategoryID": 0,
          "categoryName": "Cost Differential Factor",
          "categoryDescription": "Cost Differential Factor",
          "fundingModel": "",
          "averageValue": "",
          "maxValue": "",
          "dataTypeID": null,
          "dataTypeName": null,
          "schoolYearBeginActive": 2016,
          "schoolYearEndActive": null,
          "active": "Y",
          "categories": []
        },
        {
          "categoryID": 26,
          "parentCategoryID": 0,
          "categoryName": "Fiscal Capacity",
          "categoryDescription": "Fiscal Capacity",
          "fundingModel": "",
          "averageValue": "",
          "maxValue": "",
          "dataTypeID": null,
          "dataTypeName": null,
          "schoolYearBeginActive": 2016,
          "schoolYearEndActive": null,
          "active": "Y",
          "categories": []
        },
        {
          "categoryID": 27,
          "parentCategoryID": 0,
          "categoryName": "Minimum Funding",
          "categoryDescription": "Minimum Funding",
          "fundingModel": "",
          "averageValue": "",
          "maxValue": "",
          "dataTypeID": null,
          "dataTypeName": null,
          "schoolYearBeginActive": 2016,
          "schoolYearEndActive": null,
          "active": "Y",
          "categories": []
        }
      ]
    };
    this._categoriesService.categoriesRunModel(data).subscribe((runModelResponse) => {
      console.log('runModelResponse', runModelResponse);
    });
    this.openDialog();
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
