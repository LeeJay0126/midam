/*
    Component format : 
    img src address, image alt, item price, english dish name
    ** Will further develop the website to support language option for korean and chinese
*/


const MenuTypeList = [
    // Menu information about appetizers
    ["APPETIZER", [
        ["SpRiceCakeSk.png", "Picture of sw spicy ricecake skewer", "$8", "Sweet Chilli Ricecake Skewer"],
        ["TruffleFries.webp", "Picture of Truffle Fries", "$9", "Truffle Fries"],
        ["MozzarellaStick.webp", "Picture of Mozzarella Sticks", "$14", "Mozzarella Cheese Sticks (Homemade)"],
        ["CornCheese.webp", "Picture of CornCheese", "$10", "Corn with Cheese"],
        ["OldStyleLunchBox.webp", "Picture of  OldStyleLunchBox", "$11", "Old-Style Lunch Box"],
        ["PorkDumplings.webp", "Picture of PorkDumplings", "(5) $9 / (8) $14", "Hand-Made Deep-Fried Dumplings"],
    ], false, ""],
    ["SIGNATURE", [
        ["spUFO.webp", "Picture of spUFO", "$45", "Spicy Chicken on UFO Grill"],
        ["UFO.webp", "Picture of UFO", "$45", "Garlic Sauce Chicken on UFO Grill"],
        ["Buddae.webp", "Picture of Buddae", "$40", "Budae Hotpot"],
        ["question.jpeg", "Picture of Kimchi Dumpling Hotpot", "$38", "Kimchi Dumpling Hotpot"],
        ["question.jpeg", "Picture of BBG mushroom hotpot", "$42", "'Bulgoki' Mushroom Hotpot"],
        ["question.jpeg", "Picture of pork backbone soup hotpot", "$42", "Spicy Pork Back Bone Hotpot"],
    ], true, "Includes 2 bowls of Rice"],
    ["SOUPS", [
        ["spKimchiPorkSoup.webp", "Picture of kimchipork soup", "$16", "Kimchi and Pork Tofu Soup"],
        ["spSeafoodSoup.webp", "Picture of seafood soup", "$17", "Spicy Seafood Tofu Soup"],
        ["question.jpeg", "Picture of non-sp seafood soup", "$17", "Non-Spicy Seafood Tofu Soup"],
        ["question.jpeg", "Picture of curry kimchi porkbelly soup", "$16", "Curry Kimchi Tofu Soup (Pork Belly)"],
        ["question.jpeg", "Picture of curry seafood tofu soup", "$18", "Curry Seafood Tofu Soup"],
        ["question.jpeg", "Picture of sesame tofu soup", "$15", "Sesame Tofu Soup"],
        ["beefBrisketSoySoup.webp", "Picture of Beef Brisket soy soup", "$16", "Beef Brisket Soy Bean Stew"],
        ["question.jpeg", "Picture of seafood soy soup", "$17", "Seafood Soy Bean Stew"],
        ["KimchiStew.webp", "Picture of Kimchi Stew", "$16", "Kimchi Stew (Pork)"],
        ["spPorkBackboneSoup.webp", "Picture of Pork Back Bone soup", "$18", "Spicy Pork Back Bone Soup"],
    ], true, "Includes a bowl of Rice"],
    ["NOODLES", [
        ["KimchiBaconUdon.webp", "Picture of Kimchi Bacon Udon", "$14", "Kimchi Bacon Yaki Udon"],
        ["spSquidPorkbellyUdon.webp", "Picture of Sp BBQ Squid and Pork Yaki Udon", "$25", "Spicy BBQ Squid and Pork Belly Yaki Udon"],
        ["BBGUdon.webp", "Picture of BBG Yaki Udon", "$22", "Marinated Beef 'Bulgoki' Yaki Udon"],
        ["question.jpeg", "Picture of Japchae", "$24", "Potato Noodle 'Japchae'"],
        ["truffleJapchae.webp", "Picture of Truffle Japchae", "$27", "Truffle 'Japchae'"],
    ], false],
    ["KOREAN BBQ", [
        ["panFriedPork.webp", "Picture of Sizzling Pork Belly", "$35", "Sizzling Pork Belly"],
        ["spChickenCheese.webp", "Picture of sp Chick and cheese", "Half $16 / Full $29", "Sizzling Spicy Chicken with Cheese"],
        ["bbqsquidpork.webp", "Picture of sp squid and pork belly", "$23", "BBQ Squid and Pork Belly"],
        ["spPorkBBG.webp", "Picture of sp pork bbg", "$21", "BBQ Pork 'Bulgogi'"],
        ["question.jpeg", "Picture of bbg", "$21", "BBQ Beef 'Bulgogi'"],
    ], false],
    ["KOREAN FRIED CHICKEN", [
        ["originalCh.webp", "Picture of original", "Half $15 / Full $27", "Original"],
        ["swspCh.webp", "Picture of swspCh", "Half $16 / Full $29", "Sweet & Spicy"],
        ["question.jpeg", "Picture of soyCh", "Half $16 / Full $29", "Soy Garlic"],
        ["question.jpeg", "Picture of honeyCh", "Half $16 / Full $29", "Honey Mustard"],
    ], true, "Boneless"],
    ["RICE BOWL", [
        ["bbb.webp", "Picture of original", "$17", "Stone Pot Bibimbap"],
        ["bbgbbb.webp", "Picture of bbgbbb", "$18", "'Bulgogi' Stone Pot Bibimbap"],
        ["question.jpeg", "Picture of spbbb", "$18", "BBQ Pork 'Bulgogi' Stone Pot Bibimbap"],
        ["question.jpeg", "Picture of squidbbb", "$19", "BBQ Squid and Pork Belly Stone Pot Bibimbap"],
        ["question.jpeg", "Picture of brisketbbb", "$18", "Beef Brisket Stone Pot Bibimbap"],
        ["kimchibbb.webp", "Picture of kimchibbb", "$15", "Kimchi Bacon Fried Rice"],
    ], true, "Includes Rice and an Egg"],
    ["VEGETARIAN", [
        ["question.jpeg", "Picture of Korean Fried Cauliflower", "$15", "Korean Fried Cauliflower"],
        ["question.jpeg", "Picture of Korean Fried Cauliflower soy", "$15", "KFC Soy Garlic"],
        ["question.jpeg", "Picture of Korean Fried Cauliflower sweet & spicy", "$15", "KFC Sweet & Spicy"],
        ["question.jpeg", "Picture of Korean Fried Cauliflower honey mustard", "$15", "KFC Honey Mustard"],
        ["question.jpeg", "Picture of Vegetarian Kimchi Tofu Soup", "$14", "Vegetarian Kimchi Tofu Soup"],
        ["question.jpeg", "Picture of Vegetarian Curry Kimchi Tofu Soup", "$15", "Vegetarian Curry Kimchi Tofu Soup"],
        ["question.jpeg", "Picture of Vegetarian Kimchi Yaki Udon", "$13", "Vegetarian Kimchi Yaki Udon"],
        ["question.jpeg", "Picture of Vegetarian Kimchi Fried Rice", "$14", "Vegetarian Kimchi Fried Rice"],
        ["question.jpeg", "Picture of Vegetarian Truffle Japchae", "$22", "Vegetarian Truffle Japchae"],
        ["question.jpeg", "Picture of Vegetarian Bibimbap", "$15", "Vegetarian Bibimbap"],
        ["question.jpeg", "Picture of Vegetarian Tofu and Mushroom Bibimbap", "$18", "Vegetarian Tofu and Mushroom Bibimbap"],
    ], true, "Our Proud All Vegetarian Menu"],
    ["PASTA", [
        ["RoseKFC.jpg", "Picture of RoseKFC", "$35", "Rose Pasta with Korean Fried Chicken"],
        ["RosePork.webp", "Picture of RosePork", "$25", "Rose Pasta with Grilled Fresh Pork Belly"],
        ["BBGCreamPasta.webp", "Picture of BBG Cream Pasta", "$25", "'Bulgogi' Cream Pasta"],
        ["Carbonara.webp", "Picture of Carbonara", "$35", "Carbonara Chicken"],
    ], true, "All of Our Pasta Dishes Contain Diced Bacon"]
];

export default MenuTypeList;