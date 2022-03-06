import React from "react";

export const FileSystem = ({ data }) => {
    const [expand, setExpand] = React.useState(false);
    if (data.isFolder) { 
        return (
            <>
                <p style={{cursor:"pointer",color:"royalblue"}} onClick={()=>setExpand(!expand)}>{data.name}</p>
              { expand ? <div>
                    {data.items.map((el) => {
                        return (
                            <>
                            <div style={{marginLeft:"2em",padding:"0.51em"}} ><FileSystem  data={el}/></div>
                            </>
                        )
                    })}
                </div>:null}
            </>
        );
    }
    return (
        <div>{data.name}</div>
    )
}