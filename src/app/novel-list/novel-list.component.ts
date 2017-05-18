import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Novels } from './novels';

@Component({
  selector: 'app-novel-list',
  templateUrl: './novel-list.component.html',
  styleUrls: ['./novel-list.component.css']
})
export class NovelListComponent implements OnInit {

  cardHeader:string = 'นิยายทั้งหมด';
  novels:Novels[];
  selectNovel:Novels;

  constructor(private router: Router) { }

  ngOnInit() {
    this.novels = [
      new Novels(1,'ฟาร์ม','เรื่องแรก'),
      new Novels(2,'ธนู','เรื่องสอง'),
      new Novels(3,'สี่สิบล้านปี','เรื่องสาม')
    ]
  }
    
  showNovel( novel: Novels): void {
    this.selectNovel= novel;
    
    this.router.navigate(['/novel',novel.id]);
  }

}

