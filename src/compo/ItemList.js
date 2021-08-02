
import Item from "./Item";
function ItemList ({ItemArray})

{

return (



    <div>
        <table>
<thead>
<tr>
<td>Photo</td>
<td>Name</td>
<td>Price</td>
</tr>


</thead>

<tbody>
{ItemArray.map((item) =>( <Item product={item} />
))}


</tbody>





        </table>



    </div>
)

}
export default ItemList