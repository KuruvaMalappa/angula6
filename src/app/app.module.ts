import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FileUploadModule } from 'ng2-file-upload';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavmenuComponent } from './navmenu/navmenu.component';
import { ContentAreaComponent } from './content-area/content-area.component';
import { HttpClientModule } from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { SharedModule } from './shared.module';
import { AppRoutingModule } from './app-routing.module';
import { ModelFormulaLayoutComponent } from './model-formula-layout/model-formula-layout.component';
import { CategoriesDetailViewComponent } from './model-formula-layout/categories-detail-view/categories-detail-view.component';
import { CategoriesTreeViewComponent } from './model-formula-layout/categories-tree-view/categories-tree-view.component';
import { CategoriesTreeService } from './model-formula-layout/categories-tree-view/categories-tree.service';
import { CategoriesTableComponent } from './model-formula-layout/categories-table/categories-table.component';
import { ModelProcessedComponent } from './model-processed/model-processed.component';
import { BepDailogComponent } from './common/bep-dailog/bep-dailog.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavmenuComponent,
    ContentAreaComponent,
    ModelFormulaLayoutComponent,
    CategoriesTreeViewComponent,
    CategoriesDetailViewComponent,
    CategoriesTableComponent,
    ModelProcessedComponent,
    BepDailogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    HttpClientModule,
    FileUploadModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [CategoriesTreeService],
  bootstrap: [AppComponent],
  entryComponents: [
    BepDailogComponent,
],
})
export class AppModule { }
