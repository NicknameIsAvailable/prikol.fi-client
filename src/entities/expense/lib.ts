import { ECurrency, ICurrency } from "./model";

export const currencies: ICurrency[] = [
    { ticker: ECurrency.USD, name: "Доллар США", symbol: "$" },
    { ticker: ECurrency.EUR, name: "Евро", symbol: "€" },
    { ticker: ECurrency.JPY, name: "Японская иена", symbol: "¥" },
    { ticker: ECurrency.GBP, name: "Фунт стерлингов", symbol: "£" },
    { ticker: ECurrency.AUD, name: "Австралийский доллар", symbol: "A$" },
    { ticker: ECurrency.CAD, name: "Канадский доллар", symbol: "C$" },
    { ticker: ECurrency.CHF, name: "Швейцарский франк", symbol: "Fr" },
    { ticker: ECurrency.CNY, name: "Китайский юань", symbol: "¥" },
    { ticker: ECurrency.SEK, name: "Шведская крона", symbol: "kr" },
    { ticker: ECurrency.NZD, name: "Новозеландский доллар", symbol: "NZ$" },
    { ticker: ECurrency.KRW, name: "Южнокорейская вона", symbol: "₩" },
    { ticker: ECurrency.SGD, name: "Сингапурский доллар", symbol: "S$" },
    { ticker: ECurrency.NOK, name: "Норвежская крона", symbol: "kr" },
    { ticker: ECurrency.MXN, name: "Мексиканское песо", symbol: "Mex$" },
    { ticker: ECurrency.INR, name: "Индийская рупия", symbol: "₹" },
    { ticker: ECurrency.RUB, name: "Российский рубль", symbol: "₽" },
    { ticker: ECurrency.BRL, name: "Бразильский реал", symbol: "R$" },
    { ticker: ECurrency.ZAR, name: "Южноафриканский рэнд", symbol: "R" },
    { ticker: ECurrency.HKD, name: "Гонконгский доллар", symbol: "HK$" },
    { ticker: ECurrency.TRY, name: "Турецкая лира", symbol: "₺" },
];