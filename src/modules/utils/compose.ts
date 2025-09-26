export type Constructor = new (...args: any[]) => any

type UnaryFunction<T, R> = (source: T) => R

interface Compose {
  <T extends Constructor, A>(superclass: T, mixin: UnaryFunction<T, A>): A
  <T extends Constructor, A, B>(
    superclass: T,
    mixin: UnaryFunction<T, A>,
    mixinB: UnaryFunction<A, B>,
  ): B
  <T extends Constructor, A, B, C>(
    superclass: T,
    mixin: UnaryFunction<T, A>,
    mixinB: UnaryFunction<A, B>,
    mixinC: UnaryFunction<B, C>,
  ): C
  <T extends Constructor, A, B, C, D>(
    superclass: T,
    mixin: UnaryFunction<T, A>,
    mixinB: UnaryFunction<A, B>,
    mixinC: UnaryFunction<B, C>,
    mixinD: UnaryFunction<C, D>,
  ): D
  <T extends Constructor, A, B, C, D, E>(
    superclass: T,
    mixin: UnaryFunction<T, A>,
    mixinB: UnaryFunction<A, B>,
    mixinC: UnaryFunction<B, C>,
    mixinD: UnaryFunction<C, D>,
    mixinE: UnaryFunction<D, E>,
  ): E
  <T extends Constructor, A, B, C, D, E, F, G>(
    superclass: T,
    mixin: UnaryFunction<T, A>,
    mixinB: UnaryFunction<A, B>,
    mixinC: UnaryFunction<B, C>,
    mixinD: UnaryFunction<C, D>,
    mixinE: UnaryFunction<D, E>,
    mixinF: UnaryFunction<E, F>,
    mixinG: UnaryFunction<F, G>,
  ): G
  <T extends Constructor, A, B, C, D, E, F, G, H>(
    superclass: T,
    mixin: UnaryFunction<T, A>,
    mixinB: UnaryFunction<A, B>,
    mixinC: UnaryFunction<B, C>,
    mixinD: UnaryFunction<C, D>,
    mixinE: UnaryFunction<D, E>,
    mixinF: UnaryFunction<E, F>,
    mixinG: UnaryFunction<F, G>,
    mixinH: UnaryFunction<G, H>,
  ): H
  <T extends Constructor, A, B, C, D, E, F, G, H, I>(
    superclass: T,
    mixin: UnaryFunction<T, A>,
    mixinB: UnaryFunction<A, B>,
    mixinC: UnaryFunction<B, C>,
    mixinD: UnaryFunction<C, D>,
    mixinE: UnaryFunction<D, E>,
    mixinF: UnaryFunction<E, F>,
    mixinG: UnaryFunction<F, G>,
    mixinH: UnaryFunction<G, H>,
    mixinI: UnaryFunction<H, I>,
  ): I
}

export const compose: Compose = <
  T extends Constructor,
  Mixins extends UnaryFunction<T, T>,
>(
  superclass: T,
  ...mixins: Mixins[]
) => {
  return mixins.reduce((acc, mixin) => mixin(acc), superclass)
}
