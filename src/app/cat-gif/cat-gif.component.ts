import { Component } from '@angular/core';

@Component({
  selector: 'app-cat-gif',
  standalone: true,
  imports: [],
  templateUrl: './cat-gif.component.html',
  styleUrl: './cat-gif.component.css'
})
export class CatGifComponent {
  private gifsCount = 11;
  catImgSrc : string = this.getCatImgSrc();
  private getCatImgSrc() {
    let index = Math.round(Math.random() * (this.gifsCount-1) + 1);
    return `/images/cat-gifs/${index}.gif`
  }
}
