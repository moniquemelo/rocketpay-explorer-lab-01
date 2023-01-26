const re = /foo/

const matches = 'aBC'.match(/[A-Z]/g)
// [B, C] -> retorna array com os matchs encontrados.

const index = 'aBC'.search(/[A-Z]/)
// 1 -> Existe ou não padrão? 1 significa TRUE.

const next = 'aBC'.replace(/a/, 'A')
// ABC
