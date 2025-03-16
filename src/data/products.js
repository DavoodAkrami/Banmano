import { caffeineContent_strong_name, caffeineContent_medium_name, caffeineContent_weak_name, caffeineContent_strong_id, caffeineContent_medium_id, caffeineContent_weak_id} from "../constants/CaffeineContent";
import { category_coffeebeans_name, category_instantcoffee_name, category_groundcoffee_name, category_coffeebeans_id, category_groundcoffee_id, category_instantcoffee_id} from "../constants/categories";


const products = [
    {
        name: "دانه قهوه اسپرسو جیورن",
        englishName: "GIORNO ESPRESSO COFFEE BEANS", 
        id: "Jiorno coffee",
        SKU: '352130000192',
        price: 268000,
        Species: "%50 عربیکا و %50 ربوستا",
        Score: 3.5,
        CaffeineContent: caffeineContent_medium_name,
        CaffeineContentId: caffeineContent_medium_id,
        Origin: "آفریقا،آمریکای مرکزی",
        Ingredients: "دانه اسپرسو",
        category: category_coffeebeans_name,
        categoryId: category_coffeebeans_id,
        imageUrl: [
            "https://s3-alpha-sig.figma.com/img/6933/efdc/04a892340894814b99ad6fbccc9164a7?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=MWzcNbNfLmEwlWzZzCR4SsU4SC4tr-O9hwtK8ajHdYDrr6ez3Ilyg0hdbyNkcIkyVc7s1ETxeBledbCp3a6m~wXcWNOkMHCvraX0Uf5BaV2f-kHuAc863DPTRH2d5~DO8pO27xl8prUgkkR9G6FEeNjMB1ZTuarLrP-cOtlegMIp2wXQPnB4gkT1LVRSi0slGdlQx17l9255m7RDJbEfH5tLAXgn-oQMhPZ7DqxLo3it1aRFO1iQHWIIgSsCqhdRiIjqMGKg0BdJBGEXTlHTC72XZOfz1ea4JhkfjORCyU1Np2w0EFmUZyoF1~ar4nb0wnzj6MFigv9Uq8X8b6WYvA__",
            "https://s3-alpha-sig.figma.com/img/7bc9/73ed/025b7dffc54e7bf84aae81dc7cf09932?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=q5VaunlOzd4cbzG4kVQAmEAy09Br5U6DLJ2N8uGYd04y7o9CPrPWr4CN2LIBYArkZIT1fS6MspFBmfYVhHZAazXxEwY9d26KnQJ3N5w7hOQqMKBh~IIf-sTgKOd3tjJ8Tx-xe2DRX~W~RjA4aW2~GoanXE2~KoxQZV6W-wvqPxlKxYV7UXKnP7WpZ9LZSKCvT3wPJ60Fdewjc4JJhfjNDGscgxtexNdYz7zTP3Srw0z19atZc1b69Fi5VAUi3TujYMgRksIQ8wHqG7s9DUfx~av6~j4x2jU2AEZ9ybK0hd~wvOY3q-EET1zQ2SggDIasiUkPepZC4WjjFAIonvjE1w__",
            "https://s3-alpha-sig.figma.com/img/f1e3/6c4a/d4c9f3646f157ab0e8a6db2f8cde5225?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=D1nUG71k5yscqTJ0Q2NbQxE6aotdjLQqfA1O8w34fH1rJQqAAVtn1z4-ZK6vW~q8Wy3Y0PJSOSrpLS2ifRP~Ar2kcequplFp~UmSBZHj~~USCTU1BUFW49ZUUmQlIBAZFtfSEY79ye4gsd7H~Bs0cwkO8J79lFqTmz3HxbvV-EAYqgImkJBZLi4tQB03lCIj~~B3Kr3XylEqEGRT5C0CLPUjElc-12pMHGLfwM9JEVUbrXDxi-rb45vIaKyjYghB0yBNOrWZ9DBAY-ghy6VyBa-470F7Agp963qW-VPBnHo92YdGezr2ugoWyEdbdGImAZMxKVbxi4Y88WTTfizWFw__",
            "https://s3-alpha-sig.figma.com/img/6933/efdc/04a892340894814b99ad6fbccc9164a7?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=MWzcNbNfLmEwlWzZzCR4SsU4SC4tr-O9hwtK8ajHdYDrr6ez3Ilyg0hdbyNkcIkyVc7s1ETxeBledbCp3a6m~wXcWNOkMHCvraX0Uf5BaV2f-kHuAc863DPTRH2d5~DO8pO27xl8prUgkkR9G6FEeNjMB1ZTuarLrP-cOtlegMIp2wXQPnB4gkT1LVRSi0slGdlQx17l9255m7RDJbEfH5tLAXgn-oQMhPZ7DqxLo3it1aRFO1iQHWIIgSsCqhdRiIjqMGKg0BdJBGEXTlHTC72XZOfz1ea4JhkfjORCyU1Np2w0EFmUZyoF1~ar4nb0wnzj6MFigv9Uq8X8b6WYvA__",
            "https://s3-alpha-sig.figma.com/img/7bc9/73ed/025b7dffc54e7bf84aae81dc7cf09932?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=q5VaunlOzd4cbzG4kVQAmEAy09Br5U6DLJ2N8uGYd04y7o9CPrPWr4CN2LIBYArkZIT1fS6MspFBmfYVhHZAazXxEwY9d26KnQJ3N5w7hOQqMKBh~IIf-sTgKOd3tjJ8Tx-xe2DRX~W~RjA4aW2~GoanXE2~KoxQZV6W-wvqPxlKxYV7UXKnP7WpZ9LZSKCvT3wPJ60Fdewjc4JJhfjNDGscgxtexNdYz7zTP3Srw0z19atZc1b69Fi5VAUi3TujYMgRksIQ8wHqG7s9DUfx~av6~j4x2jU2AEZ9ybK0hd~wvOY3q-EET1zQ2SggDIasiUkPepZC4WjjFAIonvjE1w__",
            
        ]
    },
    {
        name: "دانه قهوه اسپرسو لاوازا",
        englishName: "LAVAZZA ESPRESSO COFFEE BEANS",
        id: "Lavazza coffee",
        SKU: '352130000193',
        price: 295000,
        Species: "%100 عربیکا",
        Score: 4.5,
        CaffeineContent: caffeineContent_strong_name,
        CaffeineContentId: caffeineContent_strong_id,
        Origin: "برزیل،کلمبیا",
        Ingredients: "دانه اسپرسو",
        category: category_coffeebeans_name,
        categoryId: category_coffeebeans_id,
        imageUrl: [
            "../assest/images/lavazza-coffee-beans-1.png",
            "../assest/images/lavazza-coffee-beans-2.png",
            "../assest/images/lavazza-coffee-beans-3.png"
        ]
    },
    {
        name: "دانه قهوه اسپرسو ایلی",
        englishName: "ILLY ESPRESSO COFFEE BEANS",
        id: "Illy coffee",
        SKU: '352130000194',
        price: 310000,
        Species: "%100 عربیکا",
        Score: 4.5,
        CaffeineContent: caffeineContent_medium_name,
        CaffeineContentId: caffeineContent_medium_id,
        Origin: "ایتالیا",
        Ingredients: "دانه اسپرسو",
        category: category_coffeebeans_name,
        categoryId: category_coffeebeans_id,
        imageUrl: [
            "../../images/products/coffee-beans/illy-coffee-beans-1.png",
            "../../images/products/coffee-beans/illy-coffee-beans-2.png",
            "../../images/products/coffee-beans/illy-coffee-beans-3.png"
        ]
    },
    {
        name: "دانه قهوه اسپرسو سگافردو",
        englishName: "SEGAFREDO ESPRESSO COFFEE BEANS",
        id: "Segafredo coffee", 
        SKU: '352130000195',
        price: 285000,
        Species: "%80 عربیکا و %20 ربوستا",
        Score: 4.5,
        CaffeineContent: caffeineContent_strong_name,
        CaffeineContentId: caffeineContent_strong_id,
        Origin: "برزیل،هند",
        Ingredients: "دانه اسپرسو",
        category: category_coffeebeans_name,
        categoryId: category_coffeebeans_id,
        imageUrl: [
            "../../images/products/coffee-beans/segafredo-coffee-beans-1.png",
            "../../images/products/coffee-beans/segafredo-coffee-beans-2.png",
            "../../images/products/coffee-beans/segafredo-coffee-beans-3.png"
        ]
    },
    {
        name: "دانه قهوه اسپرسو کیمبو",
        englishName: "KIMBO ESPRESSO COFFEE BEANS",
        id: "Kimbo coffee",
        SKU: '352130000196', 
        price: 275000,
        Species: "%70 عربیکا و %30 ربوستا",
        Score: 4.5,
        CaffeineContent: caffeineContent_medium_name,
        CaffeineContentId: caffeineContent_medium_id,
        Origin: "ایتالیا،برزیل",
        Ingredients: "دانه اسپرسو",
        category: category_coffeebeans_name,
        categoryId: category_coffeebeans_id,
        imageUrl: [
            "../../images/products/coffee-beans/kimbo-coffee-beans-1.png",
            "../../images/products/coffee-beans/kimbo-coffee-beans-2.png",
            "../../images/products/coffee-beans/kimbo-coffee-beans-3.png"
        ]
    },
    {
        name: "دانه قهوه اسپرسو مهمت افندی",
        englishName: "MEHMET EFENDI ESPRESSO COFFEE BEANS",
        id: "Mehmet coffee",
        SKU: '352130000197',
        price: 245000,
        Species: "%60 عربیکا و %40 ربوستا",
        Score: 4.5,
        CaffeineContent: caffeineContent_strong_name,
        CaffeineContentId: caffeineContent_strong_id,
        Origin: "ترکیه",
        Ingredients: "دانه اسپرسو",
        category: category_coffeebeans_name,
        categoryId: category_coffeebeans_id,
        imageUrl: [
            "../../images/products/coffee-beans/mehmet-coffee-beans-1.png",
            "../../images/products/coffee-beans/mehmet-coffee-beans-2.png",
            "../../images/products/coffee-beans/mehmet-coffee-beans-3.png"
        ]
    },
    {
        name: "دانه قهوه اسپرسو پلی کافه",
        englishName: "PELE CAFE ESPRESSO COFFEE BEANS",
        id: "Pele coffee",
        SKU: '352130000198',
        price: 255000,
        Species: "%90 عربیکا و %10 ربوستا",
        Score: 4.5,
        CaffeineContent: caffeineContent_medium_name,
        CaffeineContentId: caffeineContent_medium_id,
        Origin: "برزیل",
        Ingredients: "دانه اسپرسو",
        category: category_coffeebeans_name,
        categoryId: category_coffeebeans_id,
        imageUrl: [
            "../../images/products/coffee-beans/pele-coffee-beans-1.png",
            "../../images/products/coffee-beans/pele-coffee-beans-2.png",
            "../../images/products/coffee-beans/pele-coffee-beans-3.png"
        ]
    },
    {
        name: "دانه قهوه اسپرسو بونجورنو",
        englishName: "BONJOURNO ESPRESSO COFFEE BEANS",
        id: "Bonjourno coffee",
        SKU: '352130000199',
        price: 290000,
        Species: "%100 عربیکا",
        Score: 4.5,
        CaffeineContent: caffeineContent_medium_name,
        CaffeineContentId: caffeineContent_medium_id,
        Origin: "ایتالیا،اتیوپی",
        Ingredients: "دانه اسپرسو",
        category: category_coffeebeans_name,
        categoryId: category_coffeebeans_id,
        imageUrl: [
            "../../images/products/coffee-beans/bonjourno-coffee-beans-1.png",
            "../../images/products/coffee-beans/bonjourno-coffee-beans-2.png",
            "../../images/products/coffee-beans/bonjourno-coffee-beans-3.png"
        ]
    },
    {
        name: "دانه قهوه اسپرسو دانسی",
        englishName: "DANESI ESPRESSO COFFEE BEANS",
        id: "Danesi coffee",
        SKU: '352130000200',
        price: 305000,
        Species: "%90 عربیکا و %10 ربوستا",
        Score: 4.5,
        CaffeineContent: caffeineContent_strong_name,
        CaffeineContentId: caffeineContent_strong_id,
        Origin: "ایتالیا،برزیل",
        Ingredients: "دانه اسپرسو",
        category: category_coffeebeans_name,
        categoryId: category_coffeebeans_id,
        imageUrl: [
            "../../images/products/coffee-beans/danesi-coffee-beans-1.png",
            "../../images/products/coffee-beans/danesi-coffee-beans-2.png",
            "../../images/products/coffee-beans/danesi-coffee-beans-3.png"
        ]
    },
    {
        name: "قهوه فوری نسکافه گلد",
        englishName: "NESCAFE GOLD INSTANT COFFEE",
        id: "Nescafe gold",
        SKU: '352130000202',
        price: 185000,
        Species: "قهوه فوری",
        Score: 4.5,
        CaffeineContent: caffeineContent_medium_name,
        CaffeineContentId: caffeineContent_medium_id,
        Origin: "سوئیس",
        Ingredients: "قهوه فوری",
        category: category_instantcoffee_name,
        categoryId: category_instantcoffee_id,
        imageUrl: [
            "../../images/products/instant-coffee/nescafe-gold-1.png",
            "../../images/products/instant-coffee/nescafe-gold-2.png",
            "../../images/products/instant-coffee/nescafe-gold-3.png"
        ]
    },
    {
        name: "قهوه فوری جاکوبز",
        englishName: "JACOBS INSTANT COFFEE",
        id: "Jacobs coffee",
        SKU: '352130000203',
        price: 165000,
        Species: "قهوه فوری",
        Score: 4.5,
        CaffeineContent: caffeineContent_strong_name,
        CaffeineContentId: caffeineContent_strong_id,
        Origin: "آلمان",
        Ingredients: "قهوه فوری",
        category: category_instantcoffee_name,
        categoryId: category_instantcoffee_id,
        imageUrl: [
            "../../images/products/instant-coffee/jacobs-1.png",
            "../../images/products/instant-coffee/jacobs-2.png",
            "../../images/products/instant-coffee/jacobs-3.png"
        ]
    },
    {
        name: "قهوه فوری مولتی کافه",
        englishName: "MULTI CAFE INSTANT COFFEE",
        id: "Multi cafe",
        SKU: '352130000204',
        price: 145000,
        Species: "قهوه فوری",
        CaffeineContent: caffeineContent_weak_name,
        CaffeineContentId: caffeineContent_weak_id,
        Origin: "ترکیه",
        Ingredients: "قهوه فوری",
        category: category_instantcoffee_name,
        categoryId: category_instantcoffee_id,
        imageUrl: [
            "../../images/products/instant-coffee/multi-cafe-1.png",
            "../../images/products/instant-coffee/multi-cafe-2.png",
            "../../images/products/instant-coffee/multi-cafe-3.png"
        ]
    },
    {
        name: "قهوه آسیاب شده لاوازا",
        englishName: "LAVAZZA GROUND COFFEE",
        id: "Lavazza ground",
        SKU: '352130000205',
        price: 195000,
        Species: "%100 عربیکا",
        Score: 4.5,
        CaffeineContent: caffeineContent_medium_name,
        CaffeineContentId: caffeineContent_medium_id,
        Origin: "ایتالیا",
        Ingredients: "قهوه آسیاب شده",
        category: category_groundcoffee_name,
        categoryId: category_groundcoffee_id,
        imageUrl: [
            "../../images/products/ground-coffee/lavazza-ground-1.png",
            "../../images/products/ground-coffee/lavazza-ground-2.png",
            "../../images/products/ground-coffee/lavazza-ground-3.png"
        ]
    },
    {
        name: "قهوه آسیاب شده ایلی",
        englishName: "ILLY GROUND COFFEE",
        id: "Illy ground",
        SKU: '352130000206',
        price: 210000,
        Species: "%100 عربیکا",
        Score: 4.5,
        CaffeineContent: caffeineContent_strong_name,
        CaffeineContentId: caffeineContent_strong_id,
        Origin: "ایتالیا",
        Ingredients: "قهوه آسیاب شده",
        category: category_groundcoffee_name,
        categoryId: category_groundcoffee_id,
        imageUrl: [
            "../../images/products/ground-coffee/illy-ground-1.png",
            "../../images/products/ground-coffee/illy-ground-2.png",
            "../../images/products/ground-coffee/illy-ground-3.png"
        ]
    },
    {
        name: "قهوه آسیاب شده سگافردو",
        englishName: "SEGAFREDO GROUND COFFEE",
        id: "Segafredo ground",
        SKU: '352130000207',
        price: 185000,
        Species: "%80 عربیکا و %20 ربوستا",
        Score: 4.5,
        CaffeineContent: caffeineContent_medium_name,
        CaffeineContentId: caffeineContent_medium_id,
        Origin: "ایتالیا",
        Ingredients: "قهوه آسیاب شده",
        category: category_groundcoffee_name,
        categoryId: category_groundcoffee_id,
        imageUrl: [
            "../../images/products/ground-coffee/segafredo-ground-1.png",
            "../../images/products/ground-coffee/segafredo-ground-2.png",
            "../../images/products/ground-coffee/segafredo-ground-3.png"
        ]
    }
]

export default products;