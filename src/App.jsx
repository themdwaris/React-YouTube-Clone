import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import { ContextProvider } from "./context/context";
import Feed from "./components/Feed";
import SearchResults from "./components/SearchResults";
import VideoDetails from "./components/VideoDetails";

const App = () => {
  return (
    <>
      <ContextProvider>
        <BrowserRouter>
          <div className="flex flex-col h-full">
            <Header />
          <Routes>
            <Route path="/" exact element={<Feed />} />
            <Route
              path="/searchResult/:searchQuery"
              element={<SearchResults />}
            />
            <Route path="/video/:id" element={<VideoDetails />} />
          </Routes>
          </div>
        </BrowserRouter>
      </ContextProvider>
    </>
  );
};

export default App;
