// Works both with and without "use client"
"use client";

if (process.env.NEXT_RUNTIME === "nodejs") {
  // if (typeof window === "undefined") {
  const { setupServer } = await import("msw/node");
  setupServer().listen();
} else {
  const { setupWorker } = await import("msw/browser");
  setupWorker().start();
}

export default function Home() {
  return <div>hello</div>;
}
