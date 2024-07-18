import {
  ArrowCircleDown,
  ArrowCircleUp,
  CurrencyCircleDollar,
} from 'phosphor-react'
import { SummaryContainer, SymmaryCard } from './styles'
import { priceFormatter } from '../../utils/formatter'
import { useSummary } from '../../hooks/useSummary'

export function Summary() {
  const summary = useSummary()

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
