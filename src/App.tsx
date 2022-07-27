import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { ChakraProvider, Input } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { Search } from "./pages/Search";
import { Details } from "./pages/Details";
import { GameProvider } from "./pages/Search/hooks";

function App() {
  const [search, setSearch] = React.useState("");
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };
  return (
    <div className="w-full h-full bg-slate-900 min-h-screen">
      <BrowserRouter>
        <ChakraProvider>
          <GameProvider>
            <div className="relative">
              <header className="fixed top-0 left-0 right-0 z-10 bg-slate-800 flex px-10 py-4 drop-shadow-xl">
                <nav className="flex">
                  <Link to="/">
                    <Button colorScheme="blue">All Games</Button>
                  </Link>
                  <div className="bg-slate-100 rounded-lg ml-10 w-[300px]">
                    <Input
                      value={search}
                      onChange={handleSearch}
                      variant="outline"
                      placeholder="Search by name"
                    />
                  </div>
                </nav>
              </header>
              <div className="w-full h-full p-10">
                <Routes>
                  <Route path="/" element={<Search search={search} />} />
                  <Route path="/details/:id" element={<Details />} />
                </Routes>
              </div>
            </div>
          </GameProvider>
        </ChakraProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
