import { Injectable } from '@angular/core';
import { TransferStateService } from '@scullyio/ng-lib';
import { Observable} from 'rxjs';
import { ProjectList, ContentProjectService } from 'flotiq';

@Injectable({
  providedIn: 'root'
})
export class ProjectListService {

  constructor(
    private transferState: TransferStateService,
    private flotiqService: ContentProjectService
  ) { }

  getProjects(page): Observable<ProjectList> {
    return this.transferState.useScullyTransferState(
      'projects' + page,
      this.flotiqService.listProject(page, 8, 'internal.createdAt', 'desc', 1)
    );
  }
}
