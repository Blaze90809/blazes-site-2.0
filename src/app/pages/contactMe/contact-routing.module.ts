import { Routes, RouterModule } from '@angular/router';
import { ContactMeComponent } from './contact-me/contact-me.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
    {
        path: "",
        component: ContactMeComponent
    }
]

@NgModule({
    declarations: [],
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: [],
})
export class ContactRoutingModule { }