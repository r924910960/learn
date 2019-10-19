/**
 * Created by Lanny on 2017/8/16.
 */
import App from '../App'
export default [{
  path: '/',
  component: App,
  children: [{
    path: '',
    component: r => require.ensure([], () => r(require('../page/home')), 'home')
  },
    {
      path: '/item',
      component: r => require.ensure([], () => r(require('../page/item')), 'item')
    },
    {
      path: '/score',
      component: r => require.ensure([], () => r(require('../page/score')), 'score')
    }]
}]
