import { Element } from 'slate'

export const input = {
  children: [],
  selection: null,
}

export const test = value => {
  return Element.isElement(value)
}

export const output = false
