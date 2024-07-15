import {
  ArrowCircleDown,
  ArrowCircleUp,
  CurrencyCircleDollar,
} from 'phosphor-react'
import { SummaryContainer, SymmaryCard } from './styles'

export function Summary() {
  return (
    <SummaryContainer>
      <SymmaryCard>
        <header>
          <span>Entradas</span>
          <ArrowCircleUp size={32} color="#00b37e" />
        </header>
        <strong>R$ 17.400,00</strong>
      </SymmaryCard>

      <SymmaryCard>
        <header>
          <span>Saídas</span>
          <ArrowCircleDown size={32} color="#f75a68" />
        </header>
        <strong>R$ 17.400,00</strong>
      </SymmaryCard>

      <SymmaryCard variant="green">
        <header>
          <span>Total</span>
          <CurrencyCircleDollar size={32} color="#FFFFFF" />
        </header>
        <strong>R$ 17.400,00</strong>
      </SymmaryCard>
    </SummaryContainer>
  )
}
