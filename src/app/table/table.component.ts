import { Component, HostListener, inject, OnDestroy, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { merge, of, Subject } from 'rxjs';
import { delay, take, takeUntil } from 'rxjs/operators';
import { CdkCell, CdkCellDef, CdkColumnDef, CdkHeaderCell, CdkHeaderCellDef, CdkHeaderRow, CdkHeaderRowDef, CdkRow, CdkTable } from '@angular/cdk/table';
import { NgClass } from '@angular/common';
import { isEmpty } from 'lodash-es';
import { TableService } from './table.service';
import { ColorMaster, ColorColumns, TableColor } from '@app/models/color.model';
import { TypeSafeCdkCellDef } from '@app/directives/type-safe-cdk-cell-def.directive';
import { TypeSafeCdkRowDef } from '@app/directives/type-safe-cdk-row-def.directive';
import { ScrollDirective, ScrollPositionX, ScrollPositionY } from '@app/directives/scroll.directive';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss',
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  imports: [
    CdkColumnDef,
    CdkHeaderCell,
    CdkHeaderCellDef,
    CdkCell,
    CdkCellDef,
    CdkHeaderRow,
    CdkHeaderRowDef,
    TypeSafeCdkCellDef,
    TypeSafeCdkRowDef,
    CdkRow,
    CdkTable,
    CdkCell,
    NgClass,
    ScrollDirective
  ],
  providers: [
    TableService
  ]
})
export class TableComponent implements OnInit, OnDestroy {
  @ViewChild(CdkTable) cdkTable?: CdkTable<typeof this.colorColumns>;
  public tableService: TableService = inject(TableService);
  private unsub$ = new Subject<void>();
  public colors: ColorMaster[] = [];
  public colorColumns: ColorColumns[] = [
    ColorColumns.type,
    ColorColumns.colorNumber,
    ColorColumns.shadowLeft,
    ColorColumns.colorName,
    ColorColumns.planColor,
    ColorColumns.source,
    ColorColumns.dept,
    ColorColumns.note,
    ColorColumns.shadowRight,
    ColorColumns.saveCancel,
  ];
  public colorTableData: TableColor[] = [];
  public recalculateHeight$ = new Subject<void>();
  public recalculateHeightWidth$ = new Subject<void>();
  protected stuckLeft: boolean = false;
  protected stuckRight: boolean = true;
  protected stuckTop: boolean = false;

  protected readonly ColorColumns = ColorColumns;

  @HostListener('window:resize')
  onResize(): void {
    this.recalculateHeight$.next();
    this.updateStickColumnStylesAsync();
  }

  constructor() {}

  ngOnInit(): void {

    merge(this.tableService.dataLoading$, this.recalculateHeight$)
      .pipe(takeUntil(this.unsub$))
      .subscribe(() => this.recalculateHeightWidth$.next());

    this.tableService.retrieveColorsForTable().pipe(
      take(1)
    ).subscribe(colors => {
      this.colors = [...colors];
      this.setTableData(colors);
      this.tableService.dataLoading$.next(false);
      this.updateStickColumnStylesAsync();
    });
  }

  ngOnDestroy(): void {
    this.unsub$.next();
    this.unsub$.complete();
  }

  public trackById(index: number, x: TableColor): string {
    return `${ x.colorNumber }-${ index }`;
  }

  public tableXScroll($event: ScrollPositionX): void {
    this.stuckLeft = $event === 'right' || $event === 'middle';
    this.stuckRight = $event === 'left' || $event === 'middle';
  }

  public tableYScroll($event: ScrollPositionY): void {
    this.stuckTop = $event === 'bottom' || $event === 'middle';
  }

  private setTableData(colors: ColorMaster[]): void {
    this.colorTableData = colors.map((c, i) => this.buildTableColorFromColorMaster(c));
  }

  private buildTableColorFromColorMaster(c: ColorMaster): TableColor {
    return {
      type: c.category,
      colorNumber: c.colorNumber,
      colorName: c.color,
      planColor: c.planColor,
      source: c.source,
      dept: !isEmpty(c.departments) ? c.departments.join(', ') : '',
      note: c.note,
    };
  }

  private updateStickColumnStylesAsync(): void {
    of([]).pipe(delay(0)).subscribe(() => this.cdkTable?.updateStickyColumnStyles());
  }

  protected readonly isEmpty = isEmpty;
}
