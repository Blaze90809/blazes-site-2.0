import { ContactRoutingModule } from './contact-routing.module';
import { FormsModule } from '@angular/forms';
import { ContactMeComponent } from './contact-me/contact-me.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

@NgModule({
    declarations: [ContactMeComponent],
    imports: [CommonModule,
        FormsModule,
        ContactRoutingModule],
    exports: [],
    providers: [],
})
export class ContactMeModule { }