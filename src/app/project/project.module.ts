import { NgModule } from '@angular/core';
import { ProjectComponent } from './project.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SingleProjectComponent } from './project/project.component';
import { ProjectRoutingModule } from './project-routing.module';

@NgModule({
  declarations: [
    ProjectComponent,
    ProjectListComponent,
    SingleProjectComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    ProjectComponent,
    ProjectRoutingModule,
    ProjectListComponent
  ]
})
export class ProjectModule {}
