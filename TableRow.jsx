import React from "react";
function TableRow({number,index})
{
    return(
        <div className="text-xl text-indigo-700 p-1">
            {number} x {index}= {number*index}
        </div>
    );
}
export default TableRow