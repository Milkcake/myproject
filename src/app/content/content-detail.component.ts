import { Component, OnInit ,  Input  } from '@angular/core';
import {Novels} from './novel-update';

@Component({
  selector: 'app-content-detail',
  templateUrl: './content-detail.component.html',
  styleUrls: ['./content-detail.component.css']
})
export class ContentDetailComponent implements OnInit {
  @Input() novel: Novels;

  constructor() { }

  ngOnInit() {
  }

}
