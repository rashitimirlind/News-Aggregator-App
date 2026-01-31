import React, { useState } from 'react';
import { Input, Typography, Row, Col, Divider } from 'antd';
import { SearchOutlined, BellOutlined, UserOutlined } from '@ant-design/icons';

const { Title, Paragraph } = Typography;

function Header({setLoggedIn}) {
  const [showLogout, setShowLogout] = useState(false);

  const handleIconClick = () => {
    setShowLogout(!showLogout);
  };

  const handleLogout = () => {
    console.log("User logged out"); // këtu vendos logikën e logout
    localStorage.clear()


    setLoggedIn(false);
  };

  const styles = {
    headerContainer: {
      padding: '15px 50px',
      backgroundColor: '#fff',
      borderBottom: '1px solid #f0f0f0',
      position: 'sticky',
      top: 0,
      zIndex: 1000,
    },
    logo: {
      fontSize: '24px',
      fontWeight: '800',
      margin: 0,
      letterSpacing: '-1px',
      cursor: 'pointer'
    },
    searchWrapper: {
      display: 'flex',
      justifyContent: 'center'
    },
    heroSection: {
      padding: '60px 50px 20px 50px',
      backgroundColor: '#fff',
    },
    heroTitle: {
      fontSize: '52px',
      marginBottom: '8px',
      letterSpacing: '-1.5px'
    },
    heroSub: {
      fontSize: '18px',
      color: '#595959',
      maxWidth: '600px',
      marginBottom: '30px'
    },
    logoutDropdown: {
      position: 'absolute',
      top: '30px',
      right: 0,
      backgroundColor: '#fff',
      border: '1px solid #ccc',
      padding: '5px 10px',
      borderRadius: '4px',
      boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
      cursor: 'pointer',
      zIndex: 1000,
    },
    iconWrapper: {
      position: 'relative', // për të vendosur dropdown mbi ikona
      display: 'inline-block'
    }
  };

  return (
    <div style={{ backgroundColor: '#fff' }}>
      {/* Top Navbar */}
      <div style={styles.headerContainer}>
        <Row align="middle" gutter={[16, 16]}>
          <Col xs={24} md={6}>
            <h2 style={styles.logo}>
              News<span style={{ color: '#1677ff' }}>Flow</span>
            </h2>
          </Col>
          
          <Col xs={24} md={12} style={styles.searchWrapper}>
            <Input 
              size="large" 
              placeholder="Search stories, topics, or sources..." 
              prefix={<SearchOutlined style={{ color: '#bfbfbf' }} />} 
              style={{ borderRadius: '8px', backgroundColor: '#f5f5f5', border: 'none' }}
            />
          </Col>

          <Col xs={0} md={6} style={{ textAlign: 'right' }}>
            <BellOutlined style={{ fontSize: '20px', marginRight: '20px', cursor: 'pointer' }} />

            <div style={styles.iconWrapper}>
              <UserOutlined 
                style={{ fontSize: '20px', cursor: 'pointer' }} 
                onClick={handleIconClick} 
              />

              {showLogout && (
                <div style={styles.logoutDropdown} onClick={handleLogout}>
                  Logout
                </div>
              )}
            </div>
          </Col>
        </Row>
      </div>

      {/* Hero Section */}
      <div style={styles.heroSection}>
        <Title style={styles.heroTitle}>Top Headlines</Title>
        <Paragraph style={styles.heroSub}>
          Stay informed with the latest stories from around the world. 
          Curated specifically for your interests.
        </Paragraph>
      </div>

      <Divider style={{ margin: 0 }} />
    </div>
  );
}

export default Header;
