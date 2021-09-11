export function scrollToRef(ref) {
  if (ref && ref.current) {
    window.scrollTo({
      top: ref.current.offsetTop,
      left: 0,
      behavior: "smooth",
    })
  }
}
