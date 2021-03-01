import React from 'react'
import styled from 'styled-components'

const TicketWrapper = styled.div`
  background: #FEA889;
  padding: 20px;
  border-radius: 20px;

  &:not(:last-child) {
    margin-bottom: 5%;
    margin-right: ${props => (!!props.marginRight ? '1%' : '0')};
  }
`;

const Title = styled.h3`
color: #33767b;
  width: 100%;
  margin: 0px;
`;

const Body = styled.p`
  width: 100%;
  color:  #015a6c;
`;

export default function Ticket({ ticket }) {
    return (
        <TicketWrapper>
            <Title>{ticket.title}</Title>
            <Body>{ticket.body}</Body>
        </TicketWrapper>
    )
}