// index.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import './index.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import PageTitle from "./utils/PageTitle";
import {routes} from './utils/routesConfig';

const root = ReactDOM.createRoot(document.getElementById("root")!);

root.render(
    <React.StrictMode>
        <BrowserRouter>
            <div className="min-h-screen flex flex-col bg-gradient-to-r from-[#140925] to-[#371B58]">
                <Header/>
                <main className="flex-grow">
                    <Routes>
                        {routes.map(({path, element, title}) => (
                            <Route
                                key={path}
                                path={path}
                                element={
                                    <>
                                        {title && <PageTitle title={title}/>}
                                        {element}
                                    </>
                                }
                            />
                        ))}
                    </Routes>
                </main>
                <Footer/>
            </div>
        </BrowserRouter>
    </React.StrictMode>
);
