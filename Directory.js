import React from 'react'
import { Card, Avatar } from 'antd';
import '../style.css';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
// import DemoTable2 from './DemoTable2';
//import { Link } from "react-router-dom";





const { Meta } = Card;

function Directory() {
  function click()
  {

  }
 
  return (



    <div className="container">

      <header>
        <nav>
          <ul><h1><b>People Center</b></h1></ul>
          <span><ul>Home</ul></span>
          <span><ul>About</ul></span>
          <span><ul>Contact</ul></span>

          <div className="search">
            <input type="text" name="" id="" placeholder="Search Here" />
            <button class="btn">search</button>
          </div>

          {/* <div> <button onClick={'/demotable2'}>go home</button> </div>  */}

        </nav>
      </header>

<main>
      <Card
        style={{ width: 300 }}
        cover={
          <img
            alt="example"
            src="../../directory-icon.png"
          />
        }
        actions={[
          <SettingOutlined key="setting" />,
          <EditOutlined key="edit" />,
          <EllipsisOutlined key="ellipsis" />,
        ]}
      >
        <Meta
          avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
          title="Directory"
          description="This is the description"
        />
      </Card>,
      <button onCick={()=>click()}>Clickhere</button>
      </main>



      <footer className="footer">
        <b> Copyright &copy; Hutech Solutions </b>
      </footer>


    </div>
  )
}
export default Directory;
