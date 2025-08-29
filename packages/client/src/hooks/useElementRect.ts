import { useEffect, useState } from 'react';

export function useElementRect(targetId: string) {
  const [rect, setRect] = useState<DOMRect | null>(null);

  useEffect(() => {
    const el = document.getElementById(targetId);
    if (!el) return;

    const update = () => {
      const r = el.getBoundingClientRect();
      setRect(r);
    };

    update();

    const ro = new ResizeObserver(update);
    ro.observe(el);
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update, { passive: true });

    return () => {
      ro.disconnect();
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, [targetId]);

  return rect;
}
