import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedNativescriptTypeormPlugin } from '@demo/shared';
import {} from '@chrissm79/nativescript-typeorm-plugin';

export function navigatingTo(args: EventData) {
  const page = <Page>args.object;
  page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedNativescriptTypeormPlugin {}
