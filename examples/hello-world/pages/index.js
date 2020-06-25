import { useRouter } from 'next/router'

function RedirectPage({ ctx }) {
  const router = useRouter()
  // Make sure we're in the browser
  if (typeof window !== 'undefined') {
    router.push('saltuk.alakus.authsample://csat99.auth0.com/ios/saltuk.alakus.authsample/callback');
    return;
  }
}

RedirectPage.getInitialProps = ctx => {
  // We check for ctx.res to make sure we're on the server.
  if (ctx.res) {
    ctx.res.writeHead(302, { Location: 'saltuk.alakus.authsample://csat99.auth0.com/ios/saltuk.alakus.authsample/callback' });
    ctx.res.end('Hello World\n');
  }
  return {};
}

export default RedirectPage