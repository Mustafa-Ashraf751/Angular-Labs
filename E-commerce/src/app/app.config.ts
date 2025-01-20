import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter,withViewTransitions,withComponentInputBinding } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';


//withViewTransitions() adding some animation when moving through the different routes
//withComponentInputBinding This will make me share the value of route object through different component
export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes,withViewTransitions(),withComponentInputBinding()),provideHttpClient()]
};
