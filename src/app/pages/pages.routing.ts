// Modulos
import { Routes, RouterModule, Router } from '@angular/router';
import { NgModule } from '@angular/core';
// Componentes
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Grafica1Component } from './grafica1/grafica1.component';

const rutas: Routes = [
    {
        path: 'dashboard',
        component: PagesComponent,
        children: [
            { path: '', component: DashboardComponent },
            { path: 'progress', component: ProgressComponent },
            { path: 'grafica1', component: Grafica1Component },
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(rutas)],
    exports: [RouterModule],

})

export class PagesRoutingModule { }