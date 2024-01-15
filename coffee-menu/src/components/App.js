import React from "react";
import Payment from "./Payment";
import CoffeeItems from "./CoffeeItems";

export const coffeeItems = [
  {
    id: 1,
    name: "Cappuccino",
    cost: 20,
    description:
      "A cappuccino is an espresso-based coffee drink that is traditionally prepared with steamed milk foam.",
    img: "https://www.google.com/url?sa=i&url=http%3A%2F%2Ft2.gstatic.com%2Flicensed-image%3Fq%3Dtbn%3AANd9GcRqPnxhzG50sOFqBgyKvZtmOHiB3mwkR2YtId5jZG5nApAoiSDkXMK4Rxxqpkfg0ZW9&psig=AOvVaw1-HzawqlLtzjbR1vGZ685W&ust=1698416891098000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCNDigJD2k4IDFQAAAAAdAAAAABAE",
  },
  {
    id: 2,
    name: "Americano",
    cost: 18,
    description:
      "Caffè Americano is a type of coffee drink prepared by diluting an espresso shot with hot water at a 1:3 to 1:4 ratio, resulting in a drink that retains the complex flavors of espresso, but in a lighter",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsuEX-xLhTEeJqPmR4xxioJCP-lo55TXbYK48pfWqfcZAO8Y-xZZGnxtx3y5pgupbw2PU&usqp=CAU",
  },
  {
    id: 3,
    name: "Caffè mocha",
    cost: 15,
    description:
      "A caffè mocha, also called mocaccino, is a chocolate-flavoured warm beverage that is a variant of a caffè latte, commonly served in a glass rather than a mug.",
    img: "https://upload.wikimedia.org/wikipedia/commons/7/7e/Mocha_coffee.jpg",
  },
  {
    id: 4,
    name: "Latte",
    cost: 22,
    description:
      "Caffè latte, often shortened to just latte in English, is a coffee drink of Italian origin made with espresso and steamed milk.",
    img: "https://upload.wikimedia.org/wikipedia/commons/c/c6/Latte_art_3.jpg",
  },
  {
    id: 5,
    name: "Espresso",
    cost: 12,
    description:
      "Espresso is one of the most popular coffee-brewing methods, of Italian origin. The French also made a significant contribution to the invention of the first coffee makers.",
    img: "https://upload.wikimedia.org/wikipedia/commons/a/a5/Tazzina_di_caff%C3%A8_a_Ventimiglia.jpg",
  },
  {
    id: 6,
    name: "Macchiato",
    cost: 25,
    description:
      "Caffè macchiato, sometimes called espresso macchiato, is an espresso coffee drink with a small amount of milk, usually foamed. In Italian, macchiato means 'stained' or 'spotted'.",
    img: "https://upload.wikimedia.org/wikipedia/commons/0/07/Caff%C3%A8_Espresso_Macchiato_Schiumato.jpg",
  },
  {
    id: 7,
    name: "Café au lait",
    cost: 15,
    description:
      "Café au lait is coffee with hot milk added. It differs from white coffee, which is coffee with cold milk or other whiteners added.",
    img: "https://t2.gstatic.com/licensed-image?q=tbn:ANd9GcQCfUABZDgsbMr7990o5CxYKsY8bVzPQX6vaW8Ffpn0KOOexb3djN7eOnnDRzwdnLT9",
  },
  {
    id: 8,
    name: "Flat white",
    cost: 30,
    description:
      "A flat white is a coffee drink consisting of espresso with microfoam. It generally has a higher proportion of espresso to milk than a caffè latte.",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Flat_white_coffee_with_pretty_feather_pattern.jpg/1200px-Flat_white_coffee_with_pretty_feather_pattern.jpg",
  },
  {
    id: 9,
    name: "Cortado",
    cost: 28,
    description:
      "A cortado is a beverage consisting of espresso mixed with a roughly equal amount of warm milk to reduce the acidity, although the exact ratios have considerable regional variation.",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Caf%C3%A9Cortado%28Tallat%29.jpg/250px-Caf%C3%A9Cortado%28Tallat%29.jpg",
  },
];

export default function App() {
  return (
    <div className="app">
      <h2 className="a-heading">COFFEE MANIA</h2>
      <CoffeeItems coffeeItems={coffeeItems} />
      <Payment coffeeItems={coffeeItems} />
    </div>
  );
}
