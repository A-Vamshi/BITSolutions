"use client";
import Error from "next/error";

export default function GlobalError({ error }: { error: Error }) {

  return (
    <html>
      <body>
        
        {/* Your Error component here... */}
      </body>
    </html>
  );
}