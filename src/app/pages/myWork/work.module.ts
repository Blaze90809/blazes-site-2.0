import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MyWorkComponent } from "./my-work/my-work.component";
import { NgModule } from '@angular/core';
import { WorkRoutingModule } from './work-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatCardModule } from '@angular/material';
import { FlexLayoutModule } from "@angular/flex-layout";


@NgModule({
    declarations: [MyWorkComponent],
    imports: [ CommonModule,
    FormsModule,
    WorkRoutingModule,
    //BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    FlexLayoutModule,
 ],
    exports: [],
    providers: [],
})
export class WorkModule {}