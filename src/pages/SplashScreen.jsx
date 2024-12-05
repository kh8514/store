import {createContext, useContext, useEffect, useState} from "react";

const SplashScreenContext = createContext(undefined);

const SplashScreenProvider = ({children}) => {
    const [count, setCount] = useState(0);
    const visible = count > 0;

    useEffect(() => {
        // Show SplashScreen
        if (visible) {
            document.body.classList.remove("page-loading")

            return () => {
                document.body.classList.add("page-loading")
            }
        }

        // Hide SplashScreen
        let timeout;
        if (!visible) {
            timeout = window.setTimeout(() => {
                document.body.classList.add("page-loading")
            }, 3000)
        }

        return () => {
            clearTimeout(timeout)
        }
    }, [visible]);

    return (
        <SplashScreenProvider.Provider value={setCount}>
            {children}
        </SplashScreenProvider.Provider>
    )
}

const LayoutSplashScreen = ({visible = true}) => {
    const setCount = useContext(SplashScreenContext);

    useEffect(() => {
        if(!visible) {
            return
        }

        if(setCount) {
            setCount((prev) => prev + 1);
        }

        return () => {
            if(setCount) {
                setCount((prev) => prev - 1);
            }
        }
    }, [setCount, visible]);

    return null
}

export { SplashScreenProvider, LayoutSplashScreen}