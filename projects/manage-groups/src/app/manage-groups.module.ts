import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManageGroupsComponent } from './manage-groups.component';
import { ManageGroupsRoutingModule } from './manage-groups-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { BookmarkService } from '../../../../src/app/shared/services/bookmark.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ManageGroupsComponent],
  imports: [CommonModule, ManageGroupsRoutingModule, HttpClientModule, FormsModule],
  exports: [ManageGroupsComponent],
  providers: [BookmarkService],
})
export class ManageGroupsModule {}