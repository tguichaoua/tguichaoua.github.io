import { useCallback, useEffect, useRef } from 'react';

import './confetti.css';

// =============================================================================

export interface ConfettiProps extends BurstOptions {
  /** The event name that will trigger the confettis. Default is "x-confetti" */
  eventName?: string;
}

export interface BurstOptions {
  /** The amount of confetti to spawn. */
  amount?: number;
  /** The string to use for the confetti. */
  content?: string | readonly string[] | (() => string);
}

const DEFAULT_EVENT_NAME = 'x-confetti';

const DEFAULT_BURST_OPTIONS: Required<BurstOptions> = {
  amount: 50,
  content: '🎉',
};

export function Confetti(props: ConfettiProps) {
  const { eventName, ...burstOptions } = {
    eventName: DEFAULT_EVENT_NAME,
    ...props,
  };

  const container = useRef<HTMLDivElement>(null);

  const doBurst = useCallback(
    (ev: Event) => {
      if (!container.current || !(ev instanceof ConfettiEvent)) return;
      const { amount, content } = {
        ...DEFAULT_BURST_OPTIONS,
        ...burstOptions,
        ...ev.detail,
      };

      const getContent = makeProvider(content);

      for (let i = 0; i < amount; i++) {
        const e = document.createElement('div');
        e.classList.add('confetti');
        e.style.setProperty('--x', String(Math.random() * 100) + 'vw');
        e.style.setProperty('--y', '-' + String(5 + Math.random() * 95) + 'vh');
        e.style.setProperty('--duration', String(1 + Math.random() * 2) + 's');
        e.innerHTML = getContent();
        e.addEventListener('animationend', function () {
          this.remove();
        });
        container.current.appendChild(e);
      }
    },
    [burstOptions]
  );

  useEffect(() => {
    document.addEventListener(eventName, doBurst);
    return () => {
      document.removeEventListener(eventName, doBurst);
    };
  }, [eventName, doBurst]);

  return <div ref={container} className="confetti-wrapper"></div>;
}

// =============================================================================

export class ConfettiEvent extends CustomEvent<BurstOptions> {
  /** Creates a `ConfettiEvent` with the default type name `x-confetti`. */
  constructor(options?: BurstOptions);
  constructor(type: string, options?: BurstOptions);
  constructor(type?: string | BurstOptions, options?: BurstOptions) {
    if (typeof type === 'string') {
      super(type, { detail: options });
    } else {
      super(DEFAULT_EVENT_NAME, { detail: type });
    }
  }
}

// =============================================================================

function makeProvider<T>(x: T | readonly T[] | (() => T)): () => T {
  if (x instanceof Function) {
    return x;
  } else if ((Array.isArray as (x: unknown) => x is readonly unknown[])(x)) {
    return () => x[Math.floor(Math.random() * x.length)];
  } else {
    return () => x;
  }
}
