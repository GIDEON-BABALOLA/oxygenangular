import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ComponentStateService {
  private activeComponent: string = 'component1'; // Default to Component1

  setActive(component: string) {
    this.activeComponent = component;
  }

  getActive(): string {
    return this.activeComponent;
  }
}
