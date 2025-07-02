'use client'
import React, { useEffect, useRef, useState } from 'react';

const StackingCards: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);
  const [currentCard, setCurrentCard] = useState(0);
  const [prevCard, setPrevCard] = useState(0);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    // Initialize z-index for all cards
    cardsRef.current.forEach((card, index) => {
      if (card) {
        card.style.zIndex = index.toString();
      }
    });

    // Set initial positions for first two cards
    if (cardsRef.current[0]) {
      cardsRef.current[0].style.position = 'fixed';
      cardsRef.current[0].style.top = '0px';
    }
    if (cardsRef.current[1]) {
      cardsRef.current[1].style.marginTop = '600px';
    }

    const handleScroll = () => {
      const newScrollY = window.pageYOffset;
      setScrollY(newScrollY);
      
      const newCurrentCard = Math.floor(newScrollY / 600);
      setPrevCard(currentCard);
      setCurrentCard(newCurrentCard);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Handle stacking logic when currentCard changes
    if (currentCard > prevCard && currentCard < cardsRef.current.length - 1) {
      // Add card to stack
      const card = cardsRef.current[currentCard];
      if (card) {
        card.style.position = 'fixed';
        card.style.top = '0px';
        card.style.marginTop = '0';
      }
      
      const nextCard = cardsRef.current[currentCard + 1];
      if (nextCard) {
        nextCard.style.marginTop = `${600 * (currentCard + 1)}px`;
      }
    }

    if (currentCard < prevCard) {
      // Remove card from stack
      const nextCard = cardsRef.current[currentCard + 1];
      if (nextCard) {
        nextCard.style.position = 'relative';
        nextCard.style.top = '0';
        nextCard.style.marginTop = `${600 * (currentCard + 1)}px`;
      }
      
      const nextNextCard = cardsRef.current[currentCard + 2];
      if (nextNextCard) {
        nextNextCard.style.marginTop = '0';
      }
    }
  }, [currentCard, prevCard]);

  return (
    <div>
      {[1, 2, 3, 4, 5, 6].map((num, index) => (
        <div
          key={num}
          ref={(el) => { if (el) cardsRef.current[index] = el; }}
          className={`card ${index % 2 === 1 ? 'even' : ''}`}
        >
          <h1>{num}</h1>
        </div>
      ))}
      <style jsx>{`
        body {
          margin: 0;
        }
        .card {
          text-align: center;
          height: 600px;
          width: 100%;
          background: white;
          position: relative;
        }
        .card h1 {
          margin: 0;
        }
        .card.even {
          background: gray;
        }
      `}</style>
    </div>
  );
};

export default StackingCards;