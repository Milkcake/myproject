import { Component, OnInit ,Input} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import {Novels} from './novels';

@Component({
  selector: 'app-novel-detail',
  templateUrl: './novel-detail.component.html',
  styleUrls: ['./novel-detail.component.css']
})
export class NovelDetailComponent implements OnInit {
  @Input() novel: Novels;
  id:number;
  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
  }

}
