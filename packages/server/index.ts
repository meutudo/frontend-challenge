import { createServer } from 'miragejs'

export function makeServer({ environment = 'test' } = {}) {
    let server = createServer({
        environment,

        routes() {
            this.namespace = 'api'

            this.get('/', () => ({
                newLoanMaxValue: 5324.84,
                portabilityMaxValue: 1200.89,
                refinMaxValue: 0,
                creditCardMaxValue: 0
            }))

            this.get('/values', () => ({
                max: 5000,
                min: 250,
                suggestionValues: [5000, 3000, 1500, 250]
            }))

            this.get('/installments', () => ({
                max: 84,
                min: 12,
                suggestionInstallments: [84, 68, 46, 12]
            }))

            this.get('/simulation', () => ({
                contractValue: 2345.89,
                numberOfInstallments: 84,
                installmentValue: 41.23,
                rate: 0.0139,
                nearEstimatedDate: '19/05/2022',
                fatEstimatedDate: '01/06/2022'
            }))
        }
    })

    return server
}
