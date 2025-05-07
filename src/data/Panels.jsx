import ProfileUsers from "../pages/panel/Profile/ProfileUser/ProfileUsers";
import Products from "../pages/panel/Profile/Products/Products";

const ArrowOfPanels = [
    {
        name: 'ProfileUsers',
        content: <ProfileUsers />
    },
    {
        name: 'ProductsPanel',
        content: <Products />
    }
]

export default ArrowOfPanels;
