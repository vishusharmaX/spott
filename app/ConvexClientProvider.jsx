"use client";
import { useAuth } from "@clerk/nextjs";
import { ConvexProvider, ConvexReactClient } from "convex/react";
import { ConvexProviderWithClerk } from "convex/react-clerk";
const convexUrl = process.env.NEXT_PUBLIC_CONVEX_URL;

if (!convexUrl) {
  throw new Error("NEXT_PUBLIC_CONVEX_URL environment variable is not set");
}

const convex = new ConvexReactClient(convexUrl);
export function ConvexClientProvider({ children }) {
  return (
    <ConvexProviderWithClerk useAuth={useAuth} client={convex}>
      {children}
    </ConvexProviderWithClerk>
  );
}
