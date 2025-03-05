import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ChatRoomComponent } from './chatRoom/chatRoom.component';

export const routes: Routes = [
    {
      path: '',
      component: LoginComponent
    },
    {
      path: 'chatRoom',
      component: ChatRoomComponent
    }
];
