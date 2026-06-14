import { createNavigationContainerRef } from '@react-navigation/native';
import { RootStackParamList } from '@WOPractical/constants';

const navigationRef =
  createNavigationContainerRef<RootStackParamList>();

export default navigationRef;
