import {
  Component,
  OnInit
} from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  imgUrl: string;
  imgWidth: number;
  imgBorder:string;

  constructor() {
    this.imgUrl = 'http://placehold.it/50x50';
    this.imgWidth = 100;
    this.imgBorder ='2px solid red';
  }

  ngOnInit() {}

  changeImg() {
    if (this.imgWidth != 200) {
      this.imgWidth = 200;
      this.imgBorder ='5px solid green';
      
    } else {
      this.imgWidth = 100;
      this.imgBorder ='2px solid red';
      
    }

  }

}
