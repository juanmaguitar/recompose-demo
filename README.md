# Recompose `Image` component - proof of concept

This repo is for demonstrating the use of [`recompose`](https://github.com/acdlite/recompose) to separate the logic inherent to Stateful Components (Class Components) into Higher Order Components to deal only with Functional Stateless Components and HOC's

From `recompose` [documentation ](https://github.com/acdlite/recompose#why):


> Function components have several key advantages:
> - They help prevent abuse of the `setState()` API, favoring props instead.
> - They encourage the "smart" vs. "dumb" component pattern.
> - They encourage code that is more reusable and modular.
> - They discourage giant, complicated components that do too many things.
> - In the future, they will allow React to make performance optimizations by avoiding unnecessary checks and memory allocations.


The demo can be seen online at: https://m5xx9vqq59.codesandbox.io/
