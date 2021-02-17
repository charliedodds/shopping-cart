import '../styles/Card.css';

const Card = ({ item }) => {
  const editImgSrc = (imgURL) => {
    // convert small img received from API to larger size
    const newImgSrc = imgURL.replace('capsule_sm_120', 'header');
    return newImgSrc;
  };

  const imgSrc = editImgSrc(item.thumb);

  return (
    <article className='Card'>
      <figure className='Card-img-container'>
        <img
          className='Card-img'
          src={imgSrc}
          alt={`${item.title} thumbnail`}
        />
      </figure>
      <h2 className='Card-title'>{item.title}</h2>
    </article>
  );
};

export default Card;
