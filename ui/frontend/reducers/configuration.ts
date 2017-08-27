import { Action, ActionType } from '../actions';
import { Channel } from '../types';

export interface State {
  shown: boolean,
  editor: string,
  keybinding: string,
  theme: string,
  orientation: string,
  assemblyFlavor: string,
  channel: Channel,
  mode: string,
};

export const DEFAULT: State = {
  shown: false,
  editor: "advanced",
  keybinding: "ace",
  theme: "github",
  orientation: "automatic",
  assemblyFlavor: "att",
  channel: Channel.Stable,
  mode: "debug",
};

export default function configuration(state = DEFAULT, action: Action): State {
  switch (action.type) {
  case ActionType.ToggleConfiguration:
    return { ...state, shown: !state.shown };
  case ActionType.ChangeEditor:
    return { ...state, editor: action.editor };
  case ActionType.ChangeKeybinding:
    return { ...state, keybinding: action.keybinding };
  case ActionType.ChangeTheme:
    return { ...state, theme: action.theme };
  case ActionType.ChangeOrientation:
    return { ...state, orientation: action.orientation };
  case ActionType.ChangeAssemblyFlavor:
    return { ...state, assemblyFlavor: action.assemblyFlavor };
  case ActionType.ChangeChannel:
    return { ...state, channel: action.channel };
  case ActionType.ChangeMode:
    return { ...state, mode: action.mode };
  default:
    return state;
  }
}
