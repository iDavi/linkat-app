import { Component } from '@angular/core';
import { catGifsUrlGenerator } from './cat-gif-url-generator';
@Component({
  selector: 'app-cat-gif',
  standalone: true,
  imports: [],
  templateUrl: './cat-gif.component.html',
  styleUrl: './cat-gif.component.css'
})
export class CatGifComponent {
  private gifsCount = 11;
  catImgSrc : string = catGifsUrlGenerator.generate()
}
