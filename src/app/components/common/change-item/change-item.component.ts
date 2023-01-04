import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  Renderer2,
} from '@angular/core';
import { interval, NEVER, Observable, Subject, switchMap } from 'rxjs';

@Component({
  selector: 'app-change-item',
  templateUrl: './change-item.component.html',
  styleUrls: ['./change-item.component.scss'],
})
export class ChangeItemComponent implements AfterViewInit {
  @Input() align: string | null = null;
  @Input() lastItemIndex!: number;
  @Input() delay: number | undefined = undefined;
  @Output() changeItem = new EventEmitter<number>();
  currentItemIndex: number = 1;
  private timerController: Subject<boolean> = new Subject();
  private timer!: Observable<number>;

  constructor(private renderer: Renderer2, private elem: ElementRef) {}

  restartTimer() {
    this.timerController.next(false);
    this.timerController.next(true);
  }

  clickRightArrow() {
    this.incrementIndex();
    if (this.delay != undefined) {
      this.restartTimer();
    }
  }

  clickLeftArrow() {
    this.decrementIndex();
    if (this.delay != undefined) {
      this.restartTimer();
    }
  }

  incrementIndex() {
    if (this.currentItemIndex === this.lastItemIndex) {
      this.currentItemIndex = 1;
    } else {
      this.currentItemIndex++;
    }
    this.changeItem.emit(this.currentItemIndex);
  }
  decrementIndex() {
    this.timerController.next(true);
    if (this.currentItemIndex === 1) {
      this.currentItemIndex = this.lastItemIndex;
    } else {
      this.currentItemIndex--;
    }
    this.changeItem.emit(this.currentItemIndex);
  }

  ngAfterViewInit(): void {
    let changeItem =
      this.elem.nativeElement.querySelectorAll('.change-item')[0];
    if (this.align !== null) {
      changeItem.classList.add(this.align);
    }
    if (this.delay != undefined) {
      this.timer = this.timerController.pipe(
        switchMap((e) => (e ? interval(this.delay) : NEVER))
      );
      this.timer.subscribe((e) => this.incrementIndex());
      this.timerController.next(true);
    }
  }
}
