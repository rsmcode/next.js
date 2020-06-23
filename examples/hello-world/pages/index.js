import { useRouter } from 'next/router'

function RedirectPage({ ctx }) {
  const router = useRouter()
  // Make sure we're in the browser
  if (typeof window !== 'undefined') {
    router.push('auth0.samples.Auth0Sample://csat99.auth0.com/ios/auth0.samples.Auth0Sample/callback');
    return;
  }
}

RedirectPage.getInitialProps = ctx => {
  // We check for ctx.res to make sure we're on the server.
  if (ctx.res) {
    ctx.res.writeHead(302, { Location: 'auth0.samples.Auth0Sample://csat99.auth0.com/ios/auth0.samples.Auth0Sample/callback' });
    ctx.res.end();
  }
  return {};
}

export default RedirectPage