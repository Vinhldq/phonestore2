import { provideAnimations } from "@angular/platform-browser/animations";
import { TuiRootModule } from "@taiga-ui/core";
import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getStorage, provideStorage } from '@angular/fire/storage';

export const appConfig: ApplicationConfig = {
  providers: [provideAnimations(), provideRouter(routes), provideClientHydration(), importProvidersFrom(provideFirebaseApp(() => initializeApp({"projectId":"phonestore-9d524","appId":"1:995245981212:web:35b98e9b56ea36ef9ce9d9","storageBucket":"phonestore-9d524.appspot.com","apiKey":"AIzaSyD2O3IXT6zzEy0xln01TzGy_iVeNh2cW2w","authDomain":"phonestore-9d524.firebaseapp.com","messagingSenderId":"995245981212","measurementId":"G-6QVRH44JR4"})), TuiRootModule), importProvidersFrom(provideAuth(() => getAuth())), importProvidersFrom(provideFirestore(() => getFirestore())), importProvidersFrom(provideStorage(() => getStorage())), importProvidersFrom(provideFirebaseApp(() => initializeApp({"projectId":"phonestore-9d524","appId":"1:995245981212:web:35b98e9b56ea36ef9ce9d9","storageBucket":"phonestore-9d524.appspot.com","apiKey":"AIzaSyD2O3IXT6zzEy0xln01TzGy_iVeNh2cW2w","authDomain":"phonestore-9d524.firebaseapp.com","messagingSenderId":"995245981212","measurementId":"G-6QVRH44JR4"}))), importProvidersFrom(provideAuth(() => getAuth())), importProvidersFrom(provideFirestore(() => getFirestore())), importProvidersFrom(provideStorage(() => getStorage()))]
};
