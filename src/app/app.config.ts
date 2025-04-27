import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withInMemoryScrolling } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideToastr } from 'ngx-toastr';
import { errorInterceptor } from './core/interceptor/error/error.interceptor';
import { loadingInterceptor } from './core/interceptor/loading/loading.interceptor';
import { NgxSpinnerModule } from "ngx-spinner";


export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }),
    provideAnimations(),
    provideToastr(),
    provideRouter(routes , withInMemoryScrolling({scrollPositionRestoration:'top'})),
    provideClientHydration(withEventReplay()),
    importProvidersFrom( NgxSpinnerModule ),
    provideHttpClient( withFetch() , withInterceptors([errorInterceptor , loadingInterceptor]))//Error , loading
  ]
};
