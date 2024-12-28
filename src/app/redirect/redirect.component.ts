import { Component, OnDestroy, OnInit } from '@angular/core';
import { CatGifComponent } from "../cat-gif/cat-gif.component";
import { timer, take, Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-redirect',
  standalone: true,
  imports: [CatGifComponent],
  templateUrl: './redirect.component.html',
  styleUrl: './redirect.component.css'
})
export class RedirectComponent implements OnInit {
  timeLeft = 6;
  private timerSub : Subscription = new Subscription;
  private finalUrl = "";
  private getLinkEndpoint = "/links/"

  constructor(private httpClient : HttpClient, private route : ActivatedRoute){}
  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      let nickname = params.get("nickname");
      this.httpClient.get<any>(`${environment.apiUrl}${this.getLinkEndpoint}${nickname}`).subscribe({
        next: (response : any) => {
          this.finalUrl = response.data.url
        },
        error: (response : any) => {
          console.log(response)
        }
      });
    })
    this.timerSub = timer(0,1000).pipe(take(this.timeLeft+1)).subscribe(() => {
      if(this.timeLeft === 0){
        window.location.href = this.finalUrl
      }else{
        this.timeLeft--;
      }
    })
  }

  ngOnDestroy(): void {
    this.timerSub.unsubscribe();
  }

}
