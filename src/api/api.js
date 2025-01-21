
export const fetchLogements = async ()=> {

    try{ const response= await fetch('/data/logements.json')
        if (!response.ok){
            throw new Error
    }
    const data = await response.json()
    return data

    }catch(error){
        console.error(error)
        throw error
    }
}