import React from 'react'
import { withWebsitePage } from '../../components/wrappers'

function LoginScreen(): JSX.Element {
  return <div>Página de Login</div>
}

export default withWebsitePage(LoginScreen, {
  seoProps: {
    headTitle: 'Login',
  },
  disableMenu: true,
})
