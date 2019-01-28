import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './aboutpage/about.component';

import { NgModule } from '@angular/core';

const routes: Routes = [
    {
        path: '',
        component: AboutComponent
    }
]

@NgModule({
    declarations: [],
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: [],
})
export class AboutRoutingModule {}