import React from 'react';

import Link from 'next/link';

function ScreenSaverIndexPage() {
  return (
    <main>
      <p>Choose yout color:</p>
      <ul >
        <li>
          <Link href="/exercises/01-screensaver/pink">
            Pink
          </Link>
        </li>
        <li>
          <Link href="/exercises/01-screensaver/lavender">
            Lavender
          </Link>
        </li>
        <li>
          <Link href="/exercises/01-screensaver/blue">
            blue
          </Link>
        </li>
        <li>
          <Link href="/exercises/01-screensaver/peachpuff">
            peachpuff
          </Link>
        </li>
      </ul>
    </main>
  );
}

export default ScreenSaverIndexPage;
