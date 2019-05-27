import React, {Component} from 'react';
import {DatePickerIOS, View, StyleSheet} from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {chosenDate: new Date(), todayDate: new Date()};

    this.setDate = this.setDate.bind(this);

  }
  //state maintained for chosen date and today's date

  setDate(newDate) {
    this.setState({chosenDate: newDate});
    if(this.state.chosenDate>this.state.todayDate){
      alert('future')
    }
    else if(this.state.chosenDate<this.state.todayDate){
      alert('past')
    }
    else{
      alert('present')
    }
  }
  //function to show future past for selected date

  render() {
    return (
      <View style={styles.container}>
        <DatePickerIOS
          date={this.state.chosenDate}
          onDateChange={this.setDate}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});