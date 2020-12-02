import { Component, OnInit } from '@angular/core';
import { ContentProjectService, Project, Media, ContentMediaService} from 'flotiq';
import { ActivatedRoute, Params} from '@angular/router';
import { ProjectListService } from './project-list.service';
import { ImageService } from '../image.service';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html'
})
export class ProjectListComponent implements OnInit {

  projects: Project[];
  totalPages: number;
  page: number;

  constructor(
    private flotiqService: ContentProjectService,
    private imageService: ImageService,
    private activatedRoute: ActivatedRoute,
    private projectListService: ProjectListService
  ) {
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.page = +params.page || 1;
      this.projectListService.getProjects(this.page).subscribe((projects) => {
        if (projects) {
          this.projects = projects.data;
          this.totalPages = projects.total_pages;
          this.page = projects.current_page;
        }
      });
    });
  }

}
