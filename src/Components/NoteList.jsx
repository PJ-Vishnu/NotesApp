import axios from "axios"
import { useEffect, useState } from "react"
import { MdDeleteOutline, MdNoteAdd } from "react-icons/md";
import {GrView} from "react-icons/gr";
import { Link, useParams } from "react-router-dom";

function NoteList(){

    const [data,setData]=useState([])
    const [loading,setLoading]=useState(true)
    useEffect(()=>{
        fetchapi()
    },[])
    const {id}=useParams()
    const fetchapi= async ()=>{
        try {
            const response= await axios.get('http://localhost:4000/notes/allnotes')
            setData(response.data.result)
            console.log(data)
        } catch (error) {
            alert('Error Fetching Notes from DB')
            console.log(error);
        } finally {
            setLoading(false);
        }
    }

    const deletenote = async (id) => {
        try {
            await axios.delete(`http://localhost:4000/notes/deletenote/${id}`);
            setData(data.filter((items) => items._id !== id));
            console.log('dfghjkl');
        } catch (error) {
            alert( "Error deleting Note");
        }
    };

    return (
        <div>
            <div className="w- full bg-green-400 text-center text-lg">
                <h1>Notes App By PJ Vishnu</h1>
            </div>
            <div className="w-full">
                <table className="w-full">
                    <tr>
                        <th>
                            id
                        </th>
                        <th>
                            Title
                        </th>
                        <th>
                            View/Delete
                        </th>
                    </tr>
                {loading ? (
                        <tr>
                            <td colSpan="6" className="text-center">Loading...</td>
                        </tr>
                    ) : (data.map((item)=>{
                    return(
                            <tr key={item} >
                                <td className="w-[600px]">{item._id}</td>
                                <td className="w-[400px]">{item.Title}</td>
                                <td className="flex justify-center gap-1">
                                    <Link to={`viewnote/${item._id}`}><GrView size={20}/></Link>
                                    <MdDeleteOutline size={20} onClick={()=>{deletenote(item._id)}}/></td>
                            </tr>
                    )
                }))}
                </table>
                <Link to={"newnote"}>
                <div className="fixed right-9 bottom-10">
                    <MdNoteAdd size={50}/>
                </div>
                </Link>
            </div>
        </div>
    )
}
export default NoteList