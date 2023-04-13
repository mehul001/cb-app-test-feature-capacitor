import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { App } from '@capacitor/app';
import { URLOpenListenerEvent } from '@capacitor/app/dist/esm/definitions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(
    private router: Router
  ) {  }
  
  ngOnInit() {
    
    let url = '';
    // url = 'cbionic:///facebook?utm_campaign=hello&utm_medium=iphone';
    // url = 'cbionic:///twitter?utm_campaign=greetings&utm_medium=desktop';
    
    this.processDeeplink(url);

    // the above was used to test and simulate a deeplink

    App.addListener('appUrlOpen', (event: URLOpenListenerEvent) => {
      const url = event.url;
      this.processDeeplink(url);
    })
  }

  processDeeplink(url: string) {
    const searchParam = new URLSearchParams(url.substring(url.indexOf('?')));
    const campaign = searchParam.get('utm_campaign');
    const medium = searchParam.get('utm_medium');

    const now = new Date();
    const oneHourExpiry = new Date().setHours(now.getHours() + 1);
    
    if (campaign && medium){
      localStorage.setItem('campaign', campaign);
      localStorage.setItem('medium', medium);
      localStorage.setItem('expiry', oneHourExpiry.toString());
      
      if (url.startsWith('cbionic:///facebook')) {
        this.router.navigateByUrl(`facebook/${campaign}/${medium}`);
        localStorage.setItem('route', 'facebook');
      } else if (url.startsWith('cbionic:///twitter')) {
        this.router.navigateByUrl(`twitter/${campaign}/${medium}`);
        localStorage.setItem('route', 'twitter');
      }
    }

    const savedURL = localStorage.getItem('route');
    const savedCampaign = localStorage.getItem('campaign');
    const savedMedium = localStorage.getItem('medium');
    const paramsValid = !!(savedCampaign && savedMedium && savedURL);

    if (paramsValid && new Date().getTime() < parseInt(localStorage.getItem('expiry'))) {
      this.router.navigateByUrl(`${savedURL}/${savedCampaign}/${savedMedium}`);
    } else {
      localStorage.clear(); //Incase expired data left in storage
      this.router.navigateByUrl('home');
    }
  }
}
