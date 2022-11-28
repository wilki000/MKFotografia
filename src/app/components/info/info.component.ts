import { Component } from '@angular/core';
import baselineMap from '@iconify/icons-ic/baseline-map';
import documentTasks from '@iconify/icons-carbon/document-tasks';
import roundPhotoCamera from '@iconify/icons-ic/round-photo-camera';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss'],
})
export class InfoComponent {
  mapIcon = baselineMap;
  docIcon = documentTasks;
  photoIcon = roundPhotoCamera;
}
