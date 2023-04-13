import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-facebook',
  templateUrl: './facebook.component.html',
  styleUrls: ['./facebook.component.scss']
})
export class FacebookComponent implements OnInit {

  campaign: string = 'N/A';
  medium: string = 'N/A';

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {
    this.campaign = this.activatedRoute.snapshot.paramMap.get('campaign');
    this.medium = this.activatedRoute.snapshot.paramMap.get('medium');
  }

  clearStorage() {
    localStorage.clear();
    this.router.navigateByUrl('home');
  }

}
