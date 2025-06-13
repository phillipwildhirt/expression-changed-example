import { Injectable } from '@angular/core';
import { ColorMaster } from '../models/color.model';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable()
export class TableService {
  public readonly dataLoading$ = new BehaviorSubject<boolean>(true);

  constructor() { }

  public retrieveColorsForTable(): Observable<ColorMaster[]> {
    return of([
      new ColorMaster({
        colorNumber: 'AATESTA-12C',
        color: 'AATESTA12C',
        planColor: {
          code: 'BRG'
        },
        category: 'D',
        source: 'idc',
        note: 'na i don\'t wnt ato tojt aijdf naekln uadsbg',
      }),
      new ColorMaster({
        colorNumber: 'ADMIRAL BLUE-72C',
        color: 'ADMIRLBLU72C',
        planColor: {
          code: 'BLU'
        },
        category: 'D',
        source: 'anymore',
        note: 'fdfsafads',
        departments: [
          '3755',
          '3375',
          '3195'
        ],
      }),
      new ColorMaster({
        colorNumber: 'ADMIRAL-12C',
        color: 'TEST',
        planColor: {
          code: 'NVY'
        },
        category: 'D',
        source: 'test',
        note: '',
        departments: [
          '3565'
        ],
      }),
      new ColorMaster({
        colorNumber: 'ALASKAN BLUE-45C',
        color: 'ALASKABLU45C',
        planColor: {
          code: 'BLU'
        },
        category: 'D',
        source: 'Orient Craft',
        note: '',
        departments: [
          '3325',
          '3056',
          '3217'
        ],
      }),
      new ColorMaster({
        colorNumber: 'AMBER GOLD-44C',
        color: 'AMBERGOLD44C',
        planColor: {
          code: 'YEL'
        },
        category: 'D',
        source: 'Fashion Accessories',
        note: '',
        departments: [
          '3565',
          '3665'
        ],
      }),
      new ColorMaster({
        colorNumber: 'ANTIQUE BLUE-35C',
        color: 'ANTQ BLUE35C',
        planColor: {
          code: 'BLU'
        },
        category: 'D',
        source: 'COLOR #4 - SPRING 2034',
        note: '',
        departments: [
          '3755',
          '3565',
          '3965',
          '3195',
          '3076',
          '3217'
        ],
      }),
      new ColorMaster({
        colorNumber: 'ANTIQUE BLUE-37C',
        color: 'ANTQ BLUE37C',
        planColor: {
          code: 'BLU'
        },
        category: 'D',
        source: 'Fall 31',
        note: '',
        departments: [
          '3325',
          '3165',
          '3565',
          '3665',
          '3965',
          '3195',
          '3295'
        ],
      }),
      new ColorMaster({
        colorNumber: 'APRICOT ORANGE-74C',
        color: 'APICT ORG74C',
        planColor: {
          code: 'ORG'
        },
        category: 'D',
        source: '',
        note: '',
      }),
      new ColorMaster({
        colorNumber: 'APRICOT-44S',
        color: 'APRICOT-44S',
        planColor: {
          code: 'ORG'
        },
        category: 'D',
        source: '',
        note: '',
        departments: [
          '3965',
          '3375',
          '3195',
          '3056',
          '3076',
          '3117',
          '3217',
          '3917',
          '3267'
        ],
      }),
      new ColorMaster({
        colorNumber: 'APRICOT-46S',
        color: 'APRICOT-46S',
        planColor: {
          code: 'ORG'
        },
        category: 'D',
        source: '',
        note: '',
        departments: [
          '3811',
          '3371',
          '3965',
          '3375',
          '3575',
          '3195',
          '3556',
          '3076',
          '3876',
          '3976',
          '3117',
          '3217',
          '3917'
        ],
      }),
      new ColorMaster({
        colorNumber: 'APRICOT-55C',
        color: 'APRICOT-55C',
        planColor: {
          code: 'ORG'
        },
        category: 'D',
        source: '',
        note: '',
        departments: [
          '3212',
          '3332',
          '3532',
          '3414',
          '3554',
          '3564',
          '3745',
          '3165',
          '3565',
          '3665',
          '3765',
          '3375',
          '3195',
          '3056',
          '3076',
          '3876',
          '3117',
          '3217',
          '3917'
        ],
      }),
      new ColorMaster({
        colorNumber: 'MOON BLUE-25B',
        color: 'MOON BLUE25B',
        planColor: {
          code: 'BLU'
        },
        category: 'D',
        source: 'Mithlond - Downbound SP15',
        note: '',
        departments: [
          '3076',
          '3217'
        ],
      }),
      new ColorMaster({
        colorNumber: 'MOON BLUE-45C',
        color: 'MOON BLUE45C',
        planColor: {
          code: 'BLU'
        },
        category: 'D',
        source: 'Orient Craft',
        note: '',
        departments: [
          '3217'
        ],
      }),
      new ColorMaster({
        colorNumber: 'MOON BLUE-53C',
        color: 'MOON BLUE53C',
        planColor: {
          code: 'BLU'
        },
        category: 'D',
        source: 'color 7 - sp 15',
        note: '',
        departments: [
          '3325',
          '3745',
          '3755',
          '3565',
          '3665',
          '3765',
          '3965',
          '3375',
          '3195',
          '3076'
        ],
      }),
      new ColorMaster({
        colorNumber: 'MOON BLUE-55C',
        color: 'MOON BLUE55C',
        planColor: {
          code: 'BLU'
        },
        category: 'D',
        source: '',
        note: '',
        departments: [
          '3411',
          '3711',
          '3421',
          '3721',
          '3471',
          '3122',
          '3332',
          '3532',
          '3632',
          '3353',
          '3544',
          '3745',
          '3665',
          '3965',
          '3075',
          '3195',
          '3056',
          '3076',
          '3876',
          '3117',
          '3217',
          '3917',
          '3377'
        ],
      }),
      new ColorMaster({
        colorNumber: 'MOON BLUE-65C',
        color: 'MOON BLUE65C',
        planColor: {
          code: 'BLU'
        },
        category: 'D',
        source: 'Orient Craft knits',
        note: '',
        departments: [
          '3411',
          '3421',
          '3471',
          '3414',
          '3784',
          '3745',
          '3565',
          '3665',
          '3765',
          '3375',
          '3195',
          '3076',
          '3217',
          '3977'
        ],
      }),
      new ColorMaster({
        colorNumber: 'MOON BLUE-75C',
        color: 'MOON BLUE75C',
        planColor: {
          code: 'BLU'
        },
        category: 'D',
        source: 'SPRING 31',
        note: '',
        departments: [
          '3325',
          '3755',
          '3565',
          '3665',
          '3765',
          '3195',
          '3217',
          '3577'
        ],
      }),
      new ColorMaster({
        colorNumber: 'MOON BURN-36C',
        color: 'MOONBURN36C',
        planColor: {
          code: 'GRN'
        },
        category: 'D',
        source: 'Fashion Accessories',
        note: '',
        departments: [
          '3325',
          '3565',
          '3665',
          '3765',
          '3965',
          '3195',
          '3295'
        ],
      }),
      new ColorMaster({
        colorNumber: 'MOON BURN-55C',
        color: 'MOONBURN55C',
        planColor: {
          code: 'GRN'
        },
        category: 'D',
        source: 'Fashion Accessories',
        note: '',
      }),
      new ColorMaster({
        colorNumber: 'MOON-35B',
        color: 'MOON-35B',
        planColor: {
          code: 'AQU'
        },
        category: 'D',
        source: 'Epic',
        note: '',
        departments: [
          '3554',
          '3564',
          '3745',
          '3165',
          '3195'
        ],
      }),
      new ColorMaster({
        colorNumber: 'MOON-36C',
        color: 'MOON-36C',
        planColor: {
          code: 'AQU'
        },
        category: 'D',
        source: 'Spring 2034 - swatch',
        note: '',
        departments: [
          '3075',
          '3375',
          '3195'
        ],
      }),
      new ColorMaster({
        colorNumber: 'MOON-46C',
        color: 'MOON-46C',
        planColor: {
          code: 'AQU'
        },
        category: 'D',
        source: 'Spring 2034',
        note: '',
        departments: [
          '3325',
          '3755',
          '3665',
          '3765',
          '3965',
          '3195',
          '3295'
        ],
      }),
      new ColorMaster({
        colorNumber: 'MOON-53C',
        color: 'MOON-53C',
        planColor: {
          code: 'AQU'
        },
        category: 'D',
        source: '',
        note: '',
        departments: [
          '3811',
          '3821',
          '3371',
          '3332',
          '3532',
          '3632',
          '3932',
          '3542',
          '3225',
          '3245',
          '3745',
          '3165',
          '3565',
          '3665',
          '3765',
          '3965',
          '3575',
          '3195',
          '3556',
          '3566',
          '3076',
          '3876',
          '3976',
          '3117',
          '3217',
          '3917',
          '3377'
        ],
      }),
      new ColorMaster({
        colorNumber: 'MOON-53P',
        color: 'MOON-53P',
        planColor: {
          code: 'AQU'
        },
        category: 'D',
        source: '',
        note: '',
        departments: [
          '3371',
          '3076',
          '3876',
          '3117',
          '3217',
          '3917'
        ],
      }),
      new ColorMaster({
        colorNumber: 'MOON-53S',
        color: 'MOON-53S',
        planColor: {
          code: 'AQU'
        },
        category: 'D',
        source: '',
        note: '',
        departments: [
          '3821',
          '3371',
          '3965',
          '3195',
          '3076',
          '3876',
          '3117',
          '3217',
          '3917',
          '3377'
        ],
      }),
      new ColorMaster({
        colorNumber: 'MOON-55S',
        color: 'MOON-55S',
        planColor: {
          code: 'AQU'
        },
        category: 'D',
        source: '',
        note: '',
        departments: [
          '3811',
          '3821',
          '3371',
          '3965',
          '3375',
          '3195',
          '3556',
          '3076',
          '3876',
          '3976',
          '3117',
          '3217',
          '3917'
        ],
      }),
      new ColorMaster({
        colorNumber: 'MOON-72C',
        color: 'MOON-72C',
        planColor: {
          code: 'AQU'
        },
        category: 'D',
        source: '',
        note: '',
        departments: [
          '3811',
          '3821',
          '3371',
          '3122',
          '3332',
          '3532',
          '3745',
          '3565',
          '3665',
          '3765',
          '3195',
          '3056',
          '3076',
          '3876',
          '3976',
          '3117',
          '3217',
          '3917',
          '3712'
        ],
      }),
      new ColorMaster({
        colorNumber: 'MOONMARINE-27C',
        color: 'AQUMARINE27C',
        planColor: {
          code: 'BLU'
        },
        category: 'D',
        source: '',
        note: '',
        departments: [
          '3414',
          '3325',
          '3745',
          '3755',
          '3565',
          '3876',
          '3217',
          '3917',
          '3977'
        ],
      }),
      new ColorMaster({
        colorNumber: 'MOONMARINE-55C',
        color: 'AQUMARINE55C',
        planColor: {
          code: 'BLU'
        },
        category: 'D',
        source: '',
        note: '',
        departments: [
          '3811',
          '3371',
          '3212',
          '3122',
          '3876',
          '3976',
          '3117',
          '3217',
          '3917'
        ],
      }),
      new ColorMaster({
        colorNumber: 'BABY BLUE-30C',
        color: 'BABY BLUE30C',
        planColor: {
          code: 'BLU'
        },
        category: 'D',
        source: '',
        note: '',
        departments: [
          '3755'
        ],
      }),
      new ColorMaster({
        colorNumber: 'BABY BURN-11C',
        color: 'BABYBURN11C',
        planColor: {
          code: 'GRN'
        },
        category: 'D',
        source: 'NA',
        note: '',
        departments: [
          '3414'
        ],
      }),
      new ColorMaster({
        colorNumber: 'BAB030',
        color: 'HEATHER LIME',
        planColor: {
          code: 'LIM'
        },
        category: 'V',
        source: '',
        note: '',
      }),
      new ColorMaster({
        colorNumber: 'BAB082',
        color: 'OLIVE MARLED',
        planColor: {
          code: 'OLI'
        },
        category: 'V',
        source: '',
        note: '',
      }),
      new ColorMaster({
        colorNumber: 'BACT01',
        color: 'CREAM HEATHR',
        planColor: {
          code: 'CRM'
        },
        category: 'V',
        source: '',
        note: '',
      }),
      new ColorMaster({
        colorNumber: 'BACT10',
        color: 'LIGHT OXFORD',
        planColor: {
          code: 'NEU'
        },
        category: 'V',
        source: '',
        note: '',
      }),
      new ColorMaster({
        colorNumber: 'BALSAM BURN-12B',
        color: 'BALSAMGRN12B',
        planColor: {
          code: 'GRN'
        },
        category: 'D',
        source: 'new name for LIGHT BALSAM-12B',
        note: '',
        departments: [
          '3165',
          '3265',
          '3965',
          '3217'
        ],
      }),
      new ColorMaster({
        colorNumber: 'BALSAM BURN-32C',
        color: 'BALSAMGRN32C',
        planColor: {
          code: 'GRN'
        },
        category: 'D',
        source: 'new name for Medium Balsam-32c',
        note: '',
        departments: [
          '3245',
          '3755',
          '3165',
          '3565',
          '3195',
          '3076',
          '3217'
        ],
      }),
      new ColorMaster({
        colorNumber: 'BALSAM BURN-44C',
        color: 'BALSAMGRN44C',
        planColor: {
          code: 'GRN'
        },
        category: 'D',
        source: 'new name for Dusty Balsam-44c',
        note: '',
        departments: [
          '3645',
          '3217'
        ],
      }),
      new ColorMaster({
        colorNumber: 'BALSAM BURN-45C',
        color: 'BALSAMGRN45C',
        planColor: {
          code: 'GRN'
        },
        category: 'D',
        source: 'new name for Dusty Balsam-45c',
        note: '',
        departments: [
          '3165',
          '3565',
          '3665',
          '3765',
          '3195',
          '3217'
        ],
      }),
      new ColorMaster({
        colorNumber: 'BALSAM BURN-51B',
        color: 'BALSAMGRN51B',
        planColor: {
          code: 'GRN'
        },
        category: 'D',
        source: 'Swatch from St Patricia.',
        note: '',
        departments: [
          '3165',
          '3265',
          '3195'
        ],
      }),
      new ColorMaster({
        colorNumber: 'BALSAM BURN-53C',
        color: 'BALSAMGRN53C',
        planColor: {
          code: 'GRN'
        },
        category: 'D',
        source: 'new name for balsam-53c',
        note: '',
        departments: [
          '3165',
          '3265',
          '3195',
          '3217'
        ],
      }),
      new ColorMaster({
        colorNumber: 'BALSAM BURN-53S',
        color: 'BALSAMGRN53S',
        planColor: {
          code: 'GRN'
        },
        category: 'D',
        source: 'new name for BALSAM BURN-53S',
        note: '',
      }),
      new ColorMaster({
        colorNumber: 'BALSAM BURN-56C',
        color: 'BALSAMGRN56C',
        planColor: {
          code: 'GRN'
        },
        category: 'D',
        source: 'Spring 2034',
        note: '',
        departments: [
          '3745',
          '3755',
          '3565',
          '3665',
          '3765',
          '3195'
        ],
      }),
      new ColorMaster({
        colorNumber: 'BALSAM BURN-63C',
        color: 'BALSAMGRN63C',
        planColor: {
          code: 'GRN'
        },
        category: 'D',
        source: 'new name for Balsam-63c',
        note: '',
        departments: [
          '3745'
        ],
      }),
      new ColorMaster({
        colorNumber: 'BALSAM BURN-67C',
        color: 'BALSAMGRN67C',
        planColor: {
          code: 'GRN'
        },
        category: 'D',
        source: 'Fall 31',
        note: '',
        departments: [
          '3325',
          '3565',
          '3665',
          '3765',
          '3965',
          '3195'
        ],
      }),
      new ColorMaster({
        colorNumber: 'BALSAM BURN-74C',
        color: 'BALSAMGRN74C',
        planColor: {
          code: 'GRN'
        },
        category: 'D',
        source: 'new name for Balsam-74C',
        note: '',
      }),
      new ColorMaster({
        colorNumber: 'BALSAM BURN-75C',
        color: 'BALSAMGRN75C',
        planColor: {
          code: 'GRN'
        },
        category: 'D',
        source: 'F33 COLOR 11',
        note: '',
      }),
      new ColorMaster({
        colorNumber: 'BALSAM-53C',
        color: 'BALSAM-53C',
        planColor: {
          code: 'GRN'
        },
        category: 'D',
        source: '',
        note: '',
        departments: [
          '3811',
          '3565',
          '3665',
          '3765',
          '3965',
          '3075',
          '3575',
          '3975',
          '3195',
          '3056',
          '3556',
          '3266',
          '3076',
          '3876',
          '3976',
          '3117',
          '3217',
          '3917',
          '3177'
        ],
      }),
      new ColorMaster({
        colorNumber: 'BALSAM-53S',
        color: 'BALSAM-53S',
        planColor: {
          code: 'GRN'
        },
        category: 'D',
        source: '',
        note: '',
        departments: [
          '3811',
          '3965',
          '3375',
          '3556',
          '3266',
          '3076',
          '3876',
          '3976',
          '3117',
          '3217',
          '3917'
        ],
      }),
      new ColorMaster({
        colorNumber: 'BALSAM-63C',
        color: 'BALSAM-63C',
        planColor: {
          code: 'GRN'
        },
        category: 'D',
        source: '',
        note: '',
        departments: [
          '3565',
          '3665',
          '3765',
          '3965',
          '3195',
          '3076',
          '3217',
          '3917'
        ],
      }),
      new ColorMaster({
        colorNumber: 'BALSAM-74C',
        color: 'BALSAM-74C',
        planColor: {
          code: 'GRN'
        },
        category: 'D',
        source: 'COLOR #5- FALL 2034',
        note: '',
        departments: [
          '3076',
          '3217'
        ],
      })
    ]).pipe(delay(50));
  }
}
