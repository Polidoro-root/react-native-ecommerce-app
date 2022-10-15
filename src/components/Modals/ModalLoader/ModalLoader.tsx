import React from 'react';
import LottieView from 'lottie-react-native';
import { Modal, ModalProps, View } from 'react-native';
import LoaderAnimationJSON from '@/assets/loader.json';

interface ModalLoaderProps extends ModalProps {}

export const ModalLoader = ({ style, ...props }: ModalLoaderProps) => {
  return (
    <Modal visible presentationStyle="fullScreen" animationType="fade" {...props}>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#000000aa',
        }}
      >
        <LottieView autoPlay loop source={LoaderAnimationJSON} resizeMode="contain" />
      </View>
    </Modal>
  );
};
