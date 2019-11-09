/** @jsx h */

import { h } from '../../helpers'

export const input = (
  <value>
    <block>one</block>
    <block>two</block>
  </value>
)

export const run = editor => {
  return Array.from(editor.texts({ at: [] }))
}

export const output = [[<text>one</text>, [0, 0]], [<text>two</text>, [1, 0]]]
