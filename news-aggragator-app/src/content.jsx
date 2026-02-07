import React, { useEffect, useState } from "react";
import { Tabs, Card, Row, Col, Tag, Typography, Skeleton, Empty, Space } from "antd";
import { ClockCircleOutlined, ExportOutlined, HeartOutlined, HeartFilled } from "@ant-design/icons";

const { Title, Paragraph, Text } = Typography;

export const Content = ({ searchTerm, favorites, setFavorites, showFavoritesOnly, activeTab, setActiveTab }) => {
  const [data, setData] = useState({ all: [], techcrunch: [], tesla: [], apple: [], wsj: [] });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const key = "8ae1cafdfddb4c9bb90a77df479c1a2a";
    const today = new Date().toISOString().split('T')[0];
    const urls = {
      all: `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${key}`,
      techcrunch: `https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${key}`,
      tesla: `https://newsapi.org/v2/everything?q=tesla&sortBy=publishedAt&apiKey=${key}`,
      apple: `https://newsapi.org/v2/everything?q=apple&from=${today}&sortBy=popularity&apiKey=${key}`,
      wsj: `https://newsapi.org/v2/everything?domains=wsj.com&apiKey=${key}`,
    };

    setLoading(true);
    Promise.all(
      Object.entries(urls).map(([tab, url]) =>
        fetch(url)
          .then(res => res.json())
          .then(json => ({ tab, articles: json.articles || [] }))
          .catch(() => ({ tab, articles: [] }))
      )
    ).then(results => {
      const newData = {};
      results.forEach(({ tab, articles }) => (newData[tab] = articles));
      setData(newData);
      setLoading(false);
    });
  }, []);

  const toggleFavorite = (article) => {
    setFavorites(prev => {
      const exists = prev.find(a => a.url === article.url);
      if (exists) return prev.filter(a => a.url !== article.url);
      return [...prev, article];
    });
  };

  const renderCards = (articles) => {
    if (loading) {
      return (
        <Row gutter={[24,24]}>
          {[1,2,3,4,5].map(n => (
            <Col xs={24} sm={12} md={8} lg={6} key={n}>
              <Card style={{ borderRadius: 12 }}>
                <Skeleton active avatar paragraph={{ rows: 3 }} />
              </Card>
            </Col>
          ))}
        </Row>
      );
    }

    if (!articles.length) return <Empty description="No news found" style={{ padding: '100px 0' }} />;

    return (
      <Row gutter={[24,24]}>
        {articles.map((a,i) => (
          <Col xs={24} sm={12} md={8} lg={6} key={i}>
            <Card
              hoverable
              style={{ height:'100%', borderRadius:16, overflow:'hidden', display:'flex', flexDirection:'column' }}
              bodyStyle={{ padding:'16px', flex:1, display:'flex', flexDirection:'column' }}
              cover={
                <div style={{ position:'relative', overflow:'hidden', height:200 }}>
                  <img
                    alt={a.title}
                    src={a.urlToImage || "https://via.placeholder.com/400x200?text=NewsFlow"}
                    style={{ width:'100%', height:'100%', objectFit:'cover', transition:'transform 0.5s ease' }}
                    className="card-image"
                  />
                  <Tag color="blue" style={{ position:'absolute', top:12, left:12, borderRadius:4, fontWeight:600 }}>
                    {a.source?.name}
                  </Tag>
                  <div style={{ position:'absolute', top:12, right:12, zIndex:10 }} onClick={(e)=>e.stopPropagation()}>
                    {favorites.find(f => f.url === a.url) ? (
                      <HeartFilled style={{ color:'red', fontSize:18, cursor:'pointer' }} onClick={()=>toggleFavorite(a)} />
                    ) : (
                      <HeartOutlined style={{ color:'white', fontSize:18, cursor:'pointer' }} onClick={()=>toggleFavorite(a)} />
                    )}
                  </div>
                </div>
              }
              onClick={() => window.open(a.url, "_blank")}
            >
              <div style={{ flex:1 }}>
                <Title level={5} style={{ marginTop:0, marginBottom:8, lineHeight:'1.4em', height:'2.8em', overflow:'hidden' }}>
                  {a.title}
                </Title>
                <Paragraph ellipsis={{ rows:2 }} type="secondary" style={{ fontSize:'13px' }}>
                  {a.description || "No description available for this story."}
                </Paragraph>
              </div>

              <Space style={{ marginTop:'auto', paddingTop:12, justifyContent:'space-between', width:'100%' }}>
                <Text type="secondary" style={{ fontSize:'12px' }}>
                  <ClockCircleOutlined style={{ marginRight:4 }} />
                  {new Date(a.publishedAt).toLocaleDateString()}
                </Text>
                <ExportOutlined style={{ color:'#1677ff' }} />
              </Space>
            </Card>
          </Col>
        ))}
      </Row>
    );
  };

  const items = [
    { key: "6", label: "Business", children: renderCards(data.all) },
    { key: "2", label: "TechCrunch", children: renderCards(data.techcrunch) },
    { key: "3", label: "Tesla", children: renderCards(data.tesla) },
    { key: "4", label: "Apple", children: renderCards(data.apple) },
    { key: "5", label: "WSJ", children: renderCards(data.wsj) },
  ];

  return (
    <div style={{ padding: "0 50px 50px 50px", backgroundColor:'#fff' }}>
      {showFavoritesOnly ? (
        <div>
          <button
            onClick={() => setShowFavoritesOnly(false)}
            style={{
              padding: '8px 16px',
              borderRadius: 8,
              border: 'none',
              backgroundColor: '#1677ff',
              color: '#fff',
              cursor: 'pointer',
              fontWeight: 600,
              marginBottom: 20
            }}
          >
            Back to Top Headlines
          </button>
          {renderCards(favorites)}
        </div>
      ) : (
        <Tabs
          defaultActiveKey="6"
          activeKey={activeTab}
          onChange={key => setActiveTab(key)}
          items={items}
          size="large"
          animated={{ inkBar:true, tabPane:true }}
        />
      )}

      <style>{`.card-image:hover { transform: scale(1.05); }`}</style>
    </div>
  );
};
