import { useEffect } from 'react';

/**
 * Adds a listener to a document event when the component is mounted and remove it when the component is unmounted.
 *
 * The parameters are the same as `document.addEventListener`.
 * @param type
 * @param listener
 * @param options
 */
export function useDocumentEvent<K extends keyof DocumentEventMap>(
  type: K,
  listener: (this: Document, ev: DocumentEventMap[K]) => unknown,
  options?: boolean | AddEventListenerOptions
) {
  useEffect(() => {
    document.addEventListener(type, listener, options);
    return () => {
      document.removeEventListener(type, listener);
    };
  }, [type, listener, options]);
}
