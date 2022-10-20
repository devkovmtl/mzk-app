import { Routes, Route } from "react-router-dom";

import { Discover } from "./pages";
import { Sidebar, Searchbar, TopPlay, MusicPlayer } from "./components";

const App = () => {
  return (
    <div className="relative flex">
      {/* Sidebar */}
      <Sidebar />

      <div className="flex-1 flex flex-col bg-gradient-to-br from-black to-[#121286]">
        {/* SearchBar */}
        <Searchbar />

        <div className="px-6 h-[calc(100vh-72px)] overflow-y-scroll hide-scrollbar flex xl:flex-row flex-col-reverse">
          <div className="flex-1 h-fit pb-40">
            {/* Routes */}
            <Routes>
              <Route path="/" element={<Discover />} />
            </Routes>
          </div>
          <div className="xl:sticky relative top-0 h-fit">
            <TopPlay />
          </div>
        </div>
      </div>
      {/* Active Song */}
      <div className="absolute h-28 bottom-0 left-0 right-0 flex animate-slideup bg-gradient-to-br from-white/10 to-[#2a2a80] backdrop-blur-lg rounded-t-3xl">
        {/* MusicPlayer */}
        <MusicPlayer />
      </div>
    </div>
  );
};

export default App;
