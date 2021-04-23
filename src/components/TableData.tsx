import React from 'react'
import { Table, Switch, Button } from 'antd';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrashAlt } from "@fortawesome/free-solid-svg-icons";

interface TableRow {
  key: number,
  name: string,
  age: number,
  short_desc: string,
  image: string,
  children?: TableRow[]
};


function getChildrenLength(row: TableRow, level: number): number {
  // console.log(row.children.length);

  if (!row.children || row.children.length <= 0) {
    return 0;
  }

  let maxLevel: number = 0;

  row.children.forEach((data) => {
    const currentLevel: number = getChildrenLength(data, level + 1);

    if (currentLevel > maxLevel) {
      maxLevel += currentLevel;
    }
  });

  return maxLevel + 1;
}

const columns = [
  {
    title: 'NAME',
    dataIndex: 'name',
    key: 'name',
    width: '25%',
    render: (name: string, row: TableRow) => {
      console.log(row);
      const levels: number = getChildrenLength(row, 1);

      return (<span><b style={{ fontSize: "15px" }}>{"-".repeat(levels)}</b> {name}</span>)
    }
  },
  {
    title: 'IMAGES',
    dataIndex: 'image',
    key: 'image',
    width: '20%',
    render: (url: string) => <img alt="img" src={url} />
  },
  {
    title: 'SHORT DESCRIPTION',
    dataIndex: 'short_desc',
    width: '30%',
    key: 'short_desc',
  },
  {
    title: 'PUBLISHED',
    dataIndex: 'published',
    width: '10%',
    key: 'published',
    render: () => (
      <Switch style={{ color: "green" }} defaultChecked />
    )
  },
  {
    title: 'ACTION',
    dataIndex: 'action',
    width: '15%',
    key: 'action',
    render: () => (
      <>
        <Button type="link" icon={<FontAwesomeIcon style={{ fontSize: "22px", color: "#979595" }} icon={faEdit} />} size="large">
        </Button>

        <Button type="link" icon={<FontAwesomeIcon style={{ fontSize: "22px", color: "#979595" }} icon={faTrashAlt} />} size="large">
        </Button>
      </>
    ),
  },
];

const data: TableRow[] = [
  {
    key: 1,
    name: 'Phone',
    age: 60,
    short_desc: 'New York No. 1 Lake Park',
    image: "https://source.unsplash.com/mP4sfCCoTrI/50x50",
    children: [
      {
        key: 11,
        name: 'Iphone',
        age: 42,
        short_desc: 'New York No. 2 Lake Park',
        image: "https://source.unsplash.com/2yIcl0B1LOw/50x50",
        children: [
          {
            key: 111,
            name: 'Iphone 12 pro',
            age: 25,
            short_desc: 'London No. 3 Lake Park',
            image: "https://source.unsplash.com/XSlHJklgSe8/50x50",
            children: [
              {
                key: 22345,
                name: 'Iphone',
                age: 32,
                short_desc: 'Sidney No. 1 Lake Park',
                image: "https://source.unsplash.com/collection/10733944/50x50.2",

              },
            ]
          },
          {
            key: 112,
            name: 'Iphone 12',
            age: 18,
            short_desc: 'London No. 4 Lake Park',
            image: "https://source.unsplash.com/xsGxhtAsfSA/50x50",
            children: [
              {
                key: 21111,
                name: 'Iphone',
                age: 32,
                short_desc: 'Sidney No. 1 Lake Park',
                image: "https://source.unsplash.com/collection/10733944/50x50.2",

              },
            ]
          },
        ],
      },
      {
        key: 12,
        name: 'Samsung',
        age: 30,
        short_desc: 'New York No. 3 Lake Park',
        image: "https://source.unsplash.com/xXEMNo_nFjc/50x50",


      },
      {
        key: 13,
        name: 'Huawei',
        age: 16,
        short_desc: 'New York No. 3 Lake Park',
        image: "https://source.unsplash.com/cv4bk-aedJE/50x50",
        children: [
          {
            key: 2,
            name: 'Galaxy',
            age: 32,
            short_desc: 'Sidney No. 1 Lake Park',
            image: "https://source.unsplash.com/collection/10733944/50x50.2",

          },
        ]
      },
    ],
  },
  {
    key: 4,
    name: 'Shoes',
    age: 32,
    short_desc: 'Sidney No. 1 Lake Park',
    image: "https://source.unsplash.com/collection/10733944/50x50",
    children: [
      {
        key: 4311,
        name: 'Puma',
        age: 25,
        short_desc: 'London No. 3 Lake Park',
        image: "https://source.unsplash.com/collection/10733944/50x50.1",

      },
      {
        key: 4312,
        name: 'Adidas',
        age: 18,
        short_desc: 'London No. 4 Lake Park',
        image: "https://source.unsplash.com/collection/10733944/50x51",

      },
    ],
  },
];


export default function TableData() {

  return (
    <>
      <Table
        columns={columns}
        dataSource={data}
      />
    </>
  );
}
