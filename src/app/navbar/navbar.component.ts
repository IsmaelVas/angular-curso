import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem, MessageService } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';
import { ToastModule } from 'primeng/toast';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    MenubarModule,
    ToastModule,
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
  providers: [MessageService],
})
export class NavbarComponent {

  constructor(private router: Router){ }

  items: MenuItem[] = [
    {"label": "Home", command: () => this.navegar("/") },
    {"label": "Clientes", command: () => this.navegar("/clientes") },
    {"label": "Produtos", command: () => this.navegar("/produtos") },
    {"label": "Filmes", command: () => this.navegar("/filmes") },
    {"label": "RPG", command: () => this.navegar("/rpg") },

  ]

  navegar(navegateTo: string){
    this.router.navigate([navegateTo])
  }
}
