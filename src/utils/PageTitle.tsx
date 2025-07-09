import {useEffect} from 'react';
import {useLocation} from 'react-router-dom';

const PageTitle = ({title}: { title: string }) => {
    const location = useLocation();

    useEffect(() => {
        if (location.pathname === '/home' || location.pathname === '/')
            document.title = 'Taratonic';
        else
            document.title = 'Taratonic | ' + title;

    }, [location, title]);

    return null;
};

export default PageTitle;