import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";

import { Cart } from "./pages/Cart";
import { Catalog } from "./pages/Catalog";
import { Tweets } from "./pages/Tweets";

export function AppRoutes() {
    return (
        <Router>
            <Routes>
                <Route path="/Catalog" element={<Catalog />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/tweets" element={<Tweets />} />
                <Route path="/" element={<Catalog />} />
            </Routes>
        </Router>
    );
}
