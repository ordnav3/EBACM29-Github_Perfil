import styled from 'styled-components'
import { P } from '../../components/Paragrafo/styles'
import Sidebar from '.'

export const Descricao = styled(P)`
  margin-top: 24px;
  margin-bottom: 40px;
`

export const BotaoTema = styled.button`
  font-size: 10px;
  font-weight: bold;
  padding: 8px;
  border-radius: 12px;
  color: #eee;
  background-color: #282a35;
  cursor: pointer;

  &:hover {
    background-color: #333435;
    color: #bfbfbf;
  }
`

export const SidebarContainer = styled.div`
  position: sticky;
  top: 80px;
  left: 0;
`
