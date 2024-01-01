import './page.css'
import {ThemeProvider} from "@/providers";
import {TopNav} from "@/components/presentational/Layout";
import {Listings} from "@/components/presentational";

export default function Home() {
  return (
    <ThemeProvider>
      <div className="container">
        <TopNav />
        <main className="main">
          <Listings/>
        </main>
      </div>
    </ThemeProvider>
  )
}
