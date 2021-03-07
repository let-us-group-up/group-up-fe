/**
 * These are types for things that are present in the `experimental` builds of React but not yet
 * on a stable build.
 *
 * Once they are promoted to stable they can just be moved to the main index file.
 *
 * To load the types declared here in an actual project, there are three ways. The easiest one,
 * if your `tsconfig.json` already has a `"types"` array in the `"compilerOptions"` section,
 * is to add `"react-dom/experimental"` to the `"types"` array.
 *
 * Alternatively, a specific import syntax can to be used from a typescript file.
 * This module does not exist in reality, which is why the {} is important:
 *
 * ```ts
 * import {} from 'react-dom/experimental'
 * ```
 *
 * It is also possible to include it through a triple-slash reference:
 *
 * ```ts
 * /// <reference types="react-dom/experimental" />
 * ```
 *
 * Either the import or the reference only needs to appear once, anywhere in the project.
 */

// See https://github.com/facebook/react/blob/master/packages/react-dom/src/client/ReactDOM.js to see how the exports are declared,
// and https://github.com/facebook/react/blob/master/packages/shared/ReactFeatureFlags.js to verify which APIs are
// flagged experimental or not. Experimental APIs will be tagged with `__EXPERIMENTAL__`.

import React = require('react');
import ReactDOM = require('react-dom');

export {};

declare module 'react-dom' {
    // enableSuspenseServerRenderer feature
    interface HydrationOptions {
        onHydrated?(suspenseInstance: Comment): void;
        onDeleted?(suspenseInstance: Comment): void;
    }

    // exposeConcurrentModeAPIs features

    interface RootOptions {
        hydrate?: boolean;
        hydrationOptions?: HydrationOptions;
    }

    interface Root {
        render(children: React.ReactChild | React.ReactNodeArray, callback?: () => void): void;
        unmount(callback?: () => void): void;
    }

    /**
     * Replaces `ReactDOM.render` when the `.render` method is called and enables Blocking Mode.
     *
     * Opting into Concurrent Mode introduces semantic changes to how React works.
     * This means that you can’t use Concurrent Mode in just a few components.
     * Because of this, some apps may not be able to migrate directly to Concurrent Mode.
     * Blocking Mode only contains a small subset of Concurrent Mode features and is intended
     * as an intermediary migration step for apps that are unable to migrate directly.
     *
     * @see https://reactjs.org/docs/concurrent-mode-adoption.html#migration-step-blocking-mode
     * @see https://reactjs.org/docs/concurrent-mode-reference.html#createblockingroot
     */
    function unstable_createBlockingRoot(
        container: Element | Document | DocumentFragment | Comment,
        options?: RootOptions,
    ): Root;

    /**
     * Replaces `ReactDOM.render` when the `.render` method is called and enables Concurrent Mode.
     *
     * @see https://reactjs.org/docs/concurrent-mode-reference.html#createroot
     */
    function unstable_createRoot(container: Element | Document | DocumentFragment | Comment, options?: RootOptions): Root;

    function unstable_flushControlled(callback: () => void): void;

    // enableSelectiveHydration feature

    /**
     * @see https://github.com/facebook/react/commit/3a2b5f148d450c69aab67f055fc441d294c23518
     */
    function unstable_scheduleHydration(target: Element | Document | DocumentFragment | Comment): void;
}

declare module 'react' {
    export interface SuspenseProps {
        /**
         * The presence of this prop indicates that the content is computationally expensive to render.
         * In other words, the tree is CPU bound and not I/O bound (e.g. due to fetching data).
         * @see {@link https://github.com/facebook/react/pull/19936}
         */
        unstable_expectedLoadTime?: number;
    }

    export type SuspenseListRevealOrder = 'forwards' | 'backwards' | 'together';
    export type SuspenseListTailMode = 'collapsed' | 'hidden';

    export interface SuspenseListCommonProps {
        /**
         * Note that SuspenseList require more than one child;
         * it is a runtime warning to provide only a single child.
         *
         * It does, however, allow those children to be wrapped inside a single
         * level of `<React.Fragment>`.
         */
        children: ReactElement | Iterable<ReactElement>;
    }

    interface DirectionalSuspenseListProps extends SuspenseListCommonProps {
        /**
         * Defines the order in which the `SuspenseList` children should be revealed.
         */
        revealOrder: 'forwards' | 'backwards';
        /**
         * Dictates how unloaded items in a SuspenseList is shown.
         *
         * - By default, `SuspenseList` will show all fallbacks in the list.
         * - `collapsed` shows only the next fallback in the list.
         * - `hidden` doesn’t show any unloaded items.
         */
        tail?: SuspenseListTailMode;
    }

