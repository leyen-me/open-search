let timeout: NodeJS.Timeout | null;
export function Debounce(
  func: any,
  param: any,
  wait: number = 300,
  immediate: boolean = false
) {
  if (timeout !== null) clearTimeout(timeout);
  if (immediate) {
    let callNow = !timeout;
    timeout = setTimeout(function () {
      timeout = null;
    }, wait);
    if (callNow) typeof func === "function" && func(param);
  } else {
    timeout = setTimeout(function () {
      typeof func === "function" && func(param);
    }, wait);
  }
}
