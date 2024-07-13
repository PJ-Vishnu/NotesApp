import axios from "axios"
import { useState } from "react"

function NewNote() {

    const [formData, setFormData] = useState({
        Title: '',
        Content: ''
    })

    const handleSubmit = async (e) => {
        try {
            let data = formData
            const response = await axios.post('http://localhost:4000/notes/newnote', data)
            alert(JSON.stringify(response.data  ))

        } catch (error) {

        }
        console.log(formData, 'formData');
    }

    const handleChangeEvent = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    return (
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
export default NewNote