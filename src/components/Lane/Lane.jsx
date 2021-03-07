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
const Alert = styled.div`
text-align: center;
`

const Lane = ({
  laneId,
  tickets,
  isLoading,
  error,
  onDragStart,
  onDragOver,
  onDrop,
  title,
}) => (
  <LaneWrapper
    onDragOver={e => onDragOver(e)}
    onDrop={e => onDrop(e, laneId)}
  >
    <Title>{title}</Title>
    {(isLoading || error) && <Alert>{isLoading ? 'Loading...' : error}</Alert>}
    <TicketsWrapper>
      {tickets.map(ticket => (
        <Ticket key={ticket.id} onDragStart={onDragStart} ticket={ticket} />
      ))}
    </TicketsWrapper>
  </LaneWrapper>
);

export default Lane;