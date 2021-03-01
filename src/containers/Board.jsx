import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Lane from '../components/Lane/Lane'


const BoardWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  margin: 5%;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export default function Board() {
    const [data, setData] = useState([])
    const [isLoading, setLoading] = useState(true)
    const [error, setError] = useState('')

    useEffect(() => {
        async function fetchData() {
            try {
                const tickets = await fetch(`../../assets/data.json`)
                const ticketsJSON = await tickets.json()
                if (ticketsJSON) {
                    setData(ticketsJSON)
                    setLoading(false)
                }
            } catch (error) {
                setLoading(false)
                setError(error.message)
            }
            return
        }

        fetchData()

    }, [])

    const lanes = [
        { id: 1, title: 'To-Do' },
        { id: 2, title: 'In Progress' },
        { id: 3, title: 'Review' },
        { id: 4, title: 'Done' }
    ]
    console.log('Data: ', data)
    console.log('isLoading: ', isLoading)
    console.log('error: ', error)


    return (
        <BoardWrapper>
            {lanes.map(lane =>
                <Lane
                    key={lane.id}
                    title={lane.title}
                    loading={isLoading}
                    error={error}
                    tickets={data.filter(ticket => ticket.lane === lane.id)}
                />)}
        </BoardWrapper>
    )
}