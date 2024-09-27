export function classNames(...classes: unknown[]): string {
  return classes.filter(Boolean).join(' ')
}

export const valueFormatter = (number: number): string => {
  return `${Intl.NumberFormat('de').format(number).toString()}`
}
