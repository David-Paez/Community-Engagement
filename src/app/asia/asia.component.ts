import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-asia',
  templateUrl: './asia.component.html',
  styleUrls: ['./asia.component.css']
})
export class AsiaComponent implements OnInit {
  items: Array<{instrument: string, image: string, sound: string, desc: string}> = [];

  constructor() {
    this.items = [
      {instrument: 'Dizi', image: 'assets/images/dizi.png', sound: 'assets/sounds/dizi.mp3',
       desc: "Dizi is a Chinese flute that is traditionally made of one piece of bamboo tube. Nowadays, dizi can be made of different types of bamboo tubes for various sizes and keys. The two types of dizi are qudi, the longer version from southern China, and bangdi, the shorter version from northern China. The qudi has a darker tone whereas the bangdi has a brighter tone."},
      {instrument: 'Erhu', image: 'assets/images/erhu.png', sound: 'assets/sounds/erhu.mp3',
       desc: "Erhu is a Chinese chordophone with two tuning pegs. It is a main accompanying instrument for Chinese opera performances and instrumental ensembles. Historically known as \"huqin\", meaning barbarian's fiddle, the erhu is held vertically on the performer's left thigh with the sound table facing to the right."},
      {instrument: 'Kalaleng', image: 'assets/images/kalaleng.png', sound: 'assets/sounds/kalaleng.mp3',
       desc: "Kalaleng is a Filipino nose flute with a range of two and a half octaves. By overblowing, it can play different harmonics. Kalaleng, or \"tongali\", has a narrow internal diameter and is traditionally made of bamboo tube. To increase the airflow through the flute, players can plug the other nostril. The kalaleng can change length to play various scales."},
      {instrument: 'Koto', image: 'assets/images/koto.png', sound: 'assets/sounds/koto.mp3',
       desc: "Koto is a Japanese zither that has 13 silk strings and movable bridges. It is played by plucking the strings using the thumb and first two fingers of the right hand. Both solo and chamber music use the koto and in the latter form, the performer generally also sings. It is also known as \"kin\" and is related to the Korean instrument called gayageum."},
      {instrument: 'Kubing', image: 'assets/images/kubing.png', sound: 'assets/sounds/kubing.mp3',
       desc: "Kubing is a Filipino jaw harp that is mainly used for courtship and children's recreation. It is played by flexing and releasing the tip of the frame, which is held in the left hand and pressed against a player's lips. It is made of bamboo and produces a fixed pitch that is rich in overtones. The kubing is often used among Muslim communities in the Mindanao island."},
      {instrument: 'Taiko', image: 'assets/images/taikodrum.png', sound: 'assets/sounds/taiko.mp3',
        desc: "Taiko is the Japanese word for \"drum\". Taiko drums are classified based on the methods they were made as well as the different sizes of woods, lengths of ropes, and types of animal hides used for the drum skins. They are played on a slanted stand with two wooden sticks, or \"bachi\". Smaller taiko drums can be carried on a strap across the player's shoulder."},
    ]
  }

  ngOnInit() {
  }

  audio = new Audio();

  playAudio(path:string) {
    this.audio.src = path;
    this.audio.volume = 0.5;
    this.audio.load();
    this.audio.play();
  }

  stopAudio() {
    this.audio.pause();
    this.audio.currentTime = 0;
  }
}
