declare const window: any;
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CheckIfFullScreenService {

  constructor() { }

  isFullScreen(): boolean {
    return window.fullScreen
  }
}
