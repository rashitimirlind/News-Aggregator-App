import React from 'react';
import { Input, Typography, Row, Col, Divider } from 'antd';
import { SearchOutlined, BellOutlined, UserOutlined } from '@ant-design/icons';

const { Title, Paragraph, Text } = Typography;

function Header() {
  // Navigation categories

  // Styles defined as a plain object to avoid Hook errors
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
            <UserOutlined style={{ fontSize: '20px', cursor: 'pointer' }} />
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

      {/* Categories Section */}
    
      
      <Divider style={{ margin: 0 }} />
    </div>
  );
}

export default Header;