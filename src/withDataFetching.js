import { Component } from 'react'

export default function withDataFetching(WrappedComponent) {

    return class WithDataFetching extends Component {
        constructor(props) {
            super(props)
            this.state = {
                data: [],
                isLoading: true,
                error: ''
            }
        }

        async componentDidMount() {
            try {
                const tickets = await fetch(`../../assets/data.json`)
                const ticketsJSON = await tickets.json()

                if (ticketsJSON) {
                    this.setState({
                        data: ticketsJSON,
                        isLoading: false,
                    })
                }
            } catch (error) {
                this.setState({
                    isLoading: false,
                    error: error.message
                })
            }

        }
        render() {

            const { data, isLoading, error } = this.state

            return (<WrappedComponent
                data={data}
                isLoading={isLoading}
                error={error}
                {...this.props}
            />)
        }
    }
}