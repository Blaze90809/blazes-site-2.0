import { ContactRoutingModule } from './contact-routing.module';
import { FormsModule } from '@angular/forms';
import { ContactMeComponent } from './contact-me/contact-me.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from "@angular/flex-layout";

@NgModule({
    declarations: [ContactMeComponent],
    imports: [CommonModule,
        FormsModule,
        ContactRoutingModule,
    FlexLayoutModule],
    exports: [],
    providers: [],
})
export class ContactMeModule { }