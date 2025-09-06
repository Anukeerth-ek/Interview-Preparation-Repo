import { useReducer } from "react";
import type { FormEvent } from "react";

const FormInputReducer = () => {
     const reducer = (state: any, action: any) => {
          console.log("state", state);
          console.log("action", action);

          switch (action.type) {
               case "SET_USERNAME":
                    return { ...state, username: action.payload };

               case "SET_PASSWORD":
                    return { ...state, password: action.payload };

               case "RESET":
                    return initialState;

               default:
                    return state;
          }
     };

    const handleOnSubmit = (e:FormEvent) => {
         e.preventDefault()
          alert("Form submitted successfully!");
     };

     const initialState = {
          username: "",
          password: "",
     };

     const [state, dispatch] = useReducer(reducer, initialState);

     return (
          <div style={{ color: "white" }}>
               <h2>Form</h2>
               <form onSubmit={handleOnSubmit}>
                    <input
                         value={state.username}
                         onChange={(e) => dispatch({ type: "SET_USERNAME", payload: e.target.value })}
                         type="text"
                         placeholder="Enter your name"
                    />
                    <input
                         value={state.password}
                         onChange={(e) => dispatch({ type: "SET_PASSWORD", payload: e.target.value })}
                         type="password"
                         placeholder="Enter your password"
                    />

                    <button type="button" onClick={() => dispatch({ type: "RESET" })}>
                         Reset
                    </button>
                    <button type="submit">Submit</button>
               </form>
          </div>
     );
};

export default FormInputReducer;
