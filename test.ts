import {a, BType} from './c';

const myObj = {
  b: a,
} as const satisfies BType;