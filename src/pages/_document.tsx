import { Html, Head, Main, NextScript} from 'next/document';
/* import { ColorSchemeScript } from '@mantine/core'; */
import { Navbar } from '@/components/header/Navbar';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/*     <ColorSchemeScript /> */}
        
      </Head>
      <title> Event</title>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
