import { Component, OnInit } from '@angular/core';
import {Novels} from './novels';
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
      new Novels(1,'ฟาร์ม','พัฒนาเมือง'),
      new Novels(2,'ธนู','ฆ่าล้างผลาญ'),
      new Novels(3,'สี่สิบล้านปี','โลกอนาคต')
    ]
    
  }

  showNovel( novel: Novels): void {
    this.selectNovel= novel;
  }

}
