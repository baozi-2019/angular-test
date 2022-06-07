import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './pages/welcome/test/test/test.component';
import {FormsModule} from "@angular/forms";
import { FirstComponent } from './pages/welcome/test/routing/first/first.component';
import { SecondComponent } from './pages/welcome/test/routing/second/second.component';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzRateModule } from 'ng-zorro-antd/rate';
import { NzTimePickerModule } from 'ng-zorro-antd/time-picker';
// import { registerLocaleData } from '@angular/common';
// import en from '@angular/common/locales/en';
// registerLocaleData(en);
import {NZ_DATE_LOCALE, NZ_I18N, zh_CN, en_US} from 'ng-zorro-antd/i18n';

import { enUS, zhCN } from 'date-fns/locale';
import {NzDatePickerModule} from "ng-zorro-antd/date-picker";
import { HttpClientModule } from '@angular/common/http';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import { IconsProviderModule } from './icons-provider.module';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import {NgxQrcodeStylingModule} from "ngx-qrcode-styling";

registerLocaleData(zh);

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    FirstComponent,
    SecondComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NzButtonModule,
    NzRateModule,
    NzTimePickerModule,
    BrowserAnimationsModule,
    NzDatePickerModule,
    HttpClientModule,
    IconsProviderModule,
    NzLayoutModule,
    NzMenuModule,
    NgxQrcodeStylingModule
  ],
  providers: [
    { provide: NZ_I18N, useValue: enUS },
    { provide: NZ_DATE_LOCALE, useValue: enUS }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
