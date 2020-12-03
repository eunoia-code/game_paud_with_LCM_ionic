import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder: string;
  public selectedIndex = 0;
  public appPages = [
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
    },
    {
      title: 'Skor',
      url: 'skor',
      icon: 'score.svg'
    }
  ];

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private storage: Storage
  ) {
    // this.route.navigate(['/huruf'])
    this.storage.get('best_scores').then(val => {
      console.log(val);

      if(val==null) this.storage.set('best_scores',
        {
          huruf: [],
          angka: [],
          gambar: [],
          suara: [],
          warna: []
        }
      )
    })
  }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
  }

  settingFunc(){
    console.log("What u want?");
  }

  ionViewWillEnter(){
    
  }

}
