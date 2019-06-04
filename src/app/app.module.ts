import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DisqusModule } from 'ngx-disqus';

import { AppComponent } from './app.component';
import { DisqusComponent } from './disqus/disqus.component';
import { BanneradComponent } from './bannerad/bannerad.component';

@NgModule({
  declarations: [
    AppComponent,
    DisqusComponent,
    BanneradComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    DisqusModule.forRoot('disqus_shortname')
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
