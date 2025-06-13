import { AfterViewInit, Directive, ElementRef, EventEmitter, HostListener, Input, OnDestroy, Output } from '@angular/core';
import { ScrollXY } from '@app/models/scroll-x-y.model';
import { of, Subject, timer } from 'rxjs';
import { delay, exhaustMap, mergeMap, retry, switchMap, takeUntil } from 'rxjs/operators';

export type ScrollPositionY = 'top' | 'middle' | 'bottom' | 'none';
export type ScrollPositionX = 'left' | 'middle' | 'right' | 'none';
export type ScrollRequest = 'positionX' | 'positionY' | 'stats' | 'positionYFlipped';

@Directive({
  selector: '[appScroll]',
  standalone: true,
})
export class ScrollDirective implements AfterViewInit, OnDestroy {
  /** Returns the scroll stats for the element on Scroll events.
   * Only returned if Input 'request' is set to 'stats' or not specified.
   * Helps save on resources
   * @returns EventEmitter<ScrollXY>
   *   ScrollXY:
   *      x: horizontal scroll position;
   *      y: vertical scroll position;
   *      w: width of scrolling container;
   *      h: height of scrolling container;
   *      scrollW: total width of scrollable area;
   *      scrollH: total height of scrollable area; */
  @Output() scrollStats = new EventEmitter<ScrollXY>();

  /** Returns the Vertical Scroll status, top, middle, bottom, none.
   * Only returned if Input 'request' is set to 'positionY' or not specified.
   * @returns string
   *    'top' | 'middle' | 'bottom' | 'none' */
  @Output() scrollYPosition = new EventEmitter<ScrollPositionY>();

  /** Returns the Vertical Scroll status reversed flex (flex-direction: column-reverse;) for scroll-, top, middle, bottom, none.
   * Only returned if Input 'request' includes to 'positionYFlipped'.
   * @returns string
   *    'top' | 'middle' | 'bottom' | 'none' */
  @Output() scrollYPositionFlipped = new EventEmitter<ScrollPositionY>();

  /** Returns the Horizontal Scroll status, left, middle, right, none.
   * Only returned if Input 'request' is set to 'positionX' or not specified.
   * @returns string
   *    'left' | 'middle' | 'right' | 'none' */
  @Output() scrollXPosition = new EventEmitter<ScrollPositionX>();

  /** Specify what you want to be returned by the directive in order to save system resources.
   * Optional. Default will do all calculations.
   * @param ScrollRequest[]
   *    'positionX' | 'positionY' | 'positionYFlipped' | 'stats' */
  @Input() request: ScrollRequest[] = ['positionX', 'positionY', 'stats'];

  @Input() contentChanged$: Subject<void> | undefined;

  // eslint-disable-next-line @angular-eslint/no-input-rename
  private readonly unsub$ = new Subject<void>();

  constructor(private el: ElementRef) { }

  @HostListener('scroll', ['$event'])
  private onScroll() {
    const containerEl = this.el.nativeElement;
    const scrollXY = {x: containerEl.scrollLeft, y: containerEl.scrollTop};
    const elWH = {w: containerEl.getBoundingClientRect().width, h: containerEl.getBoundingClientRect().height};
    let xPos: ScrollPositionX | '' = '';
    let yPos: ScrollPositionY | '' = '';
    const getPositionX = (): ScrollPositionX => {
      return scrollXY.x < 1 && elWH.w + 1 > containerEl.scrollWidth
             ? 'none'
             : scrollXY.x + elWH.w > containerEl.scrollWidth - 1
               ? 'right'
               : scrollXY.x < 1
                 ? 'left'
                 : 'middle';
    };
    const getPositionY = (): ScrollPositionY => {
      return scrollXY.y < 1 && elWH.h + 1 > containerEl.scrollHeight
             ? 'none'
             : scrollXY.y + elWH.h > containerEl.scrollHeight - 1
               ? 'bottom'
               : scrollXY.y < 1
                 ? 'top'
                 : 'middle';
    };
    const getPositionYFlipped = (): ScrollPositionY => {
      return scrollXY.y < 1 && elWH.h + 1 > containerEl.scrollHeight
             ? 'none'
             : scrollXY.y < 0 && (scrollXY.y * -1) + elWH.h < containerEl.scrollHeight - 1
               ? 'middle'
               : scrollXY.y <= 0 &&  (scrollXY.y * -1) + elWH.h < containerEl.scrollHeight - 1
                 ? 'top'
                 : 'bottom';
    };
    if (this.request.includes('stats')) {
      this.scrollStats.next(
        new ScrollXY(
          scrollXY.x,
          scrollXY.y,
          elWH.w,
          elWH.h,
          containerEl.scrollWidth,
          containerEl.scrollHeight)
      );
    }
    if (this.request.includes('positionX')) {
      xPos = getPositionX();
      this.scrollXPosition.next(xPos);
    }
    if (this.request.includes('positionY')) {
      yPos = getPositionY();
      this.scrollYPosition.next(yPos);
    }
    if (this.request.includes('positionYFlipped')) {
      yPos = getPositionYFlipped();
      this.scrollYPositionFlipped.next(yPos);
    }
    return {x: xPos, y: yPos};
  }

  ngAfterViewInit(): void {
    this.onScroll();

    if (this.contentChanged$) {

      this.contentChanged$.pipe(
        takeUntil(this.unsub$),
        delay(30),
        switchMap(() => {
          let count = {count: 0};
          return timer(0).pipe(
            exhaustMap(() => {
              let v = this.onScroll();
              if ((v.x !== 'none' && v.x !== '') || (v.y !== 'none' && v.y !== '')) {
                return of(v);
              } else {
                switch (true) {
                  case count.count < 3:
                    count.count++;
                    return timer(200).pipe(mergeMap(() => {throw new Error('retry please');}));
                  case count.count > 6:
                    return of(v);
                  default:
                    count.count++;
                    return timer(600).pipe(mergeMap(() => {throw new Error('retry please');}));
                }
              }
            }),
            retry());
        })
      ).subscribe(() => {});

    }
  }

  ngOnDestroy(): void {
    this.unsub$.next();
    this.unsub$.complete();
  }
}
