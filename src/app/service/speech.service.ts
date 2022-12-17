import { Injectable } from '@angular/core';

declare const webkitSpeechRecognition: any

@Injectable()
export class SpeechService {

  constructor() { }

  recognition = new webkitSpeechRecognition();
  isStoppedSpeechRecog = false;
  text = '';
  tempWords: any;

  init() {
    this.recognition.interimResult = true;
    this.recognition.lang = 'vi-VN';
    this.recognition.addEventListener('result', (e: any) => {
      const transcript = Array.from(e.results)
        .map((resp: any) => resp[0])
        .map((resp: any) => resp.transcript)
        .join('');
      this.tempWords = transcript;
    });
  }

  start() {
    // this.isStoppedSpeechRecog != this.isStoppedSpeechRecog;
    this.recognition.start();
    this.recognition.addEventListener('end', () => {
      this.recognition.stop();
      this.wordConcat();
    })
  }

  // stop() {
  //   this.text = '';
  //   this.recognition.stop();
  //   this.isStoppedSpeechRecog = true;
  //   this.wordConcat();
  // }

  wordConcat() {
    this.text += this.tempWords + ' ';
    this.tempWords = '';
  }
}
