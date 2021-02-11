import { Logo } from '../../theme'
import { MenuWrapper } from './MenuWrapper'

export function Menu(): JSX.Element {
  return (
    <MenuWrapper>
      <MenuWrapper.LeftSide>
        {/* MenuWrapper.LeftSide */}
        <Logo />
      </MenuWrapper.LeftSide>
      <MenuWrapper.CentralSide as="ul">
        {/* MenuWrapper.CentralSide */}
        {[
          { url: '/', name: 'Home' },
          { url: '/faq', name: 'Perguntas Frequentes' },
          { url: '/sobre', name: 'Sobre' },
        ].map((link) => (
          <li key={link.url}>
            <a href={link.url}>{link.name}</a>
          </li>
        ))}
      </MenuWrapper.CentralSide>
      <MenuWrapper.RightSide>
        {/* MenuWrapper.RightSide */}
        <button type="button">Entrar</button>
        <button type="button">Cadastrar</button>
      </MenuWrapper.RightSide>
    </MenuWrapper>
  )
}
