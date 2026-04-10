// Stub useActor hook for static site — no live backend calls are made.
// Pages guard all actor calls with `if (!actor) return`, so null is safe here.

export function useActor() {
  return {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    actor: null as any,
    isFetching: false,
  };
}
