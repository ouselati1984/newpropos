function Item ({product})

{

return (

    <>
    <tr>
<td><img src = 
{product.imgsrc} /></td>

   

<td>{product.name}</td>
<td>{product.price}</td>
</tr>
    </>
)

}
export default Item