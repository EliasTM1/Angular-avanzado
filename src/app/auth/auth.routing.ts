// Modulos
import { Routes, RouterModule, Router } from '@angular/router';
import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
// Componentes

const rutas: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
];

@NgModule({
    imports: [RouterModule.forChild(rutas)],
    exports: [RouterModule],

})

export class AuthRoutingModule { }