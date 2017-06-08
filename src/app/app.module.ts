import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";

import { ROUTING } from "./app.routing";

import { HomeComponent } from "./route/home/home.component";
import { TooltipModule } from './shared/tooltip/tooltip.module';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        TooltipModule,
        ROUTING
    ],
    declarations: [
        AppComponent,
        HomeComponent
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {}