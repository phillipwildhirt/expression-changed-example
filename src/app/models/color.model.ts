export class ColorMaster {
  colorNumber: string;
  color: string;
  planColor: { code: string; };
  category: string;
  source: string;
  note: string;
  departments: string[];

  constructor(data: any) {
    this.colorNumber = data.colorNumber ?? '';
    this.color = data.color ?? '';
    this.planColor = data.planColor ?? {code: ''};
    this.category = data.category ?? '';
    this.source = data.source ?? '';
    this.note = data.note ?? '';
    this.departments = data.departments ?? [];
  }
}

export enum ColorColumns {
  type        = 'type',
  colorNumber = 'colorNumber',
  colorName   = 'colorName',
  planColor   = 'planColor',
  source      = 'source',
  dept        = 'dept',
  note        = 'note',
  saveCancel  = 'saveCancel',
  shadowRight = 'shadowRight',
  shadowLeft  = 'shadowLeft'
}

export type TableColor = {
  [ColorColumns.type]: string,
  [ColorColumns.colorNumber]: string,
  [ColorColumns.colorName]: string,
  [ColorColumns.planColor]: { code: string },
  [ColorColumns.source]: string,
  [ColorColumns.dept]: string,
  [ColorColumns.note]: string,
}
