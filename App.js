import React, {Component} from 'react';
import {View, ScrollView} from 'react-native';
import {Header, ImageCard, Layout} from './src/components/uikit';

const url =
  'https://gitlab.com/gHashTag/react-native-init-data/raw/master/db.json';

export default class App extends Component {
  state = {
    title: 'STARE GATE',
    data: [],
  };

  componentDidMount = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      this.setState({data});
      console.log('--->', this.state);
    } catch (e) {
      throw e;
    }
  };

  render() {
    const {data} = this.state;
    return (
      <View>
        <Header title={this.state.title} />
        <ScrollView>
          <Layout>
            {data.map(item => (
              <ImageCard data={item} key={item.id} />
            ))}
          </Layout>
        </ScrollView>
      </View>
    );
  }
}
