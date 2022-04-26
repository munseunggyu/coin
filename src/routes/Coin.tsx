import React, { useState } from 'react';
import {useParams,useLocation} from 'react-router-dom';
import styled from 'styled-components';

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
const Title = styled.h1`
  color:${props => props.theme.accentColor};
`
const Loader = styled.div`
  text-align:center;
`

interface Params{
  coinId:string;
}
interface ILocation {
  state:{
  name:string;
  };
  }

function Coin(){
  const {coinId} = useParams();
  const [loding,setLoding] = useState(true)
  const {state} = useLocation() as ILocation;
  return (
    <Container>
      <Header>
        <Title> {state?.name || "Go homePage" } </Title>
      </Header>
      {loding ? <Loader>Loading...</Loader> : null}
    </Container>
  )
}

export default Coin;