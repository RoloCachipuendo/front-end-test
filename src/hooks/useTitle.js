import {useEffect} from "react"

export default function useTitle({title = 'Inicio'}) {
    

    useEffect(()=> {
        document.title= `${title} | RECA`;

    }, [title])
   
}