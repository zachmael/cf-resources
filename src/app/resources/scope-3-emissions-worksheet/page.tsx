import { Metadata } from 'next';
import Scope3WorksheetClient from './Scope3WorksheetClient';

export const metadata: Metadata = {
  title: 'Scope 3 Emissions Measurement Worksheet | Council Fire',
  description: 'A step-by-step worksheet to help organizations identify, categorize, and begin measuring their Scope 3 greenhouse gas emissions across all 15 categories.',
};

export default function Page() {
  return <Scope3WorksheetClient />;
}
