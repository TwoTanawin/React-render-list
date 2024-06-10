
import PropsType from 'prop-types'

function List(props){


    // fruits.sort((a, b) => a.name.localeCompare(b.name))
    // fruits.sort((a, b) => a.calories - b.calories) //NUMERIC

    // const lowCalFruits = fruits.filter(fruit => fruit.calories < 100)
    // const highCalFruits = fruits.filter(fruit => fruit.calories > 100)
    const category = props.calories
    const listItem = props.items;


    const listItems = listItem.map(item => <li key={item.id}>
                                            {item.name}: &nbsp;
                                            <b>{item.calories}</b></li>)
    return (
        <>
        <h3 className="list-category">{category}</h3>
        <ol className="list-item">{listItems}</ol>
        </>
    );
}

List.PropsType = {
    category: PropsType.string,
    items: PropsType.arrayOf(PropsType.shape({id: PropsType.number,
                                              name: PropsType.string,
                                              calories: PropsType.number
    }))
}

List.default = {
    category: "calories",
    items: []
}

export default List