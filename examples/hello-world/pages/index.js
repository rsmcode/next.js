import Link from 'next/link'
import React, { useEffect } from "react";
import Head from 'next/head'

export default function IndexPage() {
  const href = "https://www.google.com";
  return (
    <>
      <Head>
        {/* Redirects with meta refresh if no JavaScript support */}
        <noscript>
          <meta httpEquiv="refresh" content={`0;url=${href}`} />
        </noscript>
        <link rel="canonical" href={href} />

      </Head>
      {/* Provides a redirect link if no meta refresh support */}
      <p>
        Redirecting to <a href={href}>{href}</a>&hellip;
        </p>
    </>
  )
}
