import React, { useCallback } from "react";
import {AiOutlineCaretUp} from "react-icons/ai"

export const Products = () => {
    const [data, setData] = React.useState([]);
    const [page, setPage] = React.useState(1);
    const divRef = React.useRef();
    React.useEffect(() => {
        getData();
    }, [page]);
    function getData() {
        fetch(
            `https://api.pexels.com/v1/search?query=bikes&page=${page}&per_page=25`,
            {
                method: "GET",
                headers: {
                    Authorization:
                        "563492ad6f9170000100000153773b5c95d14d0291140d39b7064f0e",
                },
            }
        )
            .then((response) => response.json())
            .then((response) => {
                setData([...data, ...response.photos]);
                console.log(response)
            });
    }
    const handleScroll = () => {
        if (divRef.current.scrollTop + divRef.current.clientHeight > divRef.current.scrollHeight-5) {
            setPage((page)=>page+1)
         }
    }
    const scrollUp = () => {
        console.log('here')
        divRef.current.scrollTop=0
    }
    return (
        <div>
            <h1>    Products page</h1>
            <div ref={divRef} className="mDiv" onScroll={handleScroll} style={{display:"grid",gridTemplateColumns:"repeat(4,24%)",height:"88vh",overflowY:'scroll'}}>
                {
                    data.map((item) => {
                        return (<div key={item.src.large2x} className="prodDiv">
                            <img src={item.src.large2x} alt={item.src.large2x} />
                            <p>{item.alt}</p>
                        </div>)
                    })
                }</div>
            <div style={{ position: "fixed", bottom: "50px", right: '50px' }}><AiOutlineCaretUp onClick={scrollUp} style={{width: "50px", height:"50px"}}></AiOutlineCaretUp></div>
        </div>
    )
}