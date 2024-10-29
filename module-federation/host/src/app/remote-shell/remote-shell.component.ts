import {
  Component,
  ElementRef,
  Injector,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { loadRemoteModule } from '@angular-architects/module-federation';

@Component({
  selector: 'app-remote-shell',
  standalone: true,
  imports: [],
  templateUrl: './remote-shell.component.html',
  styleUrl: './remote-shell.component.css',
})
export class RemoteShellComponent {
  // use a view container to instantiate the remote angular app
  @ViewChild('angularRemoteAppViewContainerRef', { read: ViewContainerRef })
  angularRemoteAppViewContainerRef!: ViewContainerRef;

  // to render the angular app web component
  @ViewChild('angularRemoteAppElementRef', { static: true })
  angularRemoteAppElementRef!: ElementRef;

  constructor(private injector: Injector) {
    (async () => {
      // 1. using import function and web component
      // const remoteWebComponent = await import('mfe1/RemoteWebComponent');
      // console.log('remoteWebComponent', new remoteWebComponent.RemoteWebComponent(this.injector));
      // const appWebComponentElement = document.createElement(
      //   'angular-app-component'
      // );
      // this.angularRemoteAppElementRef.nativeElement.appendChild(
      //   appWebComponentElement
      // );


    // 2. using import function and the component factory
      const appModule = await import('mfe1/RemoteComponent');
      const ref = this.angularRemoteAppViewContainerRef.createComponent(appModule.AppComponent);

      // 3. using loadRemoteModule
    // const remoteAngular = await loadRemoteModule({
    //   remoteEntry: 'http://localhost:4201/remoteEntry.js',
    //   type: 'module',
    //   exposedModule: './RemoteWebComponent',
    // });
    // console.log('remoteAngular', new remoteAngular.RemoteWebComponent(this.injector));
    // const appWebComponentElement = document.createElement('angular-app-component');
    // this.angularRemoteAppElementRef.nativeElement.appendChild(appWebComponentElement);
  })();
  }
}
