import { FC, PropsWithChildren } from "react"

import { Navbar } from "./Navbar"
import { Footer } from "./Footer"

export const Layout: FC<PropsWithChildren> = ({children}) => (
  <>
    <Navbar />
    <main className="max-w-screen-lg flex flex-wrap mx-auto mt-10">
      {children}
    </main>
    <Footer />
  </>
)