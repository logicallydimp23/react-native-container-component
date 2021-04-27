import { PureComponent } from 'react'

import {
  StyleProp,
  ViewStyle,
  ViewProps,
} from 'react-native'

type gradientPositions = {
  x: number,
  y: number,
}

export interface ContainerProps extends ViewProps {
  gradient?: boolean,
  /**
   * { x: number, y: number }
   */
  start?: gradientPositions,
  /**
   * { x: number, y: number }
   */
  end?: gradientPositions,
  colors?: any[],
  style?: StyleProp<ViewStyle>,
  children?: Element,
  drawer?: boolean,
  drawerContent?: Element,
  drawerPercentage?: number,
  drawerOverlay?: boolean,
  drawerOpacity?: number,
}
/**
 * Container
 */
export class Container extends PureComponent<ContainerProps> { }