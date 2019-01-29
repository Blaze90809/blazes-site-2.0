import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MyWorkComponent } from "./my-work/my-work.component";
import { NgModule } from '@angular/core';
import { WorkRoutingModule } from './work-routing.module';


@NgModule({
    declarations: [MyWorkComponent],
    imports: [ CommonModule,
    FormsModule,
    WorkRoutingModule
 ],
    exports: [],
    providers: [],
})
export class WorkModule {}