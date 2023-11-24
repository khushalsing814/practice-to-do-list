import React from 'react'

function Todo_list() {
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



