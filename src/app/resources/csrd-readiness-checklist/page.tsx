import { Metadata } from 'next';
import CSRDChecklistClient from './CSRDChecklistClient';

export const metadata: Metadata = {
  title: 'CSRD Readiness Checklist — 20 Steps to Compliance | Council Fire',
  description: 'A comprehensive 20-item checklist to assess your organization\'s readiness for the EU Corporate Sustainability Reporting Directive (CSRD).',
};

export default function Page() {
  return <CSRDChecklistClient />;
}
