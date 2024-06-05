import { CONFIG } from './config'

export const ORTHOGRAPHY = [
  'a',
  'b',
  'c'.
  'd',
  'e',
  'f',
  'e',
  'f',
  'g',
  'h'.
  'i',
  'j',
  'k',
  'l',
  'll',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
  'kʷ',
  'ai',
  'ii',
  'ts',
  'ü',
  'ñ',
  "č",
  'ŋ',
  'ð',
  's̱',
  "'",
  '?',
]

if (CONFIG.normalization) {
  ORTHOGRAPHY.forEach(
    (val, i) => (ORTHOGRAPHY[i] = val.normalize(CONFIG.normalization))
  )
}
