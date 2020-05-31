import {useCallback} from 'react';

interface Options {
  onTrue?: Function;
  onElse?: Function;
}

export const useExecOnly = (state: boolean, defaultOptions?: Options) => {
  return useCallback(
    (onTrue: Function, onElse?: Function) => {
      const trueHanlder = onTrue || defaultOptions?.onTrue;
      const elseHanlder = onElse || defaultOptions?.onElse;

      return (...args: any[]) => {
        if (state) {
          if (trueHanlder) {
            trueHanlder(...args);
          }
        } else {
          if (elseHanlder) {
            elseHanlder(...args);
          }
        }
      };
    },
    [state, defaultOptions],
  );
};

// const execOnlyContainerOpenned = useCallback(
//   (callback: Function) => {
//     return (...args: any[]) => {
//       if (!isOpenned) {
//         setOpenned(true);
//       } else {
//         callback(...args);
//       }
//     };
//   },
//   [isOpenned],
// );
