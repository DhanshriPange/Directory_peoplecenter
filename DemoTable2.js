import React from 'react'
import { Table } from 'antd';
import 'antd/dist/antd.css';


const columns = [
  {
    title: 'Full Name',
    width: 100,
    dataIndex: 'name',
    key: 'name',
    fixed: 'left',
  },
  {
    title: 'Id',
    width: 100,
    dataIndex: 'Id',
    key: 'Id',
    fixed: 'left',
  },
  {
    title: 'Employee Name',
    dataIndex: 'address',
    key: '1',
    width: 150,
  },
  {
    title: 'Department',
    dataIndex: 'address',
    key: '2',
    width: 150,
  },
  {
    title: 'Designation',
    dataIndex: 'address',
    key: '3',
    width: 150,
  },
  {
    title: 'Manager',
    dataIndex: 'address',
    key: '4',
    width: 150,
  },
  {
    title: 'Location',
    dataIndex: 'address',
    key: '5',
    width: 150,
  },
  {
    title: 'Action',
    key: 'operation',
    fixed: 'right',
    width: 100,
    render: () => <a href>action</a>,
  },
];

const data = [];
for (let i = 0; i < 50; i++) {
  data.push({
    key: i,
    name: `Edrward ${i}`,
    Id: 32,
    address: `London Park no. ${i}`,
  });
}

const DemoTable2 = () => {
    return (
        <div>
         
  <Table columns={columns} dataSource={data} scroll={{ x: 1500, y: 300 }} />,
 

        </div>
    )
}

export default DemoTable2;
