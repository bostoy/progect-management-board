import React from 'react'
import styled from 'styled-components'
import Ticket from '../Ticket/Ticket'

const LaneWrapper = styled.div`
  list-style: none;
  text-align: left;
  padding: 0;
  background: #8BCACA;
  border-radius: 20px;
  min-height: 50vh;
  width: 20vw;
  background-color:#FFD8C5;
  color:white;

  @media (max-width: 768px) {
    margin-bottom: 5%;
  }
`;

const Title = styled.h2`
color:#015a6c;
  width: 100%;
  padding-bottom: 10px;
  text-align: center;
  border-bottom: 1px solid #8BCACA;
`;
const TicketsWrapper = styled.div`
padding: 5%;
`


export default function Lane({ tickets, loading, error, title }) {

  return <LaneWrapper>
    <Title>{title}</Title>
    <TicketsWrapper>
      {tickets.map(ticket =>
        <Ticket
          key={ticket.id}
          ticket={ticket} />)
      }
    </TicketsWrapper>
  </LaneWrapper>
}