    interface NonDirectionalSuspenseListProps extends SuspenseListCommonProps {
        /**
         * Defines the order in which the `SuspenseList` children should be revealed.
         */
        revealOrder?: Exclude<SuspenseListRevealOrder, DirectionalSuspenseListProps['revealOrder']>;
        /**
         * The tail property is invalid when not using the `forwards` or `backwards` reveal orders.
         */
        tail?: never;
    }

    export type SuspenseListProps = DirectionalSuspenseListProps | NonDirectionalSuspenseListProps;

    /**
     * `SuspenseList` helps coordinate many components that can suspend by orchestrating the order
     * in which these components are revealed to the user.
     *
     * When multiple components need to fetch data, this data may arrive in an unpredictable order.
     * However, if you wrap these items in a `SuspenseList`, React will not show an item in the list
     * until previous items have been displayed (this behavior is adjustable).
     *
     * @see https://reactjs.org/docs/concurrent-mode-reference.html#suspenselist
     * @see https://reactjs.org/docs/concurrent-mode-patterns.html#suspenselist
     */
    export const unstable_SuspenseList: ExoticComponent<SuspenseListProps>;

    export interface SuspenseConfig {
        busyDelayMs?: number;
        busyMinDurationMs?: number;
    }

    // undocumented, considered for removal
    export function unstable_withSuspenseConfig(
        scope: () => void | undefined,
        config: SuspenseConfig | null | undefined,
    ): void;

    // must be synchronous
    export type TransitionFunction = () => void | undefined;
    // strange definition to allow vscode to show documentation on the invocation
    export interface TransitionStartFunction {
        /**
         * State updates caused inside the callback are allowed to be deferred.
         *
         * **If some state update causes a component to suspend, that state update should be wrapped in a transition.**
         *
         * @param callback A _synchronous_ function which causes state updates that can be deferred.
         */
        (callback: TransitionFunction): void;
    }

    /**
     * Returns a deferred version of the value that may “lag behind” it for at most `timeoutMs`.
     *
     * This is commonly used to keep the interface responsive when you have something that renders immediately
     * based on user input and something that needs to wait for a data fetch.
     *
     * A good example of this is a text input.
     *
     * @param value The value that is going to be deferred
     *
     * @see https://reactjs.org/docs/concurrent-mode-reference.html#usedeferredvalue
     */
    export function unstable_useDeferredValue<T>(value: T): T;

    /**
     * Allows components to avoid undesirable loading states by waiting for content to load
     * before transitioning to the next screen. It also allows components to defer slower,
     * data fetching updates until subsequent renders so that more crucial updates can be
     * rendered immediately.
     *
     * The `useTransition` hook returns two values in an array.
     *
     * The first is a function that takes a callback. We can use it to tell React which state we want to defer.
     * The seconda boolean. It’s React’s way of informing us whether we’re waiting for the transition to finish.
     *
     * **If some state update causes a component to suspend, that state update should be wrapped in a transition.**
     *
     * @param config An optional object with `timeoutMs`
     *
     * @see https://reactjs.org/docs/concurrent-mode-reference.html#usetransition
     */
    export function unstable_useTransition(config?: SuspenseConfig | null): [TransitionStartFunction, boolean];

    const opaqueIdentifierBranding: unique symbol;
    /**
     * WARNING: Don't use this as a `string`.
     *
     * This is an opaque type that is not supposed to type-check structurally.
     * It is only valid if returned from React methods and passed to React e.g. `<button aria-labelledby={opaqueIdentifier} />`
     */
    // We can't create a type that would be rejected for string concatenation or `.toString()` calls.
    // So in order to not have to add `string | OpaqueIdentifier` to every react-dom host prop we intersect it with `string`.
    type OpaqueIdentifier = string & {
        readonly [opaqueIdentifierBranding]: unknown;
        // While this would cause `const stringified: string = opaqueIdentifier.toString()` to not type-check it also adds completions while typing.
        // It would also still allow string concatenation.
        // Unsure which is better. Not type-checking or not suggesting.
        // toString(): void;
    };

    export function unstable_useOpaqueIdentifier(): OpaqueIdentifier;

    /**
     * Similar to `useTransition` but allows uses where hooks are not available.
     *
     * @param callback A _synchronous_ function which causes state updates that can be deferred.
     */
    export function unstable_startTransition(scope: TransitionFunction): void;
}
