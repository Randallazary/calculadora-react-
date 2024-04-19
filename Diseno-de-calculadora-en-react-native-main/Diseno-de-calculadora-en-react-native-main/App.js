import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { calculatorStyles } from './componentes/estilos'; 

const Calculator = () => {
  const [displayValue, setDisplayValue] = useState('0');

  return (
    <View style={calculatorStyles.container}>
      <Text style={calculatorStyles.display}>{displayValue}</Text>
      <View style={calculatorStyles.row}>
      <TouchableOpacity style={calculatorStyles.button}>
          <Text style={calculatorStyles.buttonText}>%</Text>
        </TouchableOpacity>
        <TouchableOpacity style={calculatorStyles.button}>
          <Text style={calculatorStyles.buttonText}>CE</Text>
        </TouchableOpacity>
        <TouchableOpacity style={calculatorStyles.button}>
          <Text style={calculatorStyles.buttonText}>C</Text>
        </TouchableOpacity>
        <TouchableOpacity style={calculatorStyles.button}>
          <Text style={calculatorStyles.buttonText}>/</Text>
        </TouchableOpacity>
      </View>
      <View style={calculatorStyles.row}>
        <TouchableOpacity style={calculatorStyles.button}>
          <Text style={calculatorStyles.buttonText}>7</Text>
        </TouchableOpacity>
        <TouchableOpacity style={calculatorStyles.button}>
          <Text style={calculatorStyles.buttonText}>8</Text>
        </TouchableOpacity>
        <TouchableOpacity style={calculatorStyles.button}>
          <Text style={calculatorStyles.buttonText}>9</Text>
        </TouchableOpacity>
        <TouchableOpacity style={calculatorStyles.button}>
          <Text style={calculatorStyles.buttonText}>*</Text>
        </TouchableOpacity>
      </View>
      <View style={calculatorStyles.row}>
        <TouchableOpacity style={calculatorStyles.button}>
          <Text style={calculatorStyles.buttonText}>4</Text>
        </TouchableOpacity>
        <TouchableOpacity style={calculatorStyles.button}>
          <Text style={calculatorStyles.buttonText}>5</Text>
        </TouchableOpacity>
        <TouchableOpacity style={calculatorStyles.button}>
          <Text style={calculatorStyles.buttonText}>6</Text>
        </TouchableOpacity>
        <TouchableOpacity style={calculatorStyles.button}>
          <Text style={calculatorStyles.buttonText}>-</Text>
        </TouchableOpacity>
      </View>
      <View style={calculatorStyles.row}>
        <TouchableOpacity style={calculatorStyles.button}>
          <Text style={calculatorStyles.buttonText}>1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={calculatorStyles.button}>
          <Text style={calculatorStyles.buttonText}>2</Text>
        </TouchableOpacity>
        <TouchableOpacity style={calculatorStyles.button}>
          <Text style={calculatorStyles.buttonText}>3</Text>
        </TouchableOpacity>
        <TouchableOpacity style={calculatorStyles.button}>
          <Text style={calculatorStyles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
      <View style={calculatorStyles.row}>
        <TouchableOpacity style={calculatorStyles.button}>
          <Text style={calculatorStyles.buttonText}>0</Text>
        </TouchableOpacity>
        <TouchableOpacity style={calculatorStyles.button}>
          <Text style={calculatorStyles.buttonText}>.</Text>
        </TouchableOpacity>
        <TouchableOpacity style={calculatorStyles.button}>
          <Text style={calculatorStyles.buttonText}>=</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Calculator;
