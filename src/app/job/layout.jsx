// import Header from "@/components/Header";
import Header from "../../components/Header"
import { EdgeStoreProvider } from "../../../lib/edgestore";

export default function jobLayout({ children }) {
    return (
        <div>
        <EdgeStoreProvider>
        <Header/>
        {children}
        </EdgeStoreProvider>
        </div>
    );
}
