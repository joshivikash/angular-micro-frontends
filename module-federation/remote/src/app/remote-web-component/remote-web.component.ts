import { Component, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-remote-web-component',
  standalone: true,
  imports: [],
  templateUrl: './remote-web.component.html',
  styleUrl: './remote-web.component.css'
})
export class RemoteWebComponent {
constructor(private readonly injector: Injector) {
    const element = createCustomElement(AppComponent, { injector });
    customElements.define('angular-app-component', element);
  }
}
