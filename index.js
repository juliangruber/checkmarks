const normal = b => b
  ? '✓'
  : '×'

const heavy = b => b
  ? '✔'
  : '✖'

const ballot = b => b
  ? '☑'
  : '☒'

module.exports = normal
module.exports.normal = normal
module.exports.heavy = heavy
module.exports.ballot = ballot

