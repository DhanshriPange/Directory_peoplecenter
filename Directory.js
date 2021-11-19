import React from 'react'
import { Card, Avatar } from 'antd';
import '../style.css';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';




const { Meta } = Card;


const Directory = () => {
  const navigate = useNavigate(); navigate('/DemoTable2')

  return (
  
      <div className="container">
     return (
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
    
        </nav>
      </header>
    

      <Card
    style={{ width: 300 }}
    cover={
      <img
        alt="example"
        src= "../../directory-icon.png"
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
      title="Card title"
      description="This is the description"
    />
  </Card>,
 
);






<footer className="footer">
  <b> Copyright &copy; Hutech Solutions </b>
</footer>
     

</div>
  )
}
export default Directory;
