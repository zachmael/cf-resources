import { Metadata } from 'next';
import MaterialityClient from './MaterialityClient';

export const metadata: Metadata = {
  title: 'Double Materiality Assessment Template | Council Fire',
  description: 'A structured framework template for conducting a double materiality assessment covering both impact materiality and financial materiality under ESRS.',
};

export default function Page() {
  return <MaterialityClient />;
}
