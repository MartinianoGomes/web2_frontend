import { List } from "../HistoryList/List/List";
import { HistoryInfo } from "../HistoryList/HistoryInfo/HistoryInfo";
import historyList from "./historylist.module.css";

export function HistoryList() {
    return <div className={historyList.historylist}>
        <HistoryInfo />
        <List />
    </div>
}
