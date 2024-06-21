import data from "@/data/library.json";
import { listType } from "@/typesOrInterface/types";

const getList = (): listType[] => data.sidebar.list;

export default getList;
