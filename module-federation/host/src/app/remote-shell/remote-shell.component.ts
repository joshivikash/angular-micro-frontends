import { Component, ElementRef, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-remote-shell',
  standalone: true,
  imports: [],
  templateUrl: './remote-shell.component.html',
  styleUrl: './remote-shell.component.css'
})
export class RemoteShellComponent {
 // use a view container to instantiate the remote angular app
 @ViewChild('angularRemoteAppViewContainerRef', { read: ViewContainerRef })
 angularRemoteAppViewContainerRef!: ViewContainerRef;

 // to render the angular app web component
 @ViewChild('angularRemoteAppElementRef', { static: true })
 angularRemoteAppElementRef!: ElementRef;

 constructor() {
  // 2. using import function and the component factory
  new Promise(async () => {
    const appModule = await import('mfe1/Component');
    const ref = this.angularRemoteAppViewContainerRef.createComponent(appModule.AppComponent);
  });
 }
}
