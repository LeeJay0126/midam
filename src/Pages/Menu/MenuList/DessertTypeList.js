/*
    Component format : 
    img src address, image alt, item price, english dish name
    ** Will further develop the website to support language option for korean and chinese
*/

const DessertTypeList = [
    ["GRILLED RICECAKE", [
        ["question.jpeg", "Grilled Rice cake", "$7", "Grilled Ricecake served with Maple Syrup"],
        ["question.jpeg", "Grilled Rice cake churros", "$9", "Ricecake Churros served with a Vanilla Icecream"],
        ["question.jpeg", "Grilled Rice cake with 3 cheese", "$9", "Grilled Ricecake with Three Different Cheese"],
    ], false],
    ["SHAVED ICE", [
        ["snowflake.webp", "original shavedice", "$14", "Snowflake Shaved Ice"],
        ["multigrain.webp", "Multi grain shavedice", "$16", "Multi-Grain Shaved Ice"],
        ["strawberryIce.webp", "Strawberry shavedice", "$15", "Strawberry Shortcake Shaved Ice"],
        ["oreoIce.webp", "Oreo shavedice", "$14", "Oreo Shaved Ice"],
        ["tiramisu.webp", "Tiramisu shavedice", "$15", "Tiramisu Shaved Ice"],
    ], false],
    ["SHAKE & SMOOTHIE", [
        ["roastedgrain.webp", "21 Grain Shake", "$7", "Roasted Grain Shake"],
        ["question.jpeg", "Gelato Milk Shake", "$7", "Chocolate Gelato Milkshake"],
        ["question.jpeg", "Gelato Milk Shake", "$7", "Green Tea Gelato Milkshake"],
        ["question.jpeg", "Gelato Milk Shake", "$7", "Vanilla Gelato Milkshake"],
        ["question.jpeg", "Gelato Milk Shake", "$7", "Oreo Gelato Milkshake"],
        ["question.jpeg", "Gelato Milk Shake", "$7", "Strawberry Gelato Milkshake"],
        ["question.jpeg", "Real Fruit Yogurt Smoothie", "$8", "Real Fruit Yogurt Smoothie (Blueberry)"],
        ["question.jpeg", "Real Fruit Yogurt Smoothie", "$8", "Real Fruit Yogurt Smoothie (Strawberry)"],
    ], false],
    ["WAFFLES & TOAST", [
        ["gtcro.webp", "Green Tea Cro-waffle", "$17", "Green Tea Cro-waffle & Green tea Icecream"],
        ["question.jpeg", "Oreo Ricecake Waffle", "$12", "Oreo Ricecake Waffle Oreo Icecream"],
        ["sbcro.webp", "Strawberry Mochi Toast", "$15", "Strawberry Mochi Toast"],
        ["chocotoast.webp", "Chocolate Mochi Toast", "$15", "Chocolate Mochi Toast"],
        ["beanflourtoast.webp", "Bean Flour Mochi Toast", "$11", "Bean Flour Mochi Toast"],
        ["question.jpeg", "Sizzling Matcha Mochi Toast", "$14", "Sizzling Matcha Mochi Toast"],
    ], true, "toast breads freshly made by 'Maison Mori'"],
];

export default DessertTypeList;