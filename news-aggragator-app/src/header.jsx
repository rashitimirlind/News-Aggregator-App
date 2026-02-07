import React, { useState } from 'react';
import { Input, Row, Col, Divider } from 'antd';
import { SearchOutlined, HeartOutlined, UserOutlined } from '@ant-design/icons';

const Header = ({
  setLoggedIn,
  searchTerm,
  setSearchTerm,
  showFavoritesOnly,
  setShowFavoritesOnly,
  activeTab,
  setActiveTab
}) => {
  const [showLogout, setShowLogout] = useState(false);

  const handleLogout = () => {
    localStorage.clear();
    setLoggedIn(false);
  };

  // Logo click → back to top headlines
  const handleLogoClick = () => {
    setShowFavoritesOnly(false);
    setActiveTab("6");
  };

  // Heart click → toggle favorites
  const handleFavoritesClick = () => {
    setShowFavoritesOnly(prev => !prev);
  };

  return (
    <div style={{ backgroundColor: '#fff', position: 'sticky', top: 0, zIndex: 1000 }}>
      <div style={{ padding: '15px 50px', borderBottom: '1px solid #f0f0f0' }}>
        <Row align="middle" gutter={[16, 16]}>
          <Col xs={24} md={6}>
            <h2
              style={{ fontSize: 24, fontWeight: 800, cursor: 'pointer' }}
              onClick={handleLogoClick}
            >
              News<span style={{ color: '#1677ff' }}>Flow</span>
            </h2>
          </Col>

          {!showFavoritesOnly && (
            <Col xs={24} md={12} style={{ display: 'flex', justifyContent: 'center' }}>
              <Input
                size="large"
                placeholder="Search stories, topics, or sources..."
                prefix={<SearchOutlined style={{ color: '#bfbfbf' }} />}
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
                style={{ borderRadius: 8, backgroundColor: '#f5f5f5', border: 'none' }}
              />
            </Col>
          )}

          <Col xs={0} md={6} style={{ textAlign: 'right' }}>
            <div style={{ display: 'inline-block', marginRight: 20 }}>
              <HeartOutlined
                style={{ fontSize: 20, cursor: 'pointer' }}
                onClick={handleFavoritesClick}
              />
            </div>

            <div style={{ position: 'relative', display: 'inline-block' }}>
              <UserOutlined style={{ fontSize: 20, cursor: 'pointer' }} onClick={() => setShowLogout(!showLogout)} />
              {showLogout && (
                <div
                  style={{
                    position: 'absolute',
                    top: 30,
                    right: 0,
                    backgroundColor: '#fff',
                    border: '1px solid #ccc',
                    padding: '5px 10px',
                    borderRadius: 4,
                    boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
                    cursor: 'pointer',
                    zIndex: 1000
                  }}
                  onClick={handleLogout}
                >
                  Logout
                </div>
              )}
            </div>
          </Col>
        </Row>
      </div>

      {!showFavoritesOnly && (
        <div style={{ padding: '60px 50px 20px 50px', backgroundColor: '#fff' }}>
          <h1 style={{ fontSize: 52, marginBottom: 8 }}>Top Headlines</h1>
          <p style={{ fontSize: 18, color: '#595959', maxWidth: 600, marginBottom: 30 }}>
            Stay informed with the latest stories from around the world. Curated specifically for your interests.
          </p>
        </div>
      )}

      <Divider style={{ margin: 0 }} />
    </div>
  );
};

export default Header;
