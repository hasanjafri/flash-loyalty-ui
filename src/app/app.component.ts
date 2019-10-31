import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { locale as chLang } from './config/languages/ch';
import { locale as deLang } from './config/languages/de';
import { locale as enLang } from './config/languages/en';
import { locale as esLang } from './config/languages/es';
import { locale as frLang } from './config/languages/fr';
import { locale as jpLang } from './config/languages/jp';
import { SplashScreenService } from './services/splash-screen.service';
import { TranslationService } from './services/translation.service';

@Component({
  selector: 'fl-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  loader: boolean;
  private subscriptions: Subscription[] = [];

  constructor(
    private translationService: TranslationService,
    private router: Router,
    private splashScreenService: SplashScreenService
  ) {
    this.translationService.loadTranslations(enLang, chLang, esLang, jpLang, deLang, frLang);
  }

  ngOnInit(): void {
    const routerSubscription = this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.splashScreenService.hide();
        window.scrollTo(0, 0);
        setTimeout(() => {
          document.body.classList.add('fl-page--loaded');
        }, 500);
      }
    });
    this.subscriptions.push(routerSubscription);
  }

  ngOnDestroy() {
    this.subscriptions.forEach((sub) => sub.unsubscribe());
  }
}
