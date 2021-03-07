import styled from 'styled-components'
import withDataFetching from '../withDataFetching'
import Ticket from '../components/Ticket/Ticket'

const TicketsWrapper = styled.div`
display:flex;
justify-content: space-betweem;
flex-direction:row;
margin: 5%;

@media(max-width: 768px){
    flex-direction:column;
}
`
const Alert = styled.div`
text-align: center;
`


const Tickets = ({ isLoading, error, data }) => (
    <TicketsWrapper>
        {(isLoading || error) && <Alert>{isLoading ? 'Loading...' : error}</Alert>}
        {data.map(ticket => (
            <Ticket key={ticket.id} marginRight ticket={ticket} />
        ))}
    </TicketsWrapper>
)

export default withDataFetching(Tickets)