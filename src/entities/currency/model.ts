export enum ECurrency {
    USD = "United States Dollar",
    EUR = "Euro",
    JPY = "Japanese Yen",
    GBP = "British Pound Sterling",
    AUD = "Australian Dollar",
    CAD = "Canadian Dollar",
    CHF = "Swiss Franc",
    CNY = "Chinese Yuan",
    SEK = "Swedish Krona",
    NZD = "New Zealand Dollar",
    KRW = "South Korean Won",
    SGD = "Singapore Dollar",
    NOK = "Norwegian Krone",
    MXN = "Mexican Peso",
    INR = "Indian Rupee",
    RUB = "Russian Ruble",
    BRL = "Brazilian Real",
    ZAR = "South African Rand",
    HKD = "Hong Kong Dollar",
    TRY = "Turkish Lira",
}

export interface ICurrency {
    ticker: ECurrency,
    name: string,
    symbol: string,
}

export interface ICurrencyState {
    currencies: ICurrency[];
    currentCurrency: ICurrency;
}

export interface ICurrencyActions {
    selectCurrency: (value: ECurrency) => any
}

export type TCurrencyStore = ICurrencyState & ICurrencyActions;

