"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Preloader from "../components/PreLoader/PreLoader";

export default function PreloaderHandler({ children }) {
    const [loading, setLoading] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        setLoading(true);
        const timeout = setTimeout(() => {
            setLoading(false);
        }, 1000); // Preloader duration (500ms)

        return () => clearTimeout(timeout);
    }, [pathname]);

    return (
        <>
            {loading && <Preloader />}
            {!loading && children}
        </>
    );
}
