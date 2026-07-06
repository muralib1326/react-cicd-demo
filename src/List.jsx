function List(){
 const products = [
    {id:1,name:"Phone"},
    {id:2,name:"Laptop"}
  ];
return(
<>
<ul>
    {products.map((product)=><li>{product.id}{product.name}</li>)}
</ul>
</>
);

}

export default List;