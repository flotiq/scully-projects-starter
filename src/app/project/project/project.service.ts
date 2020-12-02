import { Injectable } from '@angular/core';
import { TransferStateService } from '@scullyio/ng-lib';
import { Observable } from 'rxjs';
import { ProjectList, ContentProjectService } from 'flotiq';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(
    private transferState: TransferStateService,
    private flotiqService: ContentProjectService
  ) { }

  getProject(slug): Observable<ProjectList> {
    return this.transferState.useScullyTransferState(
      slug,
      this.flotiqService.listProject(
        1,
        1,
        'id',
        'asc',
        1,
        '{"slug":{"type":"equals","filter":"' + slug + '"}}'
      )
    );
  }
}
