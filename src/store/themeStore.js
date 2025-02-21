import { create } from 'zustand';

export const useThemeStore = create(set => ({
    theme: 'dark', // Default theme
    colors: {
        dark: {
            backgroundColor: 'black',
            textColor: 'white',
            lineColor: '#2962FF',
            areaTopColor: '#2962FF',
            areaBottomColor: 'rgba(41, 98, 255, 0.28)',
        },
        light: {
            backgroundColor: 'white',
            textColor: 'black',
            lineColor: '#FF5733',
            areaTopColor: '#FF5733',
            areaBottomColor: 'rgba(255, 87, 51, 0.28)',
        },
    },
    toggleTheme: () => set(state => ({
        theme: state.theme === 'dark' ? 'light' : 'dark'
    }))
}));
