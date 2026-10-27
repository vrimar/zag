import { addDomEvent, getDocument, isComposingEvent } from "@zag-js/dom-query"

export function trackEscapeKeydown(node: HTMLElement, fn?: (event: KeyboardEvent) => void) {
  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key !== "Escape") return
    if (isComposingEvent(event)) return
    fn?.(event)
  }

  return addDomEvent(getDocument(node), "keydown", handleKeyDown, { capture: true })
}
