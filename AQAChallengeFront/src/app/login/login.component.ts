import {  Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { CardModule } from 'primeng/card';
import { FloatLabelModule } from 'primeng/floatlabel';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';
import { HttpClientModule } from '@angular/common/http';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ InputTextModule, ButtonModule, CommonModule, FormsModule, CardModule, FloatLabelModule, HttpClientModule ],
  providers: [ LoginService ],
  styleUrl: './login.component.css',
  template: `
<div class="login-container">
  <p-card 
    header="Welcome" 
    [style]="{ 
      width: '400px', 
      borderRadius: '12px', 
      boxShadow: '0 4px 15px rgba(0,0,0,0.1)' 
    }"
  >
    <div class="flex flex-column gap-4 align-items-center">
      <div class="w-full">
        <p-floatLabel>
          <input 
            pInputText 
            id="username" 
            [(ngModel)]="username" 
            class="w-full"
            required
          />
          <label for="username">Username</label>
        </p-floatLabel>
      </div>
      
      <div class="w-full">
        <p-floatLabel>
          <input 
            pInputText 
            id="password" 
            type="password" 
            [(ngModel)]="password" 
            class="w-full"
            required
          />
          <label for="password">Password</label>
        </p-floatLabel>
      </div>
    </div>

    <ng-template pTemplate="footer">
      <div class="flex flex-column gap-2 align-items-center">
        <p-button 
          label="Login" 
          styleClass="w-full p-button-primary" 
          (click)="login()"
        />

      </div>
    </ng-template>
  </p-card>
</div>
  `,
  styles: [`
    .login-container {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      background: linear-gradient(135deg, #f6f8f9 0%, #e5ebee 100%);
    }

    :host ::ng-deep .p-card {
      display: flex;
      flex-direction: column;
    }

    :host ::ng-deep .p-card-header {
      text-align: center;
      padding-bottom: 1rem;
    }

    :host ::ng-deep .p-card-content {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 1.5rem;
    }

    :host ::ng-deep .p-card-footer {
      width: 100%;
      padding-top: 1rem;
    }

    :host ::ng-deep .p-inputtext {
      padding: 0.75rem;
    }

    :host ::ng-deep .p-float-label label {
      margin-left: 0.75rem;
    }
  `]
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private router: Router, private loginService: LoginService) {}

  login() {
    this.loginService.login(this.username, this.password).subscribe(
      (res) => {
          this.router.navigate(['/chatRoom']);
          localStorage.setItem('user', JSON.stringify(res.user));
          alert("User logged in");
      },
      (error) => {
        console.log(error);
        alert("Error logging in or user not found");
      }
    );
  }
}
