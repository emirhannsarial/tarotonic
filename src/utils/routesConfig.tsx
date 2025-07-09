//React Imports
import React from "react";

//Pages
import App from '../App';
import About from '../pages/About';
import Read from '../pages/Read';
import Blog from '../pages/Blog';
import NotFound from '../NotFound';
import TarotCardPage from '../pages/TarotCardPage';

export interface RouteItem {
    path: string;
    element: React.ReactNode;
    title?: string;
}

export const routes: RouteItem[] = [
    {path: '/', element: <App/>, title: 'Home'},
    {path: '/about', element: <About/>, title: 'About'},
    {path: '/read', element: <Read/>, title: 'Read'},
    {path: '/blog', element: <Blog/>, title: 'Blog'},
    {path: '/tarot-cards', element: <TarotCardPage/>, title: 'Tarot Cards'},
    {path: '*', element: <NotFound/>, title: '404 Not Found'},
];
