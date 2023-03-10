import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Crear un módulo llamado CounterModule
// declaraciones y exportaciones
// para que se pueda utilizar.

import { AppComponent } from './app.component';
import { HeroesModule } from './heroes/heroes.module';
import { CounterModule } from './counter/counter.module';
import { DbzModule } from "./dbz/dbz.module";

@NgModule({
    declarations: [
        AppComponent,
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        HeroesModule,
        CounterModule,
        DbzModule,
    ]
})
export class AppModule { }
