import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SingleProjectComponent } from './project/project.component';
import { ProjectListComponent } from './project-list/project-list.component';
import {AboutComponent} from '../about/about.component';

const routes = [
  { path: '', component: ProjectListComponent },
  { path: 'about', component: AboutComponent },
  { path: ':page', component: ProjectListComponent },
  { path: 'project/:slug', component: SingleProjectComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectRoutingModule {}
