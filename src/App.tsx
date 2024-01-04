import React, { useState } from "react"
import Header from "./components/Header"
import Releases from "./components/Releases"
import ReleaseDetail from "./components/ReleaseDetail"
import { Release as ReleaseType } from "@tyleretters/discography"
import Footer from "./components/Footer"

function App() {
  const [openRelease, setOpenRelease] = useState<ReleaseType>()

  function openReleaseDetails(release: ReleaseType){
    window.scrollTo(0, 0)
    setOpenRelease(release)
  }

  return (
    <div className="app">
      <Header />
      {openRelease &&
        <ReleaseDetail
          release={openRelease}
          handleClose={() => setOpenRelease(undefined)}
        />
      }
      <Releases
        isReleaseOpen={!!openRelease}
        handleOpen={openReleaseDetails}
      />
      <Footer />
    </div>
  );
}

export default App
