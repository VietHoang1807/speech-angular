import { Component, OnInit } from '@angular/core';
import { SpeechService } from 'src/app/service/speech.service';

@Component({
  selector: 'app-home-speech',
  templateUrl: './home-speech.component.html',
  styleUrls: ['./home-speech.component.css'],
  providers: [SpeechService]
})
export class HomeSpeechComponent implements OnInit {

  constructor(public speech: SpeechService) {
    this.speech.init();
  }

  ngOnInit(): void {
  }

  startService(): void {
    this.speech.text = '';
    this.speech.start();
  }

}
