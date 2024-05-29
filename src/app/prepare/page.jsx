import React from 'react';
import MediaCard from "../../components/shared/MediaCard";

function Page() {
  const cardData = [
    { imageUrl: "https://images.pexels.com/photos/965345/pexels-photo-965345.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", cardName: "Programming", link: "/prepare/coding" },
    { imageUrl: "https://media.istockphoto.com/id/1456727993/photo/soft-skills-concept-with-emotional-intelligence-creativity-collaboration-adaptability.jpg?b=1&s=612x612&w=0&k=20&c=2thd01D3FL5-af8L8fq0JWOf4SCOvcqXhjIgm-uSBYM=", cardName: "Aptitude", link: "/prepare/aptitude" },
    { imageUrl: "https://images.pexels.com/photos/256417/pexels-photo-256417.jpeg?auto=compress&cs=tinysrgb&w=600", cardName: "English", link: "/prepare/english" },
    { imageUrl: "https://images.pexels.com/photos/3760072/pexels-photo-3760072.jpeg?auto=compress&cs=tinysrgb&w=600", cardName: "Interview Preparation", link: "/prepare/interview" }
  ];

  const chunkArray = (array, size) => {
    const chunkedArray = [];
    for (let i = 0; i < array.length; i += size) {
      chunkedArray.push(array.slice(i, i + size));
    }
    return chunkedArray;
  };

  const chunkedCardData = chunkArray(cardData, 3);

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '20px' }}>
      {chunkedCardData.map((row, index) => (
        <div key={index} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
          {row.map((card, cardIndex) => (
            <div key={cardIndex} style={{ flex: '0 0 calc(33.33% - 10px)' }}>
              <MediaCard
                imageUrl={card.imageUrl}
                cardName={card.cardName}
                link={card.link}
              />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Page;