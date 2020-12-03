import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-skor',
  templateUrl: './skor.page.html',
  styleUrls: ['./skor.page.scss'],
})
export class SkorPage implements OnInit {
  public scoreMenus = [
    {
      title: 'Huruf',
      url: 'huruf',
      icon: 'letter.svg'
    },
    {
      title: 'Angka',
      url: 'angka',
      icon: 'number.svg'
    },
    {
      title: 'Gambar',
      url: 'gambar',
      icon: 'image.svg'
    },
    {
      title: 'Suara',
      url: 'suara',
      icon: 'audio.svg'
    },
    {
      title: 'Warna',
      url: 'warna',
      icon: 'color.svg'
    }
  ];
  menu:string = ''
  bestScoresList:any = []

  constructor(
    private router: Router,
    private storage: Storage
  ) {

  }

  ngOnInit() {
  }

  choosenMenu(m:string){
    this.menu = m
    this.storage.get('best_scores').then(val => {
      this.bestScoresList = val[m]

      this.bestScoresList.sort(this.compare)
      console.log(this.bestScoresList);
    })
  }

  compare(a:any, b:any){
    let comparison = 0;
    if (a.score < b.score) {
      comparison = 1;
    } else if (a.score > b.score) {
      comparison = -1;
    }
    return comparison;
  }

  backToScoreMenu(){
    this.menu = ''
  }

  backToHome(){
    this.router.navigate(['folder'])
  }
}
