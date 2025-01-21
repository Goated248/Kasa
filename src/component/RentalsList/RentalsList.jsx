import React, {useState, useEffect} from "react";
import RentalCard from "../RentalCard/RentalCard";
import { fetchLogements } from "../../api/api";
import './RentalsList.css'


const RentalsList = () => {
    const[rentals, setRentals]= useState([])
    const[loading, setLoading]= useState(true)
    const[error, setError]= useState(null)

    useEffect(()=>{
        const getRentals = async ()=> {
            try{
                const rentalsData = await fetchLogements()
                setRentals(rentalsData)
            }catch(err){
                setError("Error during data loading.")
            }finally{
            setLoading(false)
            }
        }
        getRentals()
    },[])

if(loading) return <p>Rentals are loading</p>
if(error) return <p>{error}</p>

return (
    <div className="rentals">
    <div className="rentals-image">
        <h1 className="rentals-title">Chez vous, partout et ailleurs</h1>
    </div>
    <div className="rentals-list">
        {rentals.map((rental)=>(
            <RentalCard key={rental.id} rental={rental}/>
        ))
        }
    </div>
</div>
)

} 
export default RentalsList