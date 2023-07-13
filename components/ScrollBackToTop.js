import React, { useState, useEffect } from 'react';
import Image from 'next/image'

const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Adicione um event listener para monitorar o scroll da página
        window.addEventListener('scroll', handleScroll);
        return () => {
            // Remova o event listener quando o componente for desmontado
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleScroll = () => {
        // Verifique a posição vertical da página
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        // Defina a visibilidade do botão com base na posição
        setIsVisible(scrollTop > 300);
    };

    const scrollToTop = () => {
        // Role a página para o topo
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // Adicione suavidade à rolagem
        });
    };

    return (
        <button
            className={`scroll-to-top-button ${isVisible ? 'visible' : ''}`}
            onClick={scrollToTop}
        >
            <Image src="/arrow-up.svg" alt='arrowup' width={80} height={80}/>
        </button>
    );
};

export default ScrollToTopButton;
