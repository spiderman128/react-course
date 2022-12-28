import React from "react";

export default class TodoItem extends React.Component {
    render () {
        const {item} = this.props
        return (
            <li className="list-group-item">
                {item.title}
            </li>
        )
    }
}