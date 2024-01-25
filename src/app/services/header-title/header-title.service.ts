import {Injectable, signal, WritableSignal} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeaderTitleService {
  private readonly headerTitle: WritableSignal<string> = signal('title');

  constructor() {
  }

  setHeaderTitle(value: string) {
    this.headerTitle.set(value);
  }

  getHeaderTitle(): WritableSignal<string> {
    return this.headerTitle;
  }
}
