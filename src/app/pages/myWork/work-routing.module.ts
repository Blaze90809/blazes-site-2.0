import { MyWorkComponent } from "./my-work/my-work.component";

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
    {
        path: '',
        component: MyWorkComponent
    }
]

@NgModule({
    declarations: [],
    imports: [ RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: [],
})
export class WorkRoutingModule {}