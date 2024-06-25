export default function Layout({ children }) {
  return (
    <html lang="en">
      <body>
        <h1>header</h1>
        {children}
        sidebar
      </body>
    </html>
  );
}
