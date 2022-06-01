import {Link} from "react-router-dom";

const GamesTableBody = ({tableData, columns}) => {
    return (
        <tbody>
        {tableData.map((data) => {
            let id;
            return (
                <tr key={data.id}>
                    {columns.map(({accessor}) => {
                        const tData = data[accessor] ? data[accessor] : "——";
                        if(accessor === "id"){
                            id = tData;
                        }
                        if (accessor === "tags") {
                            return <td key={accessor}>
                                <ul>
                                    {
                                        tData.map((tag) => {
                                            return (
                                                <li key={tag.id}>{tag.name}</li>
                                            )
                                        })
                                    }
                                </ul>
                            </td>;
                        }
                        if( accessor === "settings"){
                            return <td key={accessor}><Link to={`game/${id}`}>Szczegóły</Link></td>;
                        }
                        return <td key={accessor}>{tData}</td>;
                    })}
                </tr>
            );
        })}
        </tbody>
    );
};

export default GamesTableBody;