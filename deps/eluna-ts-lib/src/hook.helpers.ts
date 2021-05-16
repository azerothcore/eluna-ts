export type IRegisterHook<T> = (
  hook: T,
  /** the number of times the function will be called, 0 means "always call this function" */
  shots?: number
) => any;

export type IRegisterHookWithId<T> = (
  id: number,
  hook: T,
  /** the number of times the function will be called, 0 means "always call this function" */
  shots?: number,
) => any;
