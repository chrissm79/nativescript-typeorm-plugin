import { Component, NgZone } from '@angular/core';
import { DemoSharedNativescriptTypeormPlugin } from '@demo/shared';

@Component({
  selector: 'demo-nativescript-typeorm-plugin',
  templateUrl: 'nativescript-typeorm-plugin.component.html',
})
export class NativescriptTypeormPluginComponent {
  demoShared: DemoSharedNativescriptTypeormPlugin;

  constructor(private _ngZone: NgZone) {}

  ngOnInit() {
    this.demoShared = new DemoSharedNativescriptTypeormPlugin();
  }
}
