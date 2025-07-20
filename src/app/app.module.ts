import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [AppComponent, HeaderComponent],
  imports: [BrowserModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
