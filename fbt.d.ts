type Valueof<T> = T[keyof T];

interface InitParams {
  translations: string;
}

declare module "fbt" {
  export function fbt(
    textToTranslate: string,
    desc: string,
    opts?: any
  ): string;

  export default fbt;

  export function init(params: InitParams): void;

  export type INTL_VARIATIONS = {
    BITMASK_NUMBER: 28;
    BITMASK_GENDER: 3;
    // types GENDER
    GENDER_MALE: 1;
    GENDER_FEMALE: 2;
    GENDER_UNKNOWN: 3;
    // types NUMBER
    NUMBER_ONE: 4;
    NUMBER_TWO: 8;
    NUMBER_MANY: 12;
    NUMBER_ZERO: 16;
    NUMBER_FEW: 20;
    NUMBER_OTHER: 24;
  };

  export const IntlVariations: INTL_VARIATIONS;

  export type GENDER_CONST = {
    NOT_A_PERSON: 0;
    FEMALE_SINGULAR: 1;
    MALE_SINGULAR: 2;
    FEMALE_SINGULAR_GUESS: 3;
    MALE_SINGULAR_GUESS: 4;
    MIXED_SINGULAR: 5;
    MIXED_PLURAL: 5;
    NEUTER_SINGULAR: 6;
    UNKNOWN_SINGULAR: 7;
    FEMALE_PLURAL: 8;
    MALE_PLURAL: 9;
    NEUTER_PLURAL: 10;
    UNKNOWN_PLURAL: 11;
  };

  export const GenderConst: GENDER_CONST;

  export const IntlViewerContext: {
    GENDER: Valueof<INTL_VARIATIONS>;
    locale: string;
  };
}
