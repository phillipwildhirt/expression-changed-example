import { CdkRowDef, CdkTableDataSourceInput } from '@angular/cdk/table';
import { Directive, Input } from '@angular/core';
import { Observable } from 'rxjs';

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: '[cdkRowDef]', // same selector as MatRowDef
  providers: [{ provide: CdkRowDef, useExisting: TypeSafeCdkRowDef }],
  standalone: true
})
// eslint-disable-next-line @angular-eslint/directive-class-suffix
export class TypeSafeCdkRowDef<T> extends CdkRowDef<T> {
  // leveraging syntactic-sugar syntax when we use *matRowDef
  @Input({required: true}) cdkRowDefDataSource!: T[] | Observable<T[]> | CdkTableDataSourceInput<T>;

  // ngTemplateContextGuard flag to help with the Language Service
  static ngTemplateContextGuard<T>(
    dir: TypeSafeCdkRowDef<T>,
    ctx: unknown,
  ): ctx is { $implicit: T; index: number } {
    return true;
  }
}
