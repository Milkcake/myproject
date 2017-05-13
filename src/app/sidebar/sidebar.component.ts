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

  constructor() {
    this.imgUrl = 'http://placehold.it/50x50';
    this.imgWidth = 100;
  }

  ngOnInit() {}

  changeImg() {
    if (this.imgWidth != 200) {
      this.imgWidth = 200;
    } else {
      this.imgWidth = 100;
    }

  }

}
