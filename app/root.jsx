import { Outlet, LiveReload, Link } from "remix"

export default function App(){
  return (
   <Document>
     <Outlet/>
   </Document>
  )
}


function Document({children, title}) {

  return (
    <html lang='en'>
      <head>
        <title>{title}</title>
      </head>
      <body>
        {children}
        {process.env.NODE_ENV === 'development' && <LiveReload/>}
      </body>
    </html>
  )

}

function Layout({children}) {
  return (
    <>
    <nav className="navbar">
      <Link to="/" className="logo">Remix</Link>
      </nav>
    </>
  )
  }