import React from 'react';
import { useRouter } from 'next/dist/client/router';

export interface PostDetailPageProps {
}

export default function App (props: PostDetailPageProps) {
  
    const router = useRouter();
  
  return (
    <div>
      <h1>Post Detail Page</h1>
      
      <p>Query: { JSON.stringify(router.query)}</p>
    </div>
  );
}
