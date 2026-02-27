'use client';

import { ReactElement, Children, isValidElement, Fragment } from 'react';
import InlineCTA from './InlineCTA';

/**
 * Wraps rendered MDX prose and injects inline CTAs after every N headings (h2/h3).
 * This gives a natural mid-article CTA placement without modifying content files.
 */
export default function ProseWithCTAs({
  rendered,
  topic,
  section,
  interval = 3,
}: {
  rendered: ReactElement;
  topic: string;
  section?: string;
  interval?: number;
}) {
  // Flatten children from the rendered MDX
  const children = Children.toArray(
    isValidElement(rendered) && (rendered.props as Record<string, unknown>)?.children
      ? (rendered.props as Record<string, unknown>).children as React.ReactNode
      : [rendered]
  );

  let headingCount = 0;
  let ctaInserted = false;
  const result: React.ReactNode[] = [];

  for (let i = 0; i < children.length; i++) {
    const child = children[i];
    result.push(child);

    // Check if this child is an h2 or h3 element
    if (isValidElement(child)) {
      const type = child.type;
      if (type === 'h2' || type === 'h3') {
        headingCount++;
      }

      // Insert CTA after the paragraph following the Nth heading
      // (so it appears between sections, not right after a heading)
      if (headingCount >= interval && !ctaInserted) {
        // Look ahead — if next element is a paragraph or content block, insert after it
        const next = children[i + 1];
        if (next && isValidElement(next) && (next.type === 'p' || next.type === 'ul' || next.type === 'ol')) {
          result.push(next);
          i++; // skip the next element since we already added it
        }
        result.push(
          <div key="inline-cta-mid" className="not-prose">
            <InlineCTA topic={topic} section={section} />
          </div>
        );
        ctaInserted = true;
      }
    }
  }

  // If article was too short for a mid-article CTA, add one at the end
  if (!ctaInserted) {
    result.push(
      <div key="inline-cta-end" className="not-prose">
        <InlineCTA topic={topic} section={section} />
      </div>
    );
  }

  return <>{result}</>;
}
