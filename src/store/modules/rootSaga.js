import { all } from 'react-redux/effects';

import cart from './cart/sagas';

export default function* rootSaga() {
  return yield all([cart]);
}
