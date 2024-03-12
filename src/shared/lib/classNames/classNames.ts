type Mods = Record<string, boolean | string>;

interface IClassNames<T> {
  cls: T;
  mods?: Mods;
  additional?: string[];
}

export function classNames({
  cls,
  additional = [],
  mods = {},
}: IClassNames<string>): string {
  return [
    cls,
    ...additional,
    ...Object.entries(mods)?.map(([cls, value]) =>
      Boolean(value) ? cls : void 0
    ),
  ].join(" ");
}
