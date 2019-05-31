import React from 'react';
import styled from 'styled-components';
// import './SearchBar.css';

function SearchBar(props) {
  return (
    <Header>
      <HeaderContainer>
        <HeaderContDiv>
          <HeaderContDivImgLogo src="/uploads/logo.png" alt="Clone Instagram logo"/>
          <HeaderConstDivP></HeaderConstDivP>
          <HeaderContDivImg className="logo-name" src="/uploads/Instagram-logo.png" alt="Instagram clone" />
        </HeaderContDiv>
        <form onSubmit={props.searchHandler}>
          <HeaderContInput className="search" placeholder="Search"></HeaderContInput>
        </form>
        <HeaderNav>
          <HeaderNavButtonCompass></HeaderNavButtonCompass>
          <HeaderNavButtonHeart></HeaderNavButtonHeart>
          <HeaderNavButtonAvatar></HeaderNavButtonAvatar>
        </HeaderNav>
      </HeaderContainer>
    </Header>
  )
}

const Header = styled.header`
  background: #fff;
  border-bottom: 1px solid #cacaca;
`;
const HeaderContainer = styled.div`
  max-width: 1000px;
  height: 25px;
  margin: 0 auto;
  padding: 26px 20px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  box-sizing: content-box;
  -webkit-box-sizing: content-box;
  -moz-box-sizing: content-box;
`;
const HeaderContInput = styled.input`
  height: 18px;
  padding: 3px 10px 3px 26px;
  border: 1px solid #dbdbdb;
  border-radius: 3px;
  background: #fafafa;
`;
const HeaderContDiv = styled.div`
  height: 36px;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
`;
const HeaderConstDivP = styled.p`
  margin: 0 15px;
  height: 80%;
  border-right: 1px solid #000;
`;
const HeaderContDivImg = styled.img`
  width: auto;
  height: 80%;
`;
const HeaderContDivImgLogo = styled.img`
  height: 60%;
`;
const HeaderNav = styled.nav`
  width: 215px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-end;
  align-items: center;
`;
const HeaderNavButton = styled.button`
  margin-left: 30px;
  background: transparent;
  border: none;
  width: 24px;
  height: 24px;
  outline: none;
`;
const HeaderNavButtonCompass = styled(HeaderNavButton)`
  background: url('/uploads/compass.png');
  background-repeat: no-repeat;
  background-position: center;
`;
const HeaderNavButtonHeart = styled(HeaderNavButton)`
  background: url('/uploads/heart.png');
  background-repeat: no-repeat;
  background-position: center;
`;
const HeaderNavButtonAvatar = styled(HeaderNavButton)`
  background: url('/uploads/avatar.png');
  background-repeat: no-repeat;
  background-position: center;
`;

export default SearchBar;