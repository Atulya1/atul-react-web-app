import {Link} from "react-router-dom";
import Nav from "../../nav";
import Classes from "./classes";
import Styles from "./styles";
import ConditionalOutput from "./conditional-output";
import TodoItem from "./todo/TodoItem";
import TodoList from "./todo/TodoList";

function Assignment6() {
    return (
        <div>
            <h1>Assignment 6</h1>
            <TodoList/>
            <ConditionalOutput/>
            <Styles/>
            <Classes/>
        </div>
    );
}
export default Assignment6;