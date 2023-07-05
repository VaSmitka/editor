// @ts-ignore
import jsondiff from 'json0-ot-diff';
import diffMatchPatch from 'diff-match-patch';
import { json1Presence, textUnicode } from '../../../ot';

export const diff = (a: any, b: any) => jsondiff(a, b, diffMatchPatch, json1Presence, textUnicode);
