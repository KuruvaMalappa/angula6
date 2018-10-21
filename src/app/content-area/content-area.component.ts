import { UploadService } from './upload.service';
import {Component, OnInit} from '@angular/core';
import {FileUploader} from 'ng2-file-upload';
import { FileObjectModel, UploadFileMode } from './file-object-model';
import {MatTableDataSource} from '@angular/material';

const URL =  'http://localhost:3000/api';

@Component({selector: 'app-content-area', templateUrl: './content-area.component.html', styleUrls: ['./content-area.component.css']})
export class ContentAreaComponent implements OnInit {
  public uploader: FileUploader = new FileUploader({url: URL, isHTML5: true});
  public hasBaseDropZoneOver = false;
  public filesListModel: Array<UploadFileMode> = [];
  public reportType: string[] = ['report1', 'report2', 'report3', 'report4'];
  public displayedColumns: string[] = ['Name', 'ReportType', 'Size', 'Status', 'Actions'];
  public filesListModelDataSource = new MatTableDataSource([]);
  constructor(private _uploadService: UploadService) {}

  ngOnInit() {}

  public fileOver(e: any): void {
    this.hasBaseDropZoneOver = e;
  }

  public fileDrop(event: any): void {
    this.filePicked(event);
  }



  filePicked(oEvent) {
    // Get The File From The Input
    const target: any = <DataTransfer>(oEvent);
    // tslint:disable-next-line:curly
    if (target.length !== 1) throw new Error('Cannot use multiple files');
    if (target.length > 0 && (!this.isValidFiles(target))) {
      return false;
    }
    const reader: FileReader = new FileReader();
    // need to comment Read as URL
    reader.readAsDataURL(target[0]);
    // need to comment RABS
    // const rABS = !!reader.readAsBinaryString;
    reader.onload = (e: any) => {
      /* read workbook */
      let bstr: any = e.target.result;
      // need to comment RABS
      // if (!rABS) { bstr = new Uint8Array(bstr); }
      bstr = bstr.substring(bstr.indexOf('base64,') + 7);
      // tslint:disable-next-line:max-line-length
      const rowModel: UploadFileMode = { Name: oEvent[0].name , Size: oEvent[0].size, File: bstr, Status: 'success', ReportType: '' };
      this.filesListModelDataSource.data = [...this.filesListModelDataSource.data, rowModel];
    };
    // need to comment RABS
    // if (rABS) { reader.readAsBinaryString(target[0]); } else { reader.readAsArrayBuffer(target[0]); }
}
private isValidFiles(files) {
  // Check Number of files
  const formatTypes = ['.xls', '.xlsx', '.csv'];
  const matchType = formatTypes.find(function (obj) { return files[0].name.indexOf(obj) > 0; });
  if (files.length > 0 && !matchType) {
    alert('uploaded only .xls, .xlsx, .csv file types ');
    return false;
  }
  return true;
}

  uploadfile(rowObject: UploadFileMode) {
     console.log('rowObject', rowObject);
     const inputObject = {File: rowObject.File, ReportType: rowObject.ReportType};
     this._uploadService.submitFile(inputObject).subscribe((response) => {
        console.log('response', response);
     });

  }
  importFiles(event) {
    console.log('event', event.target.files);
    this.filePicked(event.target.files);
  }
  selectReportType(value: string) {
    // this.reportType = value;
  }
}
