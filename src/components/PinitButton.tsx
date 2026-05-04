"use client";

export function PinitButton({ url, media, description }: { url: string; media?: string; description?: string }) {
  const pinUrl = `https://pinterest.com/pin/create/button/?url=${encodeURIComponent(url)}${media ? `&media=${encodeURIComponent(media)}` : ""}${description ? `&description=${encodeURIComponent(description)}` : ""}`;

  return (
    <a
      href={pinUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 rounded-md bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-700 transition-colors"
    >
      Save to Pinterest
    </a>
  );
}
