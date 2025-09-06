import { useReducer } from "react";

const reducer = (state: any, action: any) => {
     switch (action.type) {
          case "decrement":
               return { count: state.count - 1 };
          case "reset":
               return { count: 0 };
          case "increment":
               return { count: state.count + 1 };
          default:
               return state;
     }
};

const LearningUseReducer = () => {
     const [state, dispatch] = useReducer(reducer, { count: 0 });
     return (
          <>
               <button onClick={() => dispatch({ type: "decrement" })}>Decrement</button>
               <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
               <button onClick={() => dispatch({ type: "increment" })}>Increment</button>

               <p> current Value: {state.count}</p>
          </>
     );
};

export default LearningUseReducer;
