```javascript
// app/page.js

export default function Home() {
  return (
    <div>Hello from the App Directory</div>
  );
}

// app/layout.js
import './globals.css'
import { ErrorBoundary } from 'next/error-boundary'

function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ErrorBoundary>{children}</ErrorBoundary>
      </body>
    </html>
  )
}

export default RootLayout
```