import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  @Input() hasBackground: boolean = false;

  backgroundColor: string = '';

  ngOnInit(): void {
    if (this.hasBackground) {
      this.backgroundColor = 'background';
    }
  }
}
