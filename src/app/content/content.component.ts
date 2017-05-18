import { Component, OnInit } from '@angular/core';
import {Novels} from './novel-update';
@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  cardHeader:string = 'นิยายตอนใหม่ล่าสุด';

  novels:Novels[];
  selectNovel:Novels;


  constructor() { }

  ngOnInit() {
    this.novels = [
      new Novels(1,'ฟาร์ม',234),
      new Novels(2,'ธนู',123),
      new Novels(3,'สี่สิบล้านปี',111)
    ]
    
  }

  showNovel( novel: Novels): void {
    this.selectNovel= novel;
  }

}
