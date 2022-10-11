export function shortAddress(address) {
  if (!address && typeof address !== 'string') return null
  return address.replace(/^(\w{6})\w+(\w{6})$/g, '$1...$2')
}
