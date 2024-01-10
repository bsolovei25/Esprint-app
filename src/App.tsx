import React, {useEffect, useRef, useState} from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './core/home/Home';
import Navigation from "./shared/components/navigation/Navigation";
import '././shared/styles/tailwind.css';
import TrendsSidebar from "./core/TrendsSidebar/TrendsSidebar";
import './App.scss'

function App() {
    const [contentHover, setContentHover] = useState(false);
    const trendsRef = useRef<HTMLDivElement | null>(null);
    const handleScrolling = (event : WheelEvent) => {
        if (trendsRef.current !== null) {
            if (!contentHover) {
                trendsRef.current.scrollTo({
                    top: trendsRef.current.scrollTop + event.deltaY,
                    behavior: "smooth",
                });
                //TODO make it smother!!!!
            }
        }
    };

    useEffect(() => {
        window.addEventListener("wheel", handleScrolling);

        return () => {
            window.removeEventListener("wheel", handleScrolling);
        };
    }, [contentHover]);

  return (
      <div className="flex main-page-layout flex justify-end h-screen flex-row bg-white relative">
        <BrowserRouter>
          <div className="navigation-module flex justify-end relative overflow-hidden h-screen basis-1/3">
            <Navigation></Navigation>
          </div>
            <div className="basis-1/2 overflow-y-auto h-full middle-section border-grey-background">
              <Routes>
                <Route path="/" element={<Navigate to="/home" />} />
                <Route path="/home" element={<Home />} />
              </Routes>
            </div>
            <div className="basis-1/3 overflow-y-auto h-full"
                 ref={trendsRef}
                 onMouseEnter={ () => { setContentHover(true) }}
                 onMouseLeave={ () => { setContentHover(false) }}
            >
                <TrendsSidebar></TrendsSidebar>
            </div>
        </BrowserRouter>
      </div>
  );
}

export default App;