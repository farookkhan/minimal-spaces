import {programs} from '../../reducer/initialState';

export default function programsReducer(state=programs, {type}){
  switch(type) {
    default:
      return state;
  }
}
