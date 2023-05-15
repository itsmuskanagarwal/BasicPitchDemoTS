import { Component, ViewChild, ElementRef } from '@angular/core';
import { ApiServiceService } from '../Service/api-service.service';

@Component({
  selector: 'app-audio-to-midi',
  templateUrl: './audio-to-midi.component.html',
  styleUrls: ['./audio-to-midi.component.css'],
})
export class AudioToMIDIComponent {
  audioFile: File | null = null;
  audioSrc: string | null = null;
  conversionResult: string | null = null;
  @ViewChild('fileInput', { static: false }) fileInput!: ElementRef;

  constructor(private apiService: ApiServiceService) {}

  onFileSelected(event: any) {
    this.audioFile = event.target.files[0];
    if (this.audioFile) {
      this.audioSrc = URL.createObjectURL(this.audioFile);
      console.log(this.audioSrc);
    }
    this.conversionResult = null;
  }

  clear() {
    this.audioFile = null;
    this.audioSrc = null;
    this.conversionResult = null;
    this.fileInput.nativeElement.value = '';
  }

  convert() {
    if (!this.audioFile) {
      return;
    }

    // this.apiService.convertAudio(this.audioFile).subscribe(
    //   (data) => {
    //     console.log(data);
    //     this.conversionResult = data;
    //   },
    //   (error) => {
    //     console.error(error);
    //   }
    // );
  }
}
