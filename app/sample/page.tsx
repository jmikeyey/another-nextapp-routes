"use client";
import { useTheme } from "@/components/theme-provider";
import React from "react";

const ClientRoute = () => {
  const theme = useTheme();
  return (
    <div>
      <h1 style={{ color: theme.colors.secondary }}>Client Route</h1>
    </div>
  );
};

export default ClientRoute;

("use client");
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div>
      <h2>Something went wrong!</h2>
      <button onClick={reset}>Try again</button>
    </div>
  );
}
