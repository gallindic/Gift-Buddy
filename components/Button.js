import React from 'react';
import propTypes from 'prop-types';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { RFValue } from "react-native-responsive-fontsize";

const PRIMARY_COLOR = '#6E6263';
const SECONDARY_COLOR = '#6c757d';

const styles = StyleSheet.create({
    // Container Styles
    containerDefault: {
      alignItems: 'center',
      padding: '3%',
      borderWidth: 1,
      borderRadius: 2,
      marginHorizontal: '10%',
      marginVertical: '5%',
    },
    containerPrimary: {
      backgroundColor: 'white',
      borderColor: PRIMARY_COLOR,
      marginBottom: '-10%',
      padding: '4%',
      paddingVertical: '2%',
      borderRadius: 25,
      /*shadowColor: '#000000',
      shadowOffset: {
        width: 1,
        height: 1
    },
    shadowRadius: 1,
    shadowOpacity: 0.7*/
    },
    containerPrimaryOutline: {
      backgroundColor: 'transparent',
    },
    containerSecondary: {
      backgroundColor: 'white',
      borderColor: PRIMARY_COLOR,
      borderRadius: 8,
      borderWidth: 1.5,
      paddingHorizontal: '10%'
    },
    containerSelect: {
      backgroundColor: 'white',
      borderColor: PRIMARY_COLOR,
      borderRadius: 8,
      borderWidth: 1.5,
      width: '100%',
      padding: 0,
      margin: 0,
      marginLeft: 0,
      marginTop: 0,
      marginBottom: 0
    },
    containerSecondaryOutline: {
      backgroundColor: 'transparent',
    },
    containerLarge: {
      paddingVertical: 15,
    },
    containerSmall: {
      paddingVertical: 5,
    },
    containerDisabled: {
      opacity: 1,
    },
  
    // TextStyles
    textDefault: {
      fontSize: RFValue(15, 580),
      fontWeight: '500',
      color: '#fff',   
    },
    textPrimary: {
        color: PRIMARY_COLOR
    },
    textPrimaryOutline: {
      color: PRIMARY_COLOR,
    },
    textSecondary: {
      color: PRIMARY_COLOR,
      shadowColor: '#000000',
      shadowOffset: {
        width: 1,
        height: 1
      },
      shadowRadius: 1,
      shadowOpacity: 0.2
    },
    textSecondaryOutline: {
      color: SECONDARY_COLOR,
    },
    textLarge: {
      fontSize: RFValue(19, 580),
    },
    textSmall: {
      fontSize: RFValue(13, 580),
    },
    textDisabled: {
  
    },
  });

const getStyles = ({
    size,
    theme,
    outline,
    disabled,
}) => {
    const containerStyles = [styles.containerDefault];
    const textStyles = [styles.textDefault];

    if (size === 'large') {
        containerStyles.push(styles.containerLarge);
        textStyles.push(styles.textLarge);
    } else if (size === 'small') {
        containerStyles.push(styles.containerSmall);
        textStyles.push(styles.textSmall);
    }
    
    if (theme === 'secondary') {
        containerStyles.push(styles.containerSecondary);
        textStyles.push(styles.textSecondary);

    if (outline) {
        containerStyles.push(styles.containerSecondaryOutline);
        textStyles.push(styles.textSecondaryOutline);
    }
    } else if (theme === 'primary') {
        containerStyles.push(styles.containerPrimary);
        textStyles.push(styles.textPrimary);

    if (outline) {
        containerStyles.push(styles.containerPrimaryOutline);
        textStyles.push(styles.textPrimaryOutline);
    }
    }

    else {
      containerStyles.push(styles.containerSelect);
      textStyles.push(styles.textSecondary);
      if (outline) {
          containerStyles.push(styles.containerPrimaryOutline);
          textStyles.push(styles.textPrimaryOutline);
      }
  }

    if (disabled) {
        containerStyles.push(styles.containerDisabled);
        textStyles.push(styles.textDisabled);
    }

    return { containerStyles, textStyles };
}

export default class Button extends React.Component {
    static propTypes = {
        text: propTypes.string.isRequired,
        onPress: propTypes.func.isRequired,
        outline: propTypes.bool,
        size: propTypes.oneOf(['small', 'default', 'large']),
        theme: propTypes.oneOf(['primary', 'secondary']),
        disabled: propTypes.bool,
    };

    static defaultProps = {
        size: 'default',
        theme: 'primary',
        outline: false,
        disabled: false,
    }

    render() {
        const { text, onPress, disabled, ...rest } = this.props;
        const { textStyles, containerStyles } = getStyles({ disabled, ...rest });
        return (
            <TouchableOpacity onPress={onPress} disabled={disabled} style={containerStyles}>
                <Text style={textStyles}>{text}</Text>
            </TouchableOpacity>
        );
    }
}