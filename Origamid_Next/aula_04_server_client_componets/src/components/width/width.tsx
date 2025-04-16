"use client"
import React from "react"

export default function Width() {
    const [width, setWidth] = React.useState(0)
    const [ativo, setAtivo] = React.useState(false)

    React.useEffect(() => {
        const handleresize = () => {
            setWidth(document.documentElement.clientWidth)
        }
        handleresize()
        window.addEventListener('resize', handleresize)

        return () => {
            window.addEventListener('resize', handleresize)
        }
    }, [])



    return (
        <>
            <h2 style={{color: ativo ? "#680" : "#b00"}}>Largura da Pagina: {width}</h2>
            <button onClick={() => {setAtivo((b) => !b)}}>Ativar</button>
        </>
    )
}