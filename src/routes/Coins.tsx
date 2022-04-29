import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import {useSetRecoilState } from 'recoil';
import styled from 'styled-components';
import { fetchCoins } from '../api';
import { isDarkAtom } from '../atoms';

const Container = styled.div`
  padding:0 20px;
  max-width:480px;
  margin: 0 auto;
 
`
const Header = styled.header`
  height:10vh;
  display:flex;
  justify-content:center;
  align-items:center;
  
`

const CoinList = styled.ul`

  
`
// ${props=> props.theme.bgColor}
const Coin = styled.li`
  background-color:white;
  color: black;
  padding:20px;
  margin-bottom:10px;
  border-radius:15px;
  a{
    transition: color 0.2s ease-in;
    display: block;
  }
  &:hover{
    a{
      color: ${props=> props.theme.accentColor};
    }
  }
`
const ToggleBtn = styled.button`
  position: relative;
  margin-top:5px;
  border: none;
  display: inline-block;
  padding: 15px 30px;
  border-radius: 15px;
  font-family: "paybooc-Light", sans-serif;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
  text-decoration: none;
  font-weight: 600;
  transition: 0.25s;
  background-color: aliceblue;
  color: black;
`

const Title = styled.h1`
  color:${props => props.theme.accentColor};
`
const Loader = styled.div`
  text-align:center;
`

interface ICoin{
  id: string,
  name: string,
  symbol: string,
  rank: number,
  is_new: boolean,
  is_active: boolean,
  type: string,
}

function Coins(){
  const {isLoading, data} =useQuery<ICoin[]>("allCoins",fetchCoins)
  const setDarkAtom = useSetRecoilState(isDarkAtom);
  const toggleDarkAtom =() => setDarkAtom((prev) => !prev)
  // const [coins,setCoins] = useState<CoinInterface[]>([]);
  // const [loding,setLoding] = useState(true);
  // useEffect(() => {
  //   (async () => {
  //     const response = await fetch("https://api.coinpaprika.com/v1/coins");
  //     const json = await response.json();
  //     setCoins(json.slice(0, 100));
  //     setLoding(false)
  //   })();
  // }, []);
  return(
    <>
      <ToggleBtn onClick={toggleDarkAtom}>Dark mode</ToggleBtn>
      <Container>
        <Header>
          <Title>Coin</Title>
        </Header>
        {isLoading ? <Loader>Loading...</Loader> :
        <CoinList>
          {data?.slice(0, 100).map((coin) => 
            <Coin key={coin.id} >
              <Link to={`/${coin.id}`} state={{name:coin.name}} >
                {coin.name}&rarr;
              </Link>
            </Coin>
          )}
        </CoinList>}
      </Container>
    </>
  )
}

export default Coins;