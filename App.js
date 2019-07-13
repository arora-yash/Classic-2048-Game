import  {AppRegistry} from 'react-native'
import React from 'react'

import Container from './common/components/container'

const Classic2048 = () => {
  return (<Container startTiles={2} size={4} />)
}

export default Classic2048;

AppRegistry.registerComponent('Classic2048', () => Classic2048)
