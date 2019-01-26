import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './home/home.component';
import {FormsModule} from '@angular/forms';
import { NgModule } from '@angular/core';

@NgModule({
    imports: [ 
        CommonModule,
        PagesRoutingModule,
        FormsModule 
    ],
    declarations: [HomeComponent]
})
export class PagesModule {}