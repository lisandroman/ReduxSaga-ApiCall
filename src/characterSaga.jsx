import {call, put, takeEvery} from 'redux-saga/effects'
import {getCharactersSuccess} from './charState'


function* workGetCharactersFetch() {
  const characters = yield call(()=> fetch('https://rickandmortyapi.com/api/character'))
  const formattedChars = yield characters.json()
  yield put(getCharactersSuccess(formattedChars))
}

function* characterSaga() {
  yield takeEvery('characters/getCharactersFetch', workGetCharactersFetch);
}

export default characterSaga;