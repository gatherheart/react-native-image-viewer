import React, { Component } from 'react';
import { View, Modal, TouchableNativeFeedback, Text, Dimensions, ActivityIndicator } from 'react-native';
import ImageViewer from './built/index';

const { width, height } = Dimensions.get('window');
const images = [
  {
    // Simplest usage.
    url: 'https://avatars2.githubusercontent.com/u/7970947?v=3&s=460',
    // url:
    // "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1527660246058&di=6f0f1b19cf05a64317cbc5d2b3713d64&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F0112a85874bd24a801219c7729e77d.jpg",
    // You can pass props to <Image />.
    props: {
      // headers: ...
      //source: require('./img.png')
    },
    freeHeight: true
  },
  {
    // Simplest usage.
    url:
      'https://images.unsplash.com/photo-1593530115797-69cea1104197?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80',
    //url:
    // 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1527660246058&di=6f0f1b19cf05a64317cbc5d2b3713d64&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F0112a85874bd24a801219c7729e77d.jpg',
    // You can pass props to <Image />.
    props: {
      // headers: ...
      //source: require('./img.png')
    },
    freeHeight: true
  },
  {
    // Simplest usage.
    url: 'https://avatars2.githubusercontent.com/u/7970947?v=3&s=460',
    // url:
    // "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1527660246058&di=6f0f1b19cf05a64317cbc5d2b3713d64&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F0112a85874bd24a801219c7729e77d.jpg",
    // You can pass props to <Image />.
    props: {
      // headers: ...
      //source: require('./img.png')
    },
    freeHeight: true
  },
  {
    // Simplest usage.
    url:
      'https://images.unsplash.com/photo-1593530115797-69cea1104197?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80',
    //url:
    // 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1527660246058&di=6f0f1b19cf05a64317cbc5d2b3713d64&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F0112a85874bd24a801219c7729e77d.jpg',
    // You can pass props to <Image />.
    props: {
      // headers: ...
      //source: require('./img.png')
    },
    freeHeight: true
  },
  {
    // Simplest usage.
    url: 'https://avatars2.githubusercontent.com/u/7970947?v=3&s=460',
    // url:
    // "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1527660246058&di=6f0f1b19cf05a64317cbc5d2b3713d64&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F0112a85874bd24a801219c7729e77d.jpg",
    // You can pass props to <Image />.
    props: {
      // headers: ...
      //source: require('./img.png')
    },
    freeHeight: true
  },
  {
    // Simplest usage.
    url:
      'https://images.unsplash.com/photo-1593530115797-69cea1104197?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80',
    //url:
    // 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1527660246058&di=6f0f1b19cf05a64317cbc5d2b3713d64&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F0112a85874bd24a801219c7729e77d.jpg',
    // You can pass props to <Image />.
    props: {
      // headers: ...
      //source: require('./img.png')
    },
    freeHeight: true
  },
  {
    // Simplest usage.
    url: 'https://avatars2.githubusercontent.com/u/7970947?v=3&s=460',
    // url:
    // "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1527660246058&di=6f0f1b19cf05a64317cbc5d2b3713d64&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F0112a85874bd24a801219c7729e77d.jpg",
    // You can pass props to <Image />.
    props: {
      // headers: ...
      //source: require('./img.png')
    },
    freeHeight: true
  }
];

export default class Main extends Component {
  state = {
    index: 0,
    modalVisible: true
  };

  render() {
    return (
      <View
        style={{
          flex: 1
        }}
      >
        <ImageViewer
          imageUrls={images}
          index={this.state.index}
          onSwipeDown={() => {
            console.log('onSwipeDown');
          }}
          enableSwipeDown={false}
          enablePreload={true}
          interval={20}
          index={3}
          loadingRender={() => {
            return (
              <ActivityIndicator
                color={'red'}
                size="large"
                style={{
                  height: Dimensions.get('window').height,
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              />
            );
          }}
        />
      </View>
    );
  }
}
