// Type definitions for markdown-to-jsx 6.11
// Project: https://probablyup.github.io/markdown-to-jsx
// Definitions by: Elizabeth Craig <https://github.com/ecraig12345>
//                 Sun Knudsen <https://github.com/sunknudsen>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import * as React from 'react';

export default class Markdown extends React.Component<MarkdownProps> {}

export interface MarkdownProps extends React.HTMLAttributes<HTMLElement> {
    options?: MarkdownOptions;
    children: string;
}

export type ComponentOverride<P = any, S = any> =
    | string
    | React.ComponentClass<P, S>
    | React.SFC<P>
    | {
          component: string | React.ComponentClass<P, S> | React.SFC<P>;
          props?: any;
      };

export interface MarkdownOptions {
    /** Force all input strings to use block layout. */
    forceBlock?: boolean;

    /** Force all input strings to use inline layout. */
    forceInline?: boolean;

    /** Override representation of any HTML tag or custom component. */
    overrides?: {
        // As of 6.9.3, these tags are the only ones automatically generated by markdown-to-jsx.
        a?: ComponentOverride;
        br?: ComponentOverride;
        button?: ComponentOverride;
        code?: ComponentOverride;
        del?: ComponentOverride;
        div?: ComponentOverride;
        em?: ComponentOverride;
        footer?: ComponentOverride;
        input?: ComponentOverride;
        h1?: ComponentOverride;
        h2?: ComponentOverride;
        h3?: ComponentOverride;
        h4?: ComponentOverride;
        h5?: ComponentOverride;
        h6?: ComponentOverride;
        hr?: ComponentOverride;
        img?: ComponentOverride;
        ol?: ComponentOverride;
        p?: ComponentOverride;
        pre?: ComponentOverride;
        span?: ComponentOverride;
        strong?: ComponentOverride;
        sub?: ComponentOverride;
        sup?: ComponentOverride;
        table?: ComponentOverride;
        tbody?: ComponentOverride;
        td?: ComponentOverride;
        th?: ComponentOverride;
        thead?: ComponentOverride;
        tr?: ComponentOverride;
        ul?: ComponentOverride;
        /** In addition to HTML tags, you can specify a custom component name which can be used within markdown text. */
        [key: string]: ComponentOverride | undefined;
    };

    /** Custom React.createElement behavior. */
    createElement?: <P extends {}>(
        type: React.SFC<P> | React.ComponentClass<P> | string,
        // This typing is copied from React
        // tslint:disable-next-line:no-null-undefined-union
        props?: (React.Attributes & P) | null,
        // tslint:disable-next-line:no-null-undefined-union
        ...children: React.ReactNode[]
    ) => React.ReactElement<P>;

    /** Custom function to generate an HTML id from headings. */
    slugify?: (text: string) => string;
}

export function compiler(markdown: string, options?: MarkdownOptions): JSX.Element;
