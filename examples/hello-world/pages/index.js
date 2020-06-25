import { useRouter } from 'next/router'

function RedirectPage({ ctx }) {
  const router = useRouter()
}

RedirectPage.getInitialProps = ctx => {
  // We check for ctx.res to make sure we're on the server.
  if (ctx.res) {
    const body = '<p>Found. Redirecting to <a href="saltuk.alakus.authsample://csat99.auth0.com/ios/saltuk.alakus.authsample/callback?code=4ZUDLiLdzb19AOmN&amp;state=s6xZUpXb_ufxsk0SMe1gZ1lVMlG37OlQKy7xgngaFfE">saltuk.alakus.authsample://csat99.auth0.com/ios/saltuk.alakus.authsample/callback?code=4ZUDLiLdzb19AOmN&amp;state=s6xZUpXb_ufxsk0SMe1gZ1lVMlG37OlQKy7xgngaFfE</a></p>';
    ctx.res.writeHead(302, {
      'Vary': 'Accept',
      'Access-Control-Allow-Origin': 'https://next-js-hello.vercel.app',
      'Content-Length': Buffer.byteLength(body),
      'Content-Type': 'text/html; charset=utf-8',
      Location: 'saltuk.alakus.authsample://csat99.auth0.com/ios/saltuk.alakus.authsample/callback?code=4ZUDLiLdzb19AOmN&amp;state=s6xZUpXb_ufxsk0SMe1gZ1lVMlG37OlQKy7xgngaFfE'
    });
    ctx.res.end(body);
  }
  return {};
}

export default RedirectPage