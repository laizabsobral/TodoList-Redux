import { Provider as ReduxProvider } from "react-redux";

import { TodoList } from "./components/TodoList";
import { AddTodo } from "./components/addTodo";
import { store } from "./store";

export function App() {
  return (
    <ReduxProvider store={store}>
      <TodoList />
      <AddTodo />
    </ReduxProvider>
  );
}
