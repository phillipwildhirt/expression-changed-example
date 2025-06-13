import { CdkCellDef, CdkTableDataSourceInput } from '@angular/cdk/table';
import { Directive, Input } from '@angular/core';
import { Observable } from 'rxjs';

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: '[cdkCellDef]', // same selector as MatCellDef
  providers: [{ provide: CdkCellDef, useExisting: TypeSafeCdkCellDef }],
  standalone: true
})
// eslint-disable-next-line @angular-eslint/directive-class-suffix
export class TypeSafeCdkCellDef<T> extends CdkCellDef {
  // leveraging syntactic-sugar syntax when we use *matCellDef
  @Input({required: true}) cdkCellDefDataSource!: T[] | Observable<T[]> | CdkTableDataSourceInput<T>;

  // ngTemplateContextGuard flag to help with the Language Service
  static ngTemplateContextGuard<T>(
    dir: TypeSafeCdkCellDef<T>,
    ctx: unknown,
  ): ctx is { $implicit: T; index: number } {
    return true;
  }
}
