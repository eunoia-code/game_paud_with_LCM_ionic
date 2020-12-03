import { Component, OnInit, ViewChildren, QueryList, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { Storage } from '@ionic/storage';
import swal from 'sweetalert';

@Component({
  selector: 'app-huruf',
  templateUrl: './huruf.page.html',
  styleUrls: ['./huruf.page.scss'],
  animations: [
    trigger(
      'inOutAnimation',
      [
        transition(
          ':enter',
          [
            style({ height: 0, opacity: 0 }),
            animate('1.5s ease-out',
              style({ height: 300, opacity: 1 }))
          ]
        ),
        transition(
          ':leave',
          [
            style({ height: 300, opacity: 1 }),
            animate('1s ease-in',
              style({ height: 0, opacity: 0 }))
          ]
        )
      ]
    )
  ]
})
export class HurufPage implements OnInit {
  @ViewChildren("myAudio") myAudio: QueryList<any>;
  playerName: string = ""
  questions: any = []
  base_url: string = ''
  q_opsi: any = ['A', 'B', 'C']
  keys_easy: any = [
    'B', 'B', 'C', 'A', 'A',
    'B', 'B', 'A', 'C', 'B',
    'C', 'A', 'B', 'A', 'B',
    'A', 'A', 'B', 'B', 'A',
    'A', 'A', 'C', 'B', 'C'
  ]
  keys_hard: any = [
    'B', 'C', 'A', 'C', 'B',
    'A', 'C', 'A', 'B', 'A',
    'C', 'A', 'A', 'B', 'B',
    'A', 'B', 'A', 'A', 'C',
    'C', 'A', 'A', 'B', 'C'
  ]
  currentNumber: number = 0
  yourScore: number = 0
  tempScore: number = 0
  interval: any
  scoreShow: boolean = false
  diff: string = ""
  starCount: any = new Array(0)
  halfStar: boolean = false
  otherStar: any = new Array(0)

  constructor(
    private router: Router,
    public alertController: AlertController,
    private storage: Storage
  ) {
    this.storage.get('best_scores').then(val => {
      // console.log(val);
    })

    // if(this.yourScore%2==1) this.halfStar = true
    // this.starCount = new Array(Math.floor((this.yourScore)/2))
    // this.otherStar = new Array(5-Math.floor((this.yourScore)/2))
    //
    // this.selectDifficult()
    this.inputPlayerName()
  }

  ngOnInit() {
    this.ionViewWillEnter()
  }

  ionViewWillEnter() {

  }

  gameStarting() {
    let prng = this.linearCongruentMethod(this.seed())
    // let prng = this.normalMethod()
    console.log(prng);

    this.questions = this.generateQuestions(prng)
    console.log(this.questions);

    setTimeout(async () => {
      await this.playAudio(this.questions[0].id)
    }, 1000)

  }

  backToHome() {
    this.router.navigate(['folder'], { replaceUrl: true })
  }

  normalMethod(){
    let x:any = []
    for (let i = 0; i < 25; i++) {
      x.push(i)
    }
    return x
  }

  generateQuestions(data: any) {
    let collection: any = []
    let audio: number = 0
    for (let i = 0; i < data.length; i++) {
      let newData = {
        id: data[i],
        audio: this.base_url + "audio/" + (data[i] + 1) + (this.diff == 'hard' ? ".ogg" : ".opus"),
        huruf: this.base_url + "tiwi_huruf_" + (data[i] + 1) + ".png",
        opsi: [
          this.base_url + "tiwi_huruf_" + (data[i] + 1) + "_a.png",
          this.base_url + "tiwi_huruf_" + (data[i] + 1) + "_b.png",
          this.base_url + "tiwi_huruf_" + (data[i] + 1) + "_c.png"
        ]
      }
      collection.push(newData)
    }

    return collection
  }

  linearCongruentMethod(q: number) {
    let m = 25
    let a = 11
    let c = 17

    let x: any = [q]
    let lastNumber = q

    for (let i = 0; i < 9; i++) {
      let z = ((a * lastNumber) + c) % m
      x.push(z)
      lastNumber = z
    }

    return x
  }

  seed() {
    return Math.floor(Math.random() * Math.floor(24))
  }

  playAudio(id: number) {
    console.log(id);

    this.myAudio.forEach(snap => {
      if (id == (snap.nativeElement.id).slice(8, 10)) {
        snap.nativeElement.play()
      } else {
        snap.nativeElement.pause()
        snap.nativeElement.currentTime = 0;
      }
    });
  }

  async nextQuestion(index: number, ans: number, id: number) {
    let audio = new Audio();
    let tempKeys = []
    if (this.diff == 'easy') tempKeys = this.keys_easy
    else if (this.diff == 'hard') tempKeys = this.keys_hard
    let swalData = ['', '', '']

    if (this.q_opsi[ans] == tempKeys[id]) {
      audio.src = "../../../assets/audio/benar.opus";
      audio.load();
      audio.play();
      swalData = ["Selamat!", "Jawaban Kamu Benar!", "success"]
      this.tempScore++;
    } else {
      audio.src = "../../../assets/audio/salah.opus";
      audio.load();
      audio.play();
      swalData = ["Aduh!", "Jawaban Kamu Salah!", "error"]
    }

    swal(swalData[0], swalData[1], swalData[2])
      .then(
        () => {
          if (this.currentNumber < this.questions.length - 1) {
            this.currentNumber++
            setTimeout(async () => {
              await this.playAudio(this.questions[this.currentNumber].id)
            }, 500)
          } else {
            this.showCounter(this.tempScore)
            this.scoreShow = true
          }
        }
      );

  }

  async inputPlayerName() {
    swal('Tuliskan nama kamu!',{
      content: "input"
    } as any)
    .then(name => {
      if(name){
          this.playerName = name
          this.selectDifficult()
      }else{
        this.inputPlayerName()
      }
    })
  }

  async selectDifficult() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Pilih Tingkat Kesulitan',
      inputs: [
        {
          name: 'Mudah (3-4 Tahun)',
          type: 'radio',
          label: 'Mudah',
          value: 'easy',
          checked: true
        },
        {
          name: 'Susah (5-6 Tahun)',
          type: 'radio',
          label: 'Susah',
          value: 'hard'
        }
      ],
      buttons: [
        {
          text: 'Ok',
          handler: (data) => {
            this.diff = data
            this.base_url = "../../../assets/quiz/" + this.diff + "/huruf/"
            this.gameStarting()
          }
        }
      ]
    });

    await alert.present();
  }

  async editBestScores() {
    this.storage.get('best_scores').then(val => {
      let newBestScore = {
        name: this.playerName,
        score: this.tempScore * 10
      }
      val.huruf.push(newBestScore);
      this.storage.set('best_scores', val)
    })
  }

  showCounter(s: number) {
    let count = 0;
    setTimeout(() => {
      this.interval = setInterval(() => {
        if (count < s * 10 && count !== -1) {
          count++;
          this.yourScore++
        } else {
          count = -1;
        }
      }, 77);

      if (s % 2 == 1) this.halfStar = true
      this.starCount = new Array(Math.floor(s / 2))
      this.otherStar = new Array(this.halfStar ? 5 - this.starCount.length - 1 : 5 - this.starCount.length)

      this.editBestScores()
    }, 2000)
  }

}
