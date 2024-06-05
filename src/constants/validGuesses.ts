import { CONFIG } from './config'

export const VALIDGUESSES = [
   'hollow',
  'pillow',
  'pasted',
  'poetry',
  'medium',
  'susan\'s',
  "sun'se",
]

if (CONFIG.normalization) {
  VALIDGUESSES.forEach(
    (val, i) => (VALIDGUESSES[i] = val.normalize(CONFIG.normalization))
  )
}
