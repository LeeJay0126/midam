/*
    Component format : 
    img src address, image alt, item price, english dish name
    ** Will further develop the website to support language option for korean and chinese
*/


const MenuTypeList = [
    // Menu information about appetizers
    ["APPETIZER", [
        ["SpRiceCakeSk.png", "Picture of sw spicy ricecake skewer", "$7", "Sweet Chilli Ricecake Skewer"],
        ["TruffleFries.webp", "Picture of Truffle Fries", "$9", "Truffle Fries"],
        ["MozzarellaStick.webp", "Picture of Mozzarella Sticks", "$13", "Mozzarella Cheese Sticks (Homemade)"],
        ["CornCheese.webp", "Picture of CornCheese", "$10", "Corn with Cheese"],
        ["OldStyleLunchBox.webp", "Picture of  OldStyleLunchBox", "$11", "Old-Style Lunch Box"],
        ["PorkDumplings.webp", "Picture of PorkDumplings", "$13", "Hand-Made Deep-Fried Dumplings (8pcs)"],
    ]],
    ["SIGNATURE", [
        ["spUFO.webp", "Picture of spUFO", "$38", "Stir-Fried Spicy Chicken on UFO Grill"],
        ["UFO.webp", "Picture of UFO", "$38", "Stir-Fried Garlic Sauce Chicken on UFO Grill"],
        ["Buddae.webp", "Picture of Buddae", "$33", "Budae Hotpot"],
        ["question.jpeg", "Picture of Kimchi Dumpling Hotpot", "$32", "Kimchi Dumpling Hotpot"],
        ["question.jpeg", "Picture of BBG mushroom hotpot", "$37", "'Bulgoki' Mushroom Hotpot"],
        ["question.jpeg", "Picture of pork backbone soup hotpot", "$37", "Spicy Pork Back Bone Hotpot"],
    ]],
    ["SOUPS", [
        ["spKimchiPorkSoup.webp", "Picture of kimchipork soup", "$14", "Kimchi and Pork Tofu Soup"],
        ["spSeafoodSoup.webp", "Picture of seafood soup", "$15", "Spicy Seafood Tofu Soup"],
        ["question.jpeg", "Picture of non-sp seafood soup", "$15", "Non-Spicy Seafood Tofu Soup"],
        ["beefBrisketSoySoup.webp", "Picture of Beef Brisket soy soup", "$15", "Beef Brisket Soy Bean Paste Soup"],
        ["KimchiStew.webp", "Picture of Kimchi Stew", "$14", "Kimchi Stew (Pork)"],
        ["spPorkBackboneSoup.webp", "Picture of Pork Back Bone soup", "$16", "Spicy Pork Back Bone Soup"],
    ]],
    ["NOODLES", [
        ["KimchiBaconUdon.webp", "Picture of Kimchi Bacon Udon", "$14", "Kimchi Bacon Yaki Udon"],
        ["spSquidPorkbellyUdon.webp", "Picture of Sp BBQ Squid and Pork Yaki Udon", "$20", "Spicy BBQ Squid and Pork Belly Yaki Udon"],
        ["BBGUdon.webp", "Picture of BBG Yaki Udon", "$20", "Marinated Beef 'Bulgoki' Yaki Udon"],
        ["question.jpeg", "Picture of Japchae", "$19", "Stir-Fried Potato Starch Noodle 'Japchae'"],
        ["truffleJapchae.webp", "Picture of Truffle Japchae", "$22", "Truffle 'Japchae'"],
    ]],
    ["SOUL FOOD of SEOUL", [
        ["panFriedPork.webp", "Picture of Pan-Fried Sizzling Pork Belly", "$27", "Pan-Fried Sizzling Pork Belly"],
        ["spChickenCheese.webp", "Picture of sp Chick and cheese", "Half $14 / Full $24", "Sizzling Spicy Chicken with Cheese"],
        ["bbqsquidpork.webp", "Picture of sp squid and pork belly", "$18", "Stir-Fried Spicy Squid and Pork Belly"],
        ["spPorkBBG.webp", "Picture of sp pork bbg", "$19", "Stir-Fried Spicy Pork 'Bulgoki'"],
    ]],
    ["KOREAN FRIED CHICKEN", [
        ["originalCh.webp", "Picture of original", "Half $14 / Full $25", "Deep-Fried Boneless Chicken"],
        ["swspCh.webp", "Picture of swspCh", "Half $15 / Full $27", "Sweet & Spicy Fried Boneless Chicken"],
        ["question.jpeg", "Picture of soyCh", "Half $15 / Full $27", "Soy Garlic Fried Boneless Chicken"],
        ["question.jpeg", "Picture of honeyCh", "Half $15 / Full $27", "Honey Mustard Fried Boneless Chicken"],
    ]],
    ["RICE BOWL", [
        ["bbb.webp", "Picture of original", "$15", "Stone Pot Bibimbap"],
        ["bbgbbb.webp", "Picture of bbgbbb", "$16", "'Bulgoki' Stone Pot Bibimbap"],
        ["question.jpeg", "Picture of spbbb", "$16", "Spicy Pork 'Bulgoki' Stone Pot Bibimbap"],
        ["question.jpeg", "Picture of squidbbb", "$17", "Spicy Stir-Fried Squid and Pork Belly Stone Pot Bibimbap"],
        ["question.jpeg", "Picture of brisketbbb", "$16", "Beef Brisket Stone Pot Bibimbap"],
        ["kimchibbb.webp", "Picture of kimchibbb", "$13", "Kimchi Bacon Fried Rice"],
    ]],
    ["PASTA", [
        ["RoseKFC.webp", "Picture of RoseKFC", "$29", "Rose Pasta with Korean Fried Chicken"],
        ["RosePork.webp", "Picture of RosePork", "$19", "Rose Pasta with Grilled Fresh Pork Belly"],
        ["BBGCreamPasta.webp", "Picture of BBG Cream Pasta", "$19", "'Bulgoki' Cream Pasta"],
        ["Carbonara.webp", "Picture of Carbonara", "$29", "Carbonara Chicken"],
    ]]
];

export default MenuTypeList;