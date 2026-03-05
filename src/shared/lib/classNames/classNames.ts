type Mods = Record<string, boolean | string>;


function classNames(cls: string, mods: Mods, additional: string[]): string {
   return [
       cls,
       ...additional,
       ...Object.entries(mods)
           .filter(([, value]) => value)
           .map(([classNames, ]) => classNames),

   ].join(' ')
}

export default classNames;