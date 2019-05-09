import React, {Component} from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import styles from './styles';

class Button extends Component {
    render() {
        return (
            <View style={[{opacity: this.props.disabled ? 0.4 : 1}, this.props.containerStyle]}>
                <TouchableOpacity activeOpacity={0.7} {...this.props} style={[styles.btn, this.props.style]}>
                    {this.props.children ?
                        this.props.children 
                        :
                        <Text style={[styles.title, this.props.titleStyle]}>{this.props.title}</Text>
                    }
                </TouchableOpacity>
            </View>
        )
    }
}

Button.defaultProps = {
    style: {}
};

export default Button;