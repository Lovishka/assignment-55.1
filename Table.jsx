import React ,{ useState }  from "react";
import TableRow from "./tableRow";

function Table()
{ 
const [num, UpdateNum] = useState(2);

   function newTable()
   {
    
    UpdateNum(num+1);
   }

    return(
        <div className="flex flex-col">
        <button  onClick={newTable} className="bg-indigo-700 text-white rounded-md text-xl px-2 py-1">
            Next
        </button>
         <TableRow number={num} index={1}></TableRow>
         <TableRow number={num} index={2}></TableRow>
         <TableRow number={num} index={3}></TableRow>
         <TableRow number={num} index={4}></TableRow>
        </div>

    );
}
export default Table;
