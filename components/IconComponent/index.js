import { TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'

const IconComponent = ({ size, onPress, name, color = '#000', ...rest }) => {
  return (
    <TouchableOpacity onPress={onPress} {...rest}>
      <Icon name={name} size={size} color={color} />
    </TouchableOpacity>
  )
}

export default IconComponent
