import { Suspense } from 'react';
import ApplyPage from '@/components/ApplyPage';

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ApplyPage />
    </Suspense>
  );
}
