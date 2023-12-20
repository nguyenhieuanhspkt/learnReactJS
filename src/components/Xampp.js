import React from 'react'
import { useEffect, useState } from 'react';
import { Table, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';




import axios from 'axios';  


export default function Xampp() {
  const setData = (data) => {
    let { IDNguoiThucHien, Ten, Permission, Password,CreateBy } = data;
    localStorage.setItem('ID', IDNguoiThucHien); 
    localStorage.setItem('Ten', Ten);
    localStorage.setItem('Permission', Permission);
    localStorage.setItem('Password', Password)
    localStorage.setItem('CreateBy', CreateBy)


    
 }
  const [APIData, setAPIData] = useState([]);

  
  useEffect(() => {
    axios.get(`http://localhost:4000/api/tblnguoithuchien`)
        .then((response) => {
            console.log(response.data)
            setAPIData(response.data);
        })
        .catch((error) => {
          console.error('AxiosError:', error);
        });
    
  }, [])


  return (
    <div className = "read-container">
    <div className = "leftAlign">
    <Link to='/create'>
     <Button>Add new</Button>
     </Link>
     </div>



    <Table singleLine>
        <Table.Header>
            <Table.Row>
                <Table.HeaderCell>Tên</Table.HeaderCell>
                <Table.HeaderCell>Cấp quyền</Table.HeaderCell>
                <Table.HeaderCell>Password</Table.HeaderCell>
                <Table.HeaderCell>Mã MSC</Table.HeaderCell>
                <Table.HeaderCell>Update</Table.HeaderCell>
                <Table.HeaderCell>Delete</Table.HeaderCell>


            </Table.Row>
        </Table.Header>

        <Table.Body>
            {APIData.map((data)=>{
                return(
                    <Table.Row key={data.IDNguoiThucHien}>
                    <Table.Cell>
                        {data.Ten}
                    </Table.Cell>
                    <Table.Cell>
                        {data.Permission}
                    </Table.Cell>
                    <Table.Cell>
                        {data.Password}
                    </Table.Cell>
                    <Table.Cell>
                        {data.CreateBy}
                    </Table.Cell>
                    <Table.Cell>
                        <Link to='/updateXampp'>
                            <Button onClick={()=>setData(data)}>Update</Button>
                        </Link>
                    </Table.Cell>
                    <Table.Cell>
                            <Button >Delete</Button>
                    </Table.Cell>

                </Table.Row>                        
                )
            })}
        </Table.Body>
    </Table>
</div>

  )
}
