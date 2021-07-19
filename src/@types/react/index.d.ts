/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
declare namespace React {
  type PropsWithClassName<P> = P & { className?: string };

  interface ClassFunctionComponent<P = {}> {
      (props: PropsWithClassName<PropsWithChildren<P>>, context?: any): ReactElement<any, any> | null;
      propTypes?: WeakValidationMap<P>;
      contextTypes?: ValidationMap<any>;
      defaultProps?: Partial<P>;
      displayName?: string;
  }

  type CFC<P = {}> = ClassFunctionComponent<P>;

  interface ClassVoidFunctionComponent<P = {}> {
      (props: PropsWithClassName<P>, context?: any): ReactElement<any, any> | null;
      propTypes?: WeakValidationMap<P>;
      contextTypes?: ValidationMap<any>;
      defaultProps?: Partial<P>;
      displayName?: string;
  }

  type CVFC<P = {}> = ClassVoidFunctionComponent<P>;
}
