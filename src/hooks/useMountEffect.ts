import { useEffect, EffectCallback } from "react"

// This hooks helps to avoid to put in all useEffect (implemented as onMount)
// the comment to ignore react-hooks/exhaustive-deps
const useMountEffect = (fun: EffectCallback) => useEffect(fun, [])
export { useMountEffect }
