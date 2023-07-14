import * as Sentry from "@sentry/nextjs";

const SENTRY_DSN = process.env.SENTRY_DSN || process.env.NEXT_PUBLIC_SENTRY_DSN;

Sentry.init({
  dsn:
    SENTRY_DSN ||
    "https://493b7f55f19e4770bed3fe270ebdada7@o4505526033514496.ingest.sentry.io/4505526036987904",
  tracesSampleRate: 0.2,
});
