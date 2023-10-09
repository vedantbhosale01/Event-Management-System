import { useEffect, useState } from 'react'
import Event from '../eventcard/Event'
import axios from 'axios'

const Feed = () => {

    const [events , setEvents] = useState([])

    useEffect(() => {
      
        const fetchposts = async () => {
            
            const res = await axios.get("http://localhost:4000/api/v1/allproducts")
            setEvents(res.data);
        }
        fetchposts()
    }, [])
    

    return (
        <div className="feed">
        <div className="ml-5 mr-5">
            {events.map((p) => (
                <Event key={p._id} post={p}/>
            )) 

            }
        </div>
        
        </div>
    )
}

export default Feed
