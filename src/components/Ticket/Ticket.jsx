import React from 'react'
import styled from 'styled-components'

const TicketWrapper = styled.div`
background: darkGray;
padding:20px;
border-radius: 20px;

&:not(:last-child) {
    width:100%;
    margin-bottom:5%;
}
`
const Title = styled.h3`
width: 100%;
margin: 0px;
`
const Body = styled.p`
width: 100%;
`
export default function Ticket({ ticket }) {
    <TicketWrapper>
        <Title>{ticket.title}</Title>
        <Body>{ticket.body}</Body>
    </TicketWrapper>

}