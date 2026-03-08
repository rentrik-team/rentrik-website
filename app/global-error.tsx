"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            minHeight: "100vh",
            padding: "1rem",
            fontFamily: "system-ui, sans-serif",
          }}
        >
          <h1 style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>
            Something went wrong
          </h1>
          <p style={{ marginBottom: "1.5rem", color: "#666" }}>
            We encountered a critical error. Please try again.
          </p>
          <button
            onClick={reset}
            style={{
              padding: "0.75rem 1.5rem",
              backgroundColor: "#18181b",
              color: "white",
              border: "none",
              borderRadius: "9999px",
              cursor: "pointer",
              fontWeight: 500,
            }}
          >
            Try again
          </button>
          <p style={{ marginTop: "2rem" }}>
            <a
              href="https://rentrik.in"
              style={{
                fontSize: "0.875rem",
                color: "#71717a",
                textDecoration: "underline",
              }}
            >
              Return to home
            </a>
          </p>
        </div>
      </body>
    </html>
  );
}
