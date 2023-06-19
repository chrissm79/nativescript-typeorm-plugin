import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { NativescriptTypeormPluginComponent } from './nativescript-typeorm-plugin.component';

@NgModule({
  imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: NativescriptTypeormPluginComponent }])],
  declarations: [NativescriptTypeormPluginComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class NativescriptTypeormPluginModule {}
