import AddList from "./AddListItems";
import Card from "./Card";
import data from "./DataCart";

export default function Content() {
  return (
    <div>
      <div className=" flex justify-center gap-6">
        {data.productData.map((item, index) => {
          return (
            <Card
              key={index}
              item={item}
              img={item.img}
              title={item.title}
              desc={item.desc}
              price={item.price}
            />
          );
        })}
      </div>
      <AddList />
    </div>
  );
}
