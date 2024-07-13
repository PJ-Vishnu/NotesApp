import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
function ViewNote(){

    const {id}=useParams()
    const [data,setData]=useState([])
    const [loading,setLoading]=useState(true)
    useEffect(()=>{
        fetchapi()
    },[id])
    const fetchapi= async ()=>{
        try {
            const response= await axios.get(`http://localhost:4000/notes/viewnote/${id}`)
            setFormData(response.data.notes)
            console.log(data)
        } catch (error) {
            alert('Error Fetching Notes from DB')
            console.log(error);
        } finally {
            setLoading(false);
        }
    }

    const [formData, setFormData] = useState({
        Title: '',
        Content: ''
    })

    const handleSubmit = async (e) => {
        try {
            let data = formData
            const response = await axios.put('http://localhost:4000/notes/newnote', data)
            alert(JSON.stringify(response.data  ))

        } catch (error) {

        }
        console.log(formData, 'formData');
    }

    const handleChangeEvent = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }
    return(
        <div>
            <div className="w- full bg-green-400 text-center text-lg">
                <h1>Notes App By PJ Vishnu</h1>
            </div>
            <div className="flex flex-col justify-center items-center gap-1">
                <div className="flex flex-col gap-1 w-1/4">
                    <b>Title</b>
                    <input type="text" name="Title" placeholder="Title" value={formData.Title} onChange={handleChangeEvent} className="border-2 border-black rounded-xl p-3" />
                </div>
                <div className="">
                    <label htmlFor="Content"></label>
                    <textarea name="Content" id="" cols="50" rows="10" placeholder="Content Here" value={formData.Content} onChange={handleChangeEvent} className="border-2 border-black rounded-xl p-3"></textarea>
                </div>
                <input type="button" value="Save" onClick={handleSubmit} className="bg-blue-950 text-white p-3 rounded-2xl"/>
            </div>
        </div>
    )
}
export default ViewNote