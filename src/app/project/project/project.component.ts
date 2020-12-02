import { Component, OnInit } from '@angular/core';
import { ContentProjectService, Project, Media } from 'flotiq';
import { ActivatedRoute, Params} from '@angular/router';
import { ProjectService} from './project.service';
import { ImageService } from '../image.service';

@Component({
  selector: 'app-project-post',
  templateUrl: './project.component.html'
})
export class SingleProjectComponent implements OnInit {

  project: Project;
  slug: string;
  gallery: Media[] = [];

  constructor(
    private flotiqService: ContentProjectService,
    private activatedRoute: ActivatedRoute,
    private imageService: ImageService,
    private projectService: ProjectService) {
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.slug = params.slug;
      this.projectService.getProject(this.slug).subscribe((project) => {
        if (project) {
          this.project = project.data[0];
        }
      });
    });
  }

}
