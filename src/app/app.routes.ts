import { Routes } from '@angular/router';
import { ProdutoListaComponent } from './produto-lista/produto-lista.component';
import { ClienteListaComponent } from './cliente-lista/cliente-lista.component';
import { FilmeListaComponent } from './filme-lista/filme-lista.component';
import { RpgListaComponent } from './rpg-lista/rpg-lista.component';

export const routes: Routes = [
    {"path": "produtos", component: ProdutoListaComponent},
    {"path": "clientes", component: ClienteListaComponent},
    {"path": "filmes", component: FilmeListaComponent},
    {"path": "rpg", component: RpgListaComponent},
];
