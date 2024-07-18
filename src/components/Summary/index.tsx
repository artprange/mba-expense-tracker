import {
  ArrowCircleDown,
  ArrowCircleUp,
  CurrencyCircleDollar,
} from 'phosphor-react'
import { SummaryContainer, SymmaryCard } from './styles'
import { useContext } from 'react'
import { TransactionsContext } from '../../contexts/TransactionsContext'
import { priceFormatter } from '../../utils/formatter'

export function Summary() {
  const { transactions } = useContext(TransactionsContext)

  const summary = transactions.reduce(
    (acc, transaction) => {
      if (transaction.type === 'income') {
        acc.income += transaction.price
        acc.total += transaction.price
      } else {
        acc.expense += transaction.price
        acc.total -= transaction.price
      }
      return acc
    },
    {
      income: 0,
      expense: 0,
      total: 0,
    },
  )

  return (
    <SummaryContainer>
      <SymmaryCard>
        <header>
          <span>Entradas</span>
          <ArrowCircleUp size={32} color="#00b37e" />
        </header>
        <strong>{priceFormatter.format(summary.income)}</strong>
      </SymmaryCard>

      <SymmaryCard>
        <header>
          <span>Saídas</span>
          <ArrowCircleDown size={32} color="#f75a68" />
        </header>
        <strong> {priceFormatter.format(summary.expense)}</strong>
      </SymmaryCard>

      <SymmaryCard variant="green">
        <header>
          <span>Total</span>
          <CurrencyCircleDollar size={32} color="#FFFFFF" />
        </header>
        <strong> {priceFormatter.format(summary.total)}</strong>
      </SymmaryCard>
    </SummaryContainer>
  )
}
