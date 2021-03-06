import { Container } from "./styles";

export function TransactionTable() {
    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td className="deposit">Desenvolvimento de website</td>
                        <td>R$12.000</td>
                        <td>Desenvolvimento</td>
                        <td>20/02/2022</td>
                    </tr>
                    <tr>
                        <td className="withdraw">Aluguel</td>
                        <td>- R$1.000</td>
                        <td>Casa</td>
                        <td>17/02/2022</td>
                    </tr>
                </tbody>
            </table>
        </Container>
    )
}