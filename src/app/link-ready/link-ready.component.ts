import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClipboardService } from 'ngx-clipboard';
import { CatGifComponent } from "../cat-gif/cat-gif.component";

@Component({
  selector: 'app-link-ready',
  standalone: true,
  imports: [CatGifComponent],
  templateUrl: './link-ready.component.html',
  styleUrl: './link-ready.component.css'
})

export class LinkReadyComponent {
  nickname: string = "";

  constructor(private route: ActivatedRoute, private _clipboardService : ClipboardService) { 
    this.nickname = this.route.snapshot.queryParams['nickname']; 

  }

  copyLink() {
    this._clipboardService.copy("https://linkat.fun/" + this.nickname);
    alert("Link copied to clipboard!")
  }

}
