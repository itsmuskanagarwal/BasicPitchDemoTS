import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AudioToMIDIComponent } from './audio-to-midi.component';

describe('AudioToMIDIComponent', () => {
  let component: AudioToMIDIComponent;
  let fixture: ComponentFixture<AudioToMIDIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AudioToMIDIComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AudioToMIDIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
