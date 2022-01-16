import Notebook from "../Notebook/Notebook";
const notebooks = [
    {
        id:1,
        brand:'Apple',
        model: 'Pro',
        cost: 100,
        img: 'https://www.apple.com/v/macbook-pro-14-and-16/b/images/meta/macbook-pro-14-and-16_overview__fz0lron5xyuu_og.png'
    },
    {
        id: 2,
        brand: 'HP',
        model: '15s',
        cost: 1000,
        img: 'https://img.ktc.ua/img/base/1/1/333871.jpg'
    },
    {
        id: 3,
        brand: 'ASUS',
        model: 'S15',
        cost: 1500,
        img: 'https://dlcdnwebimgs.asus.com/gain/418d0f3b-aeef-44a0-81e0-4a68cc46e9f0/'
    }
]

const Notebooks = () => {
    return (
<div>
    {notebooks.map(notebook=><Notebook note={notebook}/>)}
</div>

    );
};
export default Notebooks;
