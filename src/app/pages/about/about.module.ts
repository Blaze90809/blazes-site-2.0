import { AboutComponent } from './aboutpage/about.component';
import { AboutRoutingModule } from './about-routing.module';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatCardModule, MatGridListModule, MatExpansionModule } from '@angular/material';

@NgModule({
    imports: [CommonModule,
        AboutRoutingModule,
        FormsModule,
        MatToolbarModule,
        MatButtonModule,
        MatSidenavModule,
        MatIconModule,
        MatListModule,
        MatCardModule,
        MatGridListModule,
        MatExpansionModule
    ],
    declarations: [AboutComponent],
})
export class AboutModule {}