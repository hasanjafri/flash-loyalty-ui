import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { SplashScreenService } from 'src/app/services/splash-screen.service';

@Component({
  selector: 'fl-splash-screen',
  templateUrl: './splash-screen.component.html',
  styleUrls: ['./splash-screen.component.scss']
})
export class SplashScreenComponent implements OnInit {
  splashMessage: 'Loading...';
  splashLogo: '../../../assets/media/images/Flash.png';

  @ViewChild('splashScreen', { static: true }) splashScreen: ElementRef;

  constructor(private el: ElementRef, private splashScreenService: SplashScreenService) {}

  ngOnInit() {
    this.splashScreenService.init(this.splashScreen);
  }
}
