import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-twitter',
  templateUrl: './twitter.component.html',
  styleUrls: ['./twitter.component.scss']
})
export class TwitterComponent implements OnInit {

  campaign: string;
  medium: string;

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
