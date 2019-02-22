import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const CardWrapper = styled.div`
  border-bottom: 1px solid lightgrey;
  display: flex;
  justify-content: space-between;
  align-items: none;
  flex-direction: column;
  background-color: #fff;
  width: 380px;
  margin-bottom: 16px;
  padding: 24px;
`

const Headline = styled.div`
  font-size: 25px;
  font-family: Didot, serif;
`

const Author = styled.div`
  display: flex;
  justify-content: none;
  align-items: center;
  flex-direction: row;
  margin-top: 15px;

  span {
    padding-left: 10px;
    font-size: 12px;
    letter-spacing: 1px;
    font-weight: bold;
  }
`

const AuthorImgWrapper = styled.div`
  padding-right: 10px;
  border-right: 1px solid lightgrey;
  height: 40px;

  img {
    width: 40px;
  }
`

const Card = props => {
  return (
    <CardWrapper>
      <Headline>{props.card.headline}</Headline>
      <Author>
        <AuthorImgWrapper>
          <img 
          src={props.card.img} 
          alt="Card content"
          />
        </AuthorImgWrapper>
        <span>By {props.card.author}</span>
      </Author>
    </CardWrapper>
  );
};

Card.propTypes = {
  card: PropTypes.shape({
    headline: PropTypes.string,
    tab: PropTypes.string,
    img: PropTypes.string,
    author: PropTypes.string
  })
}

export default Card;
