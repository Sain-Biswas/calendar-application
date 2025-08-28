/* eslint-disable @next/next/no-sync-scripts */

export default function ReactScanIntegration() {
  if (process.env.NODE_ENV === "production") return null;

  return (
    // eslint-disable-next-line @next/next/no-head-element
    <head>
      <script
        crossOrigin="anonymous"
        src="//unpkg.com/react-scan/dist/auto.global.js"
      />
    </head>
  );
}
