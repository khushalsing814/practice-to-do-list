import React, { useCallback, useEffect, useState } from 'react'

function Todo_list() {
    const [apiData,setApidata] = useState(null);

    const fetchapi = useCallback(async()=>{
        try{
            const result = await fetch('http://localhost:5000/users');
            const data = await result.json();
            console.log(data)
            setApidata(data)
        }catch(err){
              console.log(err)
        }
    },[apiData])

    useEffect(()=>{
        fetchapi();
    },[])
    return (
        <>
            <div className='container'>
                <div className='button_parent'>
                    <input type='search' placeholder='full name'/>
                    <button className='btn btn-success'>add</button>
                </div>
                <table className="table table-striped ">
                    <thead>
                        <tr>
                            <th scope="col">S.no</th>
                            <th scope="col">Full Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Manu</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Todo_list



