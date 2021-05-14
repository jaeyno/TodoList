import { Injectable } from '@angular/core';
import * as signalR from '@microsoft/signalr';
import { HubConnection, LogLevel, HubConnectionBuilder } from '@microsoft/signalr';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  
  hubConnection: HubConnection;

  constructor() {}

  createConnection() {
    this.hubConnection = new signalR.HubConnectionBuilder()
    .configureLogging(LogLevel.Trace)
    .withAutomaticReconnect()
    .withUrl("/hub/todo")
    .build();

    this.hubConnection.start().catch(error => console.log(error));
  }

  async getLists() {
    return await this.hubConnection.invoke("GetLists");
  }
}
