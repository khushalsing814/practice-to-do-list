import React, { useCallback, useEffect, useState } from 'react'

function Todo_list() {
    const [apiData,setApidata] = useState(null);

    const fetchapi = useCallback(async()=>{
        try{
            const result = await fetch('http://localhost:5000/users');
            const data = await result.json();
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
  <table class="table table-striped">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
  </>
  )
}

export default Todo_list



