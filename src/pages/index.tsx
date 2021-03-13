import { HomeScreen } from '../components/screens'
import { withWebsitePage } from '../components/wrappers'

export default withWebsitePage(HomeScreen, {
  seoProps: {
    headTitle: 'Home',
  },
})
