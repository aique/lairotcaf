import { NgModule } from "@angular/core";
import { AppComponent } from "./components/app.component";
import { StoreModule } from "@ngrx/store";
import { AppRoutingModule } from "./app-routing.module";
import { BrowserModule } from "@angular/platform-browser";
import { EffectsModule } from "@ngrx/effects";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    AppRoutingModule,
  ],
  bootstrap: [AppComponent],
})

export class AppModule {}