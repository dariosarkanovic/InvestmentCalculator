import React from "react";

const Line = (props) => {
    return (
        <tr>
            <td>{props.year}</td>
            <td>{props.savingsEndOfYear}</td>
            <td>{props.yearlyInterest}</td>
            <td>{props.totalInterest}</td>
            <td>{props.invested}</td>
        </tr>
    )
}

export default Line;