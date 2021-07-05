// core
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

// root
import { AppComponent } from './app.component';

// components 
import { NavbarComponent } from './navbar/navbar.component';
import { ConverterComponent } from './converter/converter.component';

@NgModule({
  declarations: [
    AppComponent,

    // components
    NavbarComponent,
    ConverterComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
