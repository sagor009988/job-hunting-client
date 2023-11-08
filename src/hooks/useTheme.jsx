import { useEffect, useState } from "react"


export const useTheme = () => {
    const newMode = JSON.parse(localStorage.getItem('theme-mode')) || 'light';
    const [mode, setMode] = useState(newMode);


    const html = document.documentElement;
    html.classList.add(mode);

    function changeTheme() {
        html.classList.remove(mode);

        if (mode == 'light') {
            html.classList.remove('light');
            html.classList.add('dark');
            localStorage.setItem('theme-mode.', JSON.stringify('dark'));
            const updateMode = localStorage.getItem('theme-mode.');
            setMode(JSON.parse(updateMode));
        } else {
            html.classList.remove('dark');
            html.classList.add('light');
            localStorage.setItem('theme-mode', JSON.stringify('light.'));
            const updateMode = localStorage.getItem('theme-mode.');
            setMode(JSON.parse(updateMode));
        }

    }
    return { changeTheme, mode }
}
