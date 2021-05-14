import * as CSS from 'csstype';

type JSSNormalCssProperties = CSS.Properties<number | string>;

type PropsFunc<Props extends Record<string, unknown>, T> = (props: Props) => T;


interface CSSProperties extends JSSNormalCssProperties {
  [k: string]: unknown | CSSProperties;
}

// eslint-disable-next-line @typescript-eslint/ban-types
type BaseCreateCSSProperties<Props extends Record<string, unknown> = {}> = {
  [P in keyof JSSNormalCssProperties]:
    | JSSNormalCssProperties[P]
    | PropsFunc<Props, JSSNormalCssProperties[P]>;
};

// eslint-disable-next-line @typescript-eslint/ban-types
interface CreateCSSProperties<Props extends Record<string, unknown> = {}>
  extends BaseCreateCSSProperties<Props> {
  [k: string]:
    | BaseCreateCSSProperties<Props>[keyof BaseCreateCSSProperties<Props>]
    | CreateCSSProperties<Props>;
}

type StyleRules<
  ClassKey extends string,
  // eslint-disable-next-line @typescript-eslint/ban-types
  Props extends Record<string, unknown> = {},
> = Record<
  ClassKey,
  | CSSProperties
  | CreateCSSProperties<Props>
  | PropsFunc<Props, CreateCSSProperties<Props>>
>;

type StyleRulesCallback<ClassKey extends string, Props extends Record<string, unknown>, Theme> = (
  theme: Theme,
) => StyleRules<ClassKey, Props>;

export type Styles<ClassKey extends string, Props extends Record<string, unknown>, Theme> =
  | StyleRules<ClassKey, Props>
  | StyleRulesCallback<ClassKey, Props, Theme>;

export type ClassNameMap<ClassKey extends string> = Record<ClassKey, string>;
