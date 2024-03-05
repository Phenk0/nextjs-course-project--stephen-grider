"use client";

interface ErrorProps {
  error: Error;
  reset: () => void;
}
export default function ErrorPage({ error }: ErrorProps) {
  return <>{error.message}</>;
}
