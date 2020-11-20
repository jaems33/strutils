# Strutils

A tiny library to compile helpful string functions not available in the standard JavaScript library.

Functions:

`isString(input)`: parameter `input` is checked to see if it's a string. Returns a `boolean`.

`toTitleCase(input, useRules=false)`: `input: string` is converted to title case. By default, all words be title cased. Set optional parameter `useRules` to true to not capitalize words commonly used words.