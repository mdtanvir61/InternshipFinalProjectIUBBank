import  { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Select from 'react-select'

const allCurrencies = [
  { code: "USD", name: "United States Dollar", country: "United States" },
  { code: "GBP", name: "Pound Sterling", country: "United Kingdom" },
  { code: "EUR", name: "Euro", country: "European Union" },
  { code: "CAD", name: "Canadian Dollar", country: "Canada" },
  { code: "AUD", name: "Australian Dollar", country: "Australia" },
  { code: "BDT", name: "Bangladeshi Taka", country: "Bangladesh" },
  { code: "AED", name: "UAE Dirham", country: "United Arab Emirates" },
  { code: "AFN", name: "Afghan Afghani", country: "Afghanistan" },
  { code: "ALL", name: "Albanian Lek", country: "Albania" },
  { code: "AMD", name: "Armenian Dram", country: "Armenia" },
  { code: "ANG", name: "Netherlands Antillian Guilder", country: "Netherlands Antilles" },
  { code: "AOA", name: "Angolan Kwanza", country: "Angola" },
  { code: "ARS", name: "Argentine Peso", country: "Argentina" },
  { code: "AWG", name: "Aruban Florin", country: "Aruba" },
  { code: "AZN", name: "Azerbaijani Manat", country: "Azerbaijan" },
  { code: "BAM", name: "Bosnia and Herzegovina Mark", country: "Bosnia and Herzegovina" },
  { code: "BBD", name: "Barbados Dollar", country: "Barbados" },
  { code: "BGN", name: "Bulgarian Lev", country: "Bulgaria" },
  { code: "BHD", name: "Bahraini Dinar", country: "Bahrain" },
  { code: "BIF", name: "Burundian Franc", country: "Burundi" },
  { code: "BMD", name: "Bermudian Dollar", country: "Bermuda" },
  { code: "BND", name: "Brunei Dollar", country: "Brunei" },
  { code: "BOB", name: "Bolivian Boliviano", country: "Bolivia" },
  { code: "BRL", name: "Brazilian Real", country: "Brazil" },
  { code: "BSD", name: "Bahamian Dollar", country: "Bahamas" },
  { code: "BTN", name: "Bhutanese Ngultrum", country: "Bhutan" },
  { code: "BWP", name: "Botswana Pula", country: "Botswana" },
  { code: "BYN", name: "Belarusian Ruble", country: "Belarus" },
  { code: "BZD", name: "Belize Dollar", country: "Belize" },
  { code: "CDF", name: "Congolese Franc", country: "Democratic Republic of the Congo" },
  { code: "CHF", name: "Swiss Franc", country: "Switzerland" },
  { code: "CLP", name: "Chilean Peso", country: "Chile" },
  { code: "CNY", name: "Chinese Renminbi", country: "China" },
  { code: "COP", name: "Colombian Peso", country: "Colombia" },
  { code: "CRC", name: "Costa Rican Colon", country: "Costa Rica" },
  { code: "CUP", name: "Cuban Peso", country: "Cuba" },
  { code: "CVE", name: "Cape Verdean Escudo", country: "Cape Verde" },
  { code: "CZK", name: "Czech Koruna", country: "Czech Republic" },
  { code: "DJF", name: "Djiboutian Franc", country: "Djibouti" },
  { code: "DKK", name: "Danish Krone", country: "Denmark" },
  { code: "DOP", name: "Dominican Peso", country: "Dominican Republic" },
  { code: "DZD", name: "Algerian Dinar", country: "Algeria" },
  { code: "EGP", name: "Egyptian Pound", country: "Egypt" },
  { code: "ERN", name: "Eritrean Nakfa", country: "Eritrea" },
  { code: "ETB", name: "Ethiopian Birr", country: "Ethiopia" },
  { code: "FJD", name: "Fiji Dollar", country: "Fiji" },
  { code: "FKP", name: "Falkland Islands Pound", country: "Falkland Islands" },
  { code: "FOK", name: "Faroese Króna", country: "Faroe Islands" },
  { code: "GEL", name: "Georgian Lari", country: "Georgia" },
  { code: "GGP", name: "Guernsey Pound", country: "Guernsey" },
  { code: "GHS", name: "Ghanaian Cedi", country: "Ghana" },
  { code: "GIP", name: "Gibraltar Pound", country: "Gibraltar" },
  { code: "GMD", name: "Gambian Dalasi", country: "The Gambia" },
  { code: "GNF", name: "Guinean Franc", country: "Guinea" },
  { code: "GTQ", name: "Guatemalan Quetzal", country: "Guatemala" },
  { code: "GYD", name: "Guyanese Dollar", country: "Guyana" },
  { code: "HKD", name: "Hong Kong Dollar", country: "Hong Kong" },
  { code: "HNL", name: "Honduran Lempira", country: "Honduras" },
  { code: "HRK", name: "Croatian Kuna", country: "Croatia" },
  { code: "HTG", name: "Haitian Gourde", country: "Haiti" },
  { code: "HUF", name: "Hungarian Forint", country: "Hungary" },
  { code: "IDR", name: "Indonesian Rupiah", country: "Indonesia" },
  { code: "ILS", name: "Israeli New Shekel", country: "Israel" },
  { code: "IMP", name: "Manx Pound", country: "Isle of Man" },
  { code: "INR", name: "Indian Rupee", country: "India" },
  { code: "IQD", name: "Iraqi Dinar", country: "Iraq" },
  { code: "IRR", name: "Iranian Rial", country: "Iran" },
  { code: "ISK", name: "Icelandic Króna", country: "Iceland" },
  { code: "JEP", name: "Jersey Pound", country: "Jersey" },
  { code: "JMD", name: "Jamaican Dollar", country: "Jamaica" },
  { code: "JOD", name: "Jordanian Dinar", country: "Jordan" },
  { code: "JPY", name: "Japanese Yen", country: "Japan" },
  { code: "KES", name: "Kenyan Shilling", country: "Kenya" },
  { code: "KGS", name: "Kyrgyzstani Som", country: "Kyrgyzstan" },
  { code: "KHR", name: "Cambodian Riel", country: "Cambodia" },
  { code: "KID", name: "Kiribati Dollar", country: "Kiribati" },
  { code: "KMF", name: "Comorian Franc", country: "Comoros" },
  { code: "KRW", name: "South Korean Won", country: "South Korea" },
  { code: "KWD", name: "Kuwaiti Dinar", country: "Kuwait" },
  { code: "KYD", name: "Cayman Islands Dollar", country: "Cayman Islands" },
  { code: "KZT", name: "Kazakhstani Tenge", country: "Kazakhstan" },
  { code: "LAK", name: "Lao Kip", country: "Laos" },
  { code: "LBP", name: "Lebanese Pound", country: "Lebanon" },
  { code: "LKR", name: "Sri Lanka Rupee", country: "Sri Lanka" },
  { code: "LRD", name: "Liberian Dollar", country: "Liberia" },
  { code: "LSL", name: "Lesotho Loti", country: "Lesotho" },
  { code: "LYD", name: "Libyan Dinar", country: "Libya" },
  { code: "MAD", name: "Moroccan Dirham", country: "Morocco" },
  { code: "MDL", name: "Moldovan Leu", country: "Moldova" },
  { code: "MGA", name: "Malagasy Ariary", country: "Madagascar" },
  { code: "MKD", name: "Macedonian Denar", country: "North Macedonia" },
  { code: "MMK", name: "Burmese Kyat", country: "Myanmar" },
  { code: "MNT", name: "Mongolian Tögrög", country: "Mongolia" },
  { code: "MOP", name: "Macanese Pataca", country: "Macau" },
  { code: "MRU", name: "Mauritanian Ouguiya", country: "Mauritania" },
  { code: "MUR", name: "Mauritian Rupee", country: "Mauritius" },
  { code: "MVR", name: "Maldivian Rufiyaa", country: "Maldives" },
  { code: "MWK", name: "Malawian Kwacha", country: "Malawi" },
  { code: "MXN", name: "Mexican Peso", country: "Mexico" },
  { code: "MYR", name: "Malaysian Ringgit", country: "Malaysia" },
  { code: "MZN", name: "Mozambican Metical", country: "Mozambique" },
  { code: "NAD", name: "Namibian Dollar", country: "Namibia" },
  { code: "NGN", name: "Nigerian Naira", country: "Nigeria" },
  { code: "NIO", name: "Nicaraguan Córdoba", country: "Nicaragua" },
  { code: "NOK", name: "Norwegian Krone", country: "Norway" },
  { code: "NPR", name: "Nepalese Rupee", country: "Nepal" },
  { code: "NZD", name: "New Zealand Dollar", country: "New Zealand" },
  { code: "OMR", name: "Omani Rial", country: "Oman" },
  { code: "PAB", name: "Panamanian Balboa", country: "Panama" },
  { code: "PEN", name: "Peruvian Sol", country: "Peru" },
  { code: "PGK", name: "Papua New Guinean Kina", country: "Papua New Guinea" },
  { code: "PHP", name: "Philippine Peso", country: "Philippines" },
  { code: "PKR", name: "Pakistani Rupee", country: "Pakistan" },
  { code: "PLN", name: "Polish Złoty", country: "Poland" },
  { code: "PYG", name: "Paraguayan Guaraní", country: "Paraguay" },
  { code: "QAR", name: "Qatari Riyal", country: "Qatar" },
  { code: "RON", name: "Romanian Leu", country: "Romania" },
  { code: "RSD", name: "Serbian Dinar", country: "Serbia" },
  { code: "RUB", name: "Russian Ruble", country: "Russia" },
  { code: "RWF", name: "Rwandan Franc", country: "Rwanda" },
  { code: "SAR", name: "Saudi Riyal", country: "Saudi Arabia" },
  { code: "SBD", name: "Solomon Islands Dollar", country: "Solomon Islands" },
  { code: "SCR", name: "Seychellois Rupee", country: "Seychelles" },
  { code: "SDG", name: "Sudanese Pound", country: "Sudan" },
  { code: "SEK", name: "Swedish Krona", country: "Sweden" },
  { code: "SGD", name: "Singapore Dollar", country: "Singapore" },
  { code: "SHP", name: "Saint Helena Pound", country: "Saint Helena" },
  { code: "SLE", name: "Sierra Leonean Leone", country: "Sierra Leone" },
  { code: "SOS", name: "Somali Shilling", country: "Somalia" },
  { code: "SRD", name: "Surinamese Dollar", country: "Suriname" },
  { code: "SSP", name: "South Sudanese Pound", country: "South Sudan" },
  { code: "STN", name: "São Tomé and Príncipe Dobra", country: "São Tomé and Príncipe" },
  { code: "SYP", name: "Syrian Pound", country: "Syria" },
  { code: "SZL", name: "Eswatini Lilangeni", country: "Eswatini" },
  { code: "THB", name: "Thai Baht", country: "Thailand" },
  { code: "TJS", name: "Tajikistani Somoni", country: "Tajikistan" },
  { code: "TMT", name: "Turkmenistan Manat", country: "Turkmenistan" },
  { code: "TND", name: "Tunisian Dinar", country: "Tunisia" },
  { code: "TOP", name: "Tongan Paʻanga", country: "Tonga" },
  { code: "TRY", name: "Turkish Lira", country: "Turkey" },
  { code: "TTD", name: "Trinidad and Tobago Dollar", country: "Trinidad and Tobago" },
  { code: "TVD", name: "Tuvaluan Dollar", country: "Tuvalu" },
  { code: "TWD", name: "New Taiwan Dollar", country: "Taiwan" },
  { code: "TZS", name: "Tanzanian Shilling", country: "Tanzania" },
  { code: "UAH", name: "Ukrainian Hryvnia", country: "Ukraine" },
  { code: "UGX", name: "Ugandan Shilling", country: "Uganda" },
  { code: "UYU", name: "Uruguayan Peso", country: "Uruguay" },
  { code: "UZS", name: "Uzbekistani So'm", country: "Uzbekistan" },
  { code: "VES", name: "Venezuelan Bolívar Soberano", country: "Venezuela" },
  { code: "VND", name: "Vietnamese Đồng", country: "Vietnam" },
  { code: "VUV", name: "Vanuatu Vatu", country: "Vanuatu" },
  { code: "WST", name: "Samoan Tālā", country: "Samoa" },
  { code: "XAF", name: "Central African CFA Franc", country: "CEMAC" },
  { code: "XCD", name: "East Caribbean Dollar", country: "Organisation of Eastern Caribbean States" },
  { code: "XDR", name: "Special Drawing Rights", country: "International Monetary Fund" },
  { code: "XOF", name: "West African CFA franc", country: "CFA" },
  { code: "XPF", name: "CFP Franc", country: "Collectivités d'Outre-Mer" },
  { code: "YER", name: "Yemeni Rial", country: "Yemen" },
  { code: "ZAR", name: "South African Rand", country: "South Africa" },
  { code: "ZMW", name: "Zambian Kwacha", country: "Zambia" },
  { code: "ZWL", name: "Zimbabwean Dollar", country: "Zimbabwe" },
];



const topCurrencyCodes = ["USD", "GBP", "EUR", "CAD", "AUD", "BDT"];
const topCurrencies = allCurrencies.filter(cur => topCurrencyCodes.includes(cur.code));
const restCurrencies = allCurrencies.filter(cur => !topCurrencyCodes.includes(cur.code)).sort((a, b) => a.code.localeCompare(b.code));
const currencies = [...topCurrencies, ...restCurrencies];

const API_KEY = "ebd5802f12434618ce8bf129";

const ExchangeRate = () => {
  const navigate = useNavigate();
  const [sendAmount, setSendAmount] = useState(1000);
  const [sendCurrency, setSendCurrency] = useState("USD");
  const [receiveCurrency, setReceiveCurrency] = useState("BDT");
  const [receiveAmount, setReceiveAmount] = useState("");
  const [conversionRate, setConversionRate] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Fetch exchange rate when currencies or amount change
  useEffect(() => {
    if (sendCurrency === receiveCurrency) {
      setConversionRate(1);
      setReceiveAmount(Number(sendAmount).toFixed(4));
      return;
    }

    const fetchRate = async () => {
      setLoading(true);
      setError("");

      try {
        const response = await fetch(
          `https://v6.exchangerate-api.com/v6/${API_KEY}/pair/${sendCurrency}/${receiveCurrency}/${sendAmount}`
        );
        const data = await response.json();
        
        if (data.result === "success") {
          setConversionRate(data.conversion_rate);
          setReceiveAmount(
            data.conversion_result.toLocaleString(undefined, {
              minimumFractionDigits: 4,
              maximumFractionDigits: 4,
            })
          );
        } else {
          throw new Error(data["error-type"] || "API Error");
        }
      } catch (err) {
        setError("Failed to fetch exchange rate.");
        setConversionRate(null);
        setReceiveAmount("");
      } finally {
        setLoading(false);
      }
    };

    fetchRate();
  }, [sendAmount, sendCurrency, receiveCurrency]);

  const handleSendAmountChange = (e) => {
    setSendAmount(e.target.value.replace(/[^0-9.]/g, ""));
  };

  return (
    <div className="w-full flex justify-center items-center bg-blue-50 py-12 px-2">
      <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-4xl flex flex-col">
        <h2 className="text-4xl font-bold text-center mb-2">Send Money Anywhere</h2>
        <p className="text-center text-gray-500 mb-8 text-lg">
          Compare 160+ currencies in real time & find the right moment to transfer funds.
        </p>
        <div className="w-full flex flex-col md:flex-row gap-6 mb-2">
          {/* Send Section */}
          <div className="flex-1">
            <label className="block text-gray-700 font-semibold mb-2">You send</label>
            <div className="flex">
              <input
                type="text"
                className="w-full rounded-l-md border border-gray-200 bg-blue-50 px-6 py-4 text-xl focus:outline-none"
                value={sendAmount}
                onChange={handleSendAmountChange}
              />
              
              <select
                className="rounded-r-md border-t border-b border-r border-gray-200 bg-white px-4 py-4 text-xl focus:outline-none flex items-center max-h-60 overflow-y-auto min-w-[90px]"
                value={sendCurrency}
                onChange={(e) => setSendCurrency(e.target.value)}
              >
                {topCurrencies.map((cur) => (
                  <option key={cur.code} value={cur.code}>
                    {cur.code}
                  </option>
                ))}
                <option disabled>──────────</option>
                {restCurrencies.map((cur) => (
                  <option key={cur.code} value={cur.code}>
                    {cur.code}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Receive Section */}
          <div className="flex-1">
            <label className="block text-gray-700 font-semibold mb-2">Recipient Gets</label>
            <div className="flex">
              <input
                type="text"
                className="w-full rounded-l-md border border-gray-200 bg-blue-50 px-6 py-4 text-xl focus:outline-none"
                value={receiveAmount}
                readOnly
              />
              <select
                className="rounded-r-md border-t border-b border-r border-gray-200 bg-white px-4 py-4 text-xl focus:outline-none flex items-center max-h-60 overflow-y-auto min-w-[90px]"
                value={receiveCurrency}
                onChange={(e) => setReceiveCurrency(e.target.value)}
              >
                {topCurrencies.map((cur) => (
                  <option key={cur.code} value={cur.code}>
                    {cur.code}
                  </option>
                ))}
                <option disabled>──────────</option>
                {restCurrencies.map((cur) => (
                  <option key={cur.code} value={cur.code}>
                    {cur.code}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Exchange Rate and Button */}
        <div className="w-full flex flex-col md:flex-row items-center md:items-end justify-between mt-4">
          <div className="flex flex-col w-full md:w-auto mb-4 md:mb-0 pb-2">
            <span className="text-gray-500 text-base">Exchange Rate</span>
          </div>
          <div>
            <span className="text-green-500 text-xl font-semibold mt-1 pb-2 block">
              {loading ? "Loading..." : conversionRate ? `${conversionRate.toFixed(4)} ${sendCurrency} to ${receiveCurrency}` : "N/A"} 
            </span>
          </div>
         
          <button
            className="bg-blue-700 hover:bg-blue-800 text-white font-semibold px-8 py-3 rounded-full transition text-lg w-full md:w-auto"
            onClick={() => navigate("/register")}
            disabled={loading || !!error}
          >
            Transfer Funds
          </button>
        </div>

        {error && (
          <p className="text-red-500 mt-4 text-center">{error}</p>
        )}
      </div>
    </div>
  );
};

export default ExchangeRate;
