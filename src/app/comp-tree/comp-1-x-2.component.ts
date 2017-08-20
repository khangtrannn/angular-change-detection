import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, HostBinding, NgZone, Renderer, Renderer2 } from '@angular/core';
import { ColorService } from '../color.service';
import { AbstractChangeDetectionComponent } from '../abstract-change-detection.component';
import { template } from '../change-detection.component.template';
import { DirtyCheckColoringService } from '../dirty-check-coloring.service';
import { ExpandCollapseService } from '../expand-collapse.service';

const NAME = 'comp-1-x-2';
const LEVEL = 3;
const CD_STRATEGY = ChangeDetectionStrategy.OnPush;
const CHILD_TEMPLATE = `
  <app-comp-1-x-2-1 [inputByVal]="inputByVal" [inputByRef]="inputByRef" [inputObservable]="inputObservable"></app-comp-1-x-2-1>
  <app-comp-1-x-2-2 [inputByVal]="inputByVal" [inputByRef]="inputByRef" [inputObservable]="inputObservable"></app-comp-1-x-2-2>
`;

@Component({
  selector: `app-${NAME}`,
  template: template(CHILD_TEMPLATE),
  styleUrls: ['./../change-detection.component.scss'],
  providers: [ColorService],
  changeDetection: CD_STRATEGY
})
export class Comp_1_x_2_Component extends AbstractChangeDetectionComponent { // tslint:disable-line:class-name

  constructor(hostRef: ElementRef, colorService: ColorService, dirtyCheckColoringService: DirtyCheckColoringService, expandCollapseService: ExpandCollapseService, cd: ChangeDetectorRef, zone: NgZone) {
    super(NAME, LEVEL, hostRef, colorService, dirtyCheckColoringService, expandCollapseService, cd, zone, CD_STRATEGY);
  }
}
