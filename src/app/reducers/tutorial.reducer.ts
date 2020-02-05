import { Action } from '@ngrx/store';
import { Tutorial } from '../models/tutorial.model';
import * as TutorialActions from '../actions/tutorial.actions';

const initialState: Tutorial[] = [
  {
    name: 'Initial Tutorial',
    url: 'google.com'
  },
  {
    name: 'Initial Tutorial1',
    url: 'google.com'
  },
  {
    name: 'Initial Tutorial2',
    url: 'google.com'
  },
  {
    name: 'Initial Tutorial3',
    url: 'google.com'
  },
  {
    name: 'Initial Tutorial4',
    url: 'google.com'
  },
  {
    name: 'Initial Tutorial5',
    url: 'google.com'
  },
  {
    name: 'Initial Tutorial6',
    url: 'google.com'
  },
  {
    name: 'Initial Tutorial7',
    url: 'google.com'
  },
  {
    name: 'Initial Tutorial8',
    url: 'google.com'
  },
  {
    name: 'Initial Tutorial9',
    url: 'google.com'
  },
  {
    name: 'Initial Tutorial10',
    url: 'google.com'
  },
  {
    name: 'Initial Tutorial11',
    url: 'google.com'
  },
];

export function reducer(
  state: Tutorial[] = initialState,
  action: TutorialActions.Actions
){
  switch(action.type){
    case TutorialActions.ADD_TUTORIAL:
      return [...state, action.payload];
    case TutorialActions.REMOVE_TUTORIAL:
      state.splice(<number>action.payload, 1);
      return state;
    default:
      return state;
  }
}
