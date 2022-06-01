import { useState } from "react";
import GamesTableHead from "./gamesTableHead";
import GamesTableBody from "./gamesTableBody";

const GamesTable = (games) => {
    const [tableData, setTableData] = useState(games)


    const columns = [
        { label: "Tytuł gry", accessor: "name", sortable: false },
        { label: "ID", accessor: "id", sortable: true },
        { label: "Ocena", accessor: "rate", sortable: true },
        { label: "Deweloper", accessor: "developer", sortable: false },
        { label: "Wydano w", accessor: "release", sortable: true },
        { label: "Sprzedane kopie", accessor: "soldCopies", sortable: true },
        { label: "Tagi", accessor: "tags", sortable: false },
        { label: "Opcje", accessor: "settings", sortable: false },
    ];

    return (
        <>
            <table className="table">
                <GamesTableHead columns={columns} />
                <GamesTableBody columns={columns} tableData={tableData.games} />
            </table>
        </>
    );
};

export default GamesTable;