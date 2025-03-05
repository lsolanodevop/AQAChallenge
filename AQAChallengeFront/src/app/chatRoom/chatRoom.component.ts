import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import {  Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { MessagesModule } from 'primeng/messages';
import { HttpClientModule } from '@angular/common/http';
import { ChatService } from '../services/chat.service';

@Component({
  selector: 'app-chat-room',
  standalone: true,
  imports: [CardModule, FormsModule, ButtonModule, CommonModule, InputTextModule, MessagesModule, HttpClientModule],
  providers: [ChatService],
  template: `
  <div id="chat-container" class="container">
    <div id="chat-header" class="header">
      <div id="header-content" class="flex" style="display: flex; justify-content: space-between; align-items: center;">
        <h1 id="chat-title">Chat Room</h1>
        <h2 id="current-user">{{ sender }}</h2>
        <p-button id="logout-button" label="Logout" icon="pi pi-sign-out" (click)="logout()" styleClass="p-button-rounded p-button-danger" />
      </div>
    </div>
    
    <div id="chat-messages-container" class="chat">
      <ng-container *ngFor="let message of messages; let i = index">
        <p-messages 
          [id]="'message-' + i" 
          [severity]="message?.user?.username == sender ? 'info' : 'success'" 
          [closable]="false"
        >
          <ng-template pTemplate>
            <div id="message-content-{{i}}" class="message-container">
              <div id="username-{{i}}" class="username">{{ message?.user?.username }}</div>
              <div id="message-text-{{i}}" class="message-text">{{ message?.message }}</div>
            </div>
          </ng-template>
        </p-messages>
      </ng-container>
    </div>
    
    <div id="message-input-container" class="message">
      <div id="message-controls" style="display: flex; gap: 10px; align-items: center;">
        <input 
          id="message-input"
          type="text" 
          pInputText 
          [(ngModel)]="message" 
          class="message-input" 
          placeholder="Type your message here..." 
          [disabled]="disabled"
          (keyup.enter)="sendMessage()" 
        />
        <p-button 
          id="send-button"
          label="Send" 
          icon="pi pi-send" 
          (click)="sendMessage()" 
          [disabled]="disabled" 
          styleClass="p-button-primary"
        />
      </div>
    </div>
  </div>
  `,
  styleUrl: './chatRoom.component.css',
})
export class ChatRoomComponent {
  messages: any[] = [
  ];
  message: string = '';
  disabled: boolean = false;
  sender: string = '';
  user: any = {};
  constructor(private router: Router, private chatService: ChatService) {
    this.getMessages();
    this.user = JSON.parse(localStorage.getItem('user') || '{}');
    this.sender = this.user.username;
  }

  getMessages() {
    this.chatService.getMessages().subscribe((res: any) => {
      this.messages = res.filter((msg: any) => msg.message && msg.user && msg.user.username);
      console.log(this.messages);
    });
  }

  sendMessage() {
    console.log(this.message);
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    const message = {
      message: this.message,
      user: user._id
    }
    this.disabled = true;
    this.chatService.postMessage(message).subscribe((res) => {
      this.message = '';
      this.disabled = false;
      this.getMessages();
    }, (err) => {
      console.log(err);
      this.disabled = false;
    });
  }

  logout() {
    localStorage.removeItem('username');
    this.router.navigate(['/']);
  }
}
