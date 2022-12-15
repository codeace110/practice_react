import React from 'react';
import './About.css';

function About() {
  return (
    <div>
      <div className="container">
        <h1 className="header">Group Number 7</h1>
        <h1 className="header1">Our Group Motto</h1>
        <h3>
          "How CodeGo Change Our Lives Motto"
        </h3>
        <div className="article">
          <h2>Members</h2>
          {createCards()}
        </div>
      </div>
    </div>
  );
}

function createCard(title, subtitle, text) {
  return (
    <div className="card" style={{ width: '18rem' }}>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{subtitle}</h6>
        <p className="card-text">{text}</p>
      </div>
    </div>
  );
}

function createCards() {
  let cards = [];

  // kung may mali paki change nalang
  const cardData = [
    { title110: "sample1", subtitle110: "Moto", text110: "\"Web development: because solving real-world problems is too hard\"" },
    { title110: "sample2", subtitle110: "Moto", text110: "\"We make websites, not miracles\”" },
    { title110: "sample3", subtitle110: "Moto", text110: "\"We build websites like your ex builds relationships\"" },
    { title110: "sample4", subtitle110: "Moto", text110: "\"Code, coffee, and chaos\"" },
    { title110: "sample4", subtitle110: "Moto", text110: "\"Code today, nap tomorrow\"" },
  ];

  for (let i = 0; i < cardData.length; i++) {
    let card110 = createCard(cardData[i].title110, cardData[i].subtitle110, cardData[i].text110);
    cards.push(card110);
  }
  return (
      <div className='cards110' style={{ display: "flex", justifyContent: "space-around", flexWrap: "wrap",}}>
        {cardData.map(card => createCard(card.title110, card.subtitle110, card.text110))}
      </div>
  );
}
/************************************************** */
const style = {
  '@media (max-width: 600px)': {
    'p': {
      fontSize: '14px',
    },
    'h1': {
      fontSize: '18px',
    },
    'h2': {
      fontSize: '16px',
    },
  },
  '@media (min-width: 601px) and (max-width: 900px)': {
    'p': {
      fontSize: '16px',
    },
    'h1': {
      fontSize: '20px',
    },
    'h2': {
      fontSize: '18px',
    },
  },
  '@media (min-width: 901px)': {
    'p': {
      fontSize: '18px',
    },
    'h1': {
      fontSize: '22px',
    },
    'h2': {
      fontSize: '20px',
    },
  },
};

export default About;