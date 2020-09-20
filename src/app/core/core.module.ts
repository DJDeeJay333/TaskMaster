import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Essential to avoid errors in Navigation
import { MatToolbarModule} from '@angular/material/toolbar'
import { MatIconModule} from '@angular/material/icon'
import { MatSidenavModule} from '@angular/material/sidenav'
import { MatListModule} from '@angular/material/list';

// //Additional to actually make navigation work
// import {ScrollingModule} from '@angular/cdk/scrolling';
// import { MatMenuModule} from '@angular/material/menu';
// import { MatRadioModule} from '@angular/material/radio'
// import { MatSelectModule} from '@angular/material/select'
// import { MatSliderModule} from '@angular/material/slider'
// import { MatSlideToggleModule} from '@angular/material/slide-toggle'

// //batch#2
// import {DragDropModule} from '@angular/cdk/drag-drop';
// import {CdkTableModule} from '@angular/cdk/table';
// import {CdkTreeModule} from '@angular/cdk/tree';

// import {  MatAutocompleteModule} from '@angular/material/autocomplete';
// import {  MatBadgeModule } from '@angular/material/badge';
// import {  MatBottomSheetModule} from '@angular/material/bottom-sheet';
// import {  MatButtonModule} from '@angular/material/button';
// import {  MatButtonToggleModule } from '@angular/material/button-toggle';
// import {  MatCardModule, } from '@angular/material/card';
// import {  MatCheckboxModule,} from '@angular/material/checkbox';
// import {  MatChipsModule,} from '@angular/material/chips';
// import {  MatDatepickerModule,} from '@angular/material/datepicker';
// import {  MatDialogModule,} from '@angular/material/dialog';
// import { MatDividerModule} from '@angular/material/divider';
// import { MatExpansionModule} from '@angular/material/expansion';
// import { MatGridListModule} from '@angular/material/grid-list'
// import { MatInputModule} from '@angular/material/input'
// import { MatNativeDateModule} from '@angular/material/core' // something different, custom added
// import { MatPaginatorModule} from '@angular/material/paginator'
// import { MatProgressBarModule} from '@angular/material/progress-bar'
// import { MatProgressSpinnerModule} from '@angular/material/progress-spinner'
// import { MatSnackBarModule} from '@angular/material/snack-bar'
// import { MatSortModule} from '@angular/material/sort'
// import { MatStepperModule} from '@angular/material/stepper'
// import { MatTableModule} from '@angular/material/table'
// import { MatTabsModule} from '@angular/material/tabs'
// import { MatTooltipModule} from '@angular/material/tooltip'
// import { MatTreeModule} from '@angular/material/tree'


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports:[
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,

    // // Additional to make it work
    // ScrollingModule,
    // MatMenuModule,
    // MatRadioModule,
    // MatSelectModule,
    // MatSliderModule,
    // MatSlideToggleModule,
    
    // //batch #2
    
    // CdkTableModule,
    // CdkTreeModule,
    // DragDropModule,
    // MatAutocompleteModule,
    // MatBadgeModule,
    // MatBottomSheetModule,
    // MatButtonModule,
    // MatButtonToggleModule,
    // MatCardModule,
    // MatCheckboxModule,
    // MatChipsModule,
    // MatStepperModule,
    // MatDatepickerModule,
    // MatDialogModule,
    // MatDividerModule,
    // MatExpansionModule,
    // MatGridListModule,
    // MatIconModule,
    // MatInputModule,
    // MatListModule,
    // MatMenuModule,
    // // MatNativeDateModule,
    // MatNativeDateModule,  // added again.
    // MatPaginatorModule,
    // MatProgressBarModule,
    // MatProgressSpinnerModule,
    // MatRadioModule,
    // // MatRippleModule,
    // MatSelectModule,
    // MatSidenavModule,
    // MatSliderModule,
    // MatSlideToggleModule,
    // MatSnackBarModule,
    // MatSortModule,
    // MatTableModule,
    // MatTabsModule,
    // MatToolbarModule,
    // MatTooltipModule,
    // MatTreeModule,
    // ScrollingModule
  ]
})
export class CoreModule { }
// error with experimental decorators finally went after adding to app.module.ts
// earlier added experimentalDecorators tag to all the tsconfig files: the base , the app and the spec files
