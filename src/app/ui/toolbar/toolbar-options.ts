import {ToolbarAction} from './toolbar-action';

export class ToolbarOptions {
title: string;
actions: ToolbarAction[];
backEnabled: boolean;


  constructor(backEnabled: boolean, title: string, actions: ToolbarAction[]) {
    this.backEnabled = backEnabled;
    this.title = title;
    this.actions = actions;
  }
}

