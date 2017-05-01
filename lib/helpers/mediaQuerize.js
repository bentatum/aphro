
export default function (breakpoints, util, prop, className) {
  util[className('xs')] = { [`@media (max-width: ${breakpoints.extraSmall}px)`]: prop }
  util[className('sm')] = { [`@media (min-width: ${breakpoints.extraSmall + 1}px) and (max-width: ${breakpoints.small}px)`]: prop }
  util[className('md')] = { [`@media (min-width: ${breakpoints.small + 1}px) and (max-width: ${breakpoints.medium}px)`]: prop }
  util[className('lg')] = { [`@media (min-width: ${breakpoints.medium + 1}px) and (max-width: ${breakpoints.large}px)`]: prop }
  util[className('xl')] = { [`@media (min-width: ${breakpoints.large + 1}px)`]: prop }
  return util
}
