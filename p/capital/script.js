const quizData = [
  {
    question: "What is the capital of Afghanistan?🇦🇫",
    options: ["Kabul", "Tehran", "Islamabad", "New Delhi"],
    answer: 0
  },
  {
    question: "What is the capital of Albania?🇦🇱",
    options: ["Tirana", "Skopje", "Podgorica", "Belgrade"],
    answer: 0
  },
  {
    question: "What is the capital of Algeria?🇩🇿",
    options: ["Cairo", "Algiers", "Tunis", "Rabat"],
    answer: 1
  },
  {
    question: "What is the capital of Andorra?🇦🇩",
    options: ["Andorra la Vella", "Barcelona", "Madrid", "Lisbon"],
    answer: 0
  },
  {
    question: "What is the capital of Angola?🇦🇴",
    options: ["Kinshasa", "Luanda", "Brazzaville", "Lusaka"],
    answer: 1
  },
  {
    question: "What is the capital of Antigua and Barbuda?🇦🇬",
    options: ["Nassau", "Havana", "St. John's", "Kingston"],
    answer: 2
  },
  {
    question: "What is the capital of Argentina?🇦🇷",
    options: ["Buenos Aires", "Santiago", "Lima", "Montevideo"],
    answer: 0
  },
  {
    question: "What is the capital of Armenia?🇦🇲",
    options: ["Yerevan", "Baku", "Tbilisi", "Ankara"],
    answer: 0
  },
  {
    question: "What is the capital of Australia?🇦🇺",
    options: ["Sydney", "Melbourne", "Canberra", "Auckland"],
    answer: 2
  },
  {
    question: "What is the capital of Austria?🇦🇹",
    options: ["Berlin", "Vienna", "Zurich", "Prague"],
    answer: 1
  },
  {
    question: "What is the capital of Azerbaijan?🇦🇿",
    options: ["Astana", "Baku", "Ashgabat", "Yerevan"],
    answer: 1
  },
  {
    question: "What is the capital of Bahamas?🇧🇸",
    options: ["Kingston", "Havana", "Nassau", "Port-au-Prince"],
    answer: 2
  },
  {
    question: "What is the capital of Bahrain?🇧🇭",
    options: ["Kuwait City", "Doha", "Manama", "Muscat"],
    answer: 2
  },
  {
    question: "What is the capital of Bangladesh?🇧🇩",
    options: ["Kathmandu", "Colombo", "Thimphu", "Dhaka"],
    answer: 3
  },
  {
    question: "What is the capital of Barbados?🇧🇧",
    options: ["Georgetown", "Bridgetown", "Castries", "Port of Spain"],
    answer: 1
  },
  {
    question: "What is the capital of Belarus?🇧🇾",
    options: ["Minsk", "Vilnius", "Riga", "Kiev"],
    answer: 0
  },
  {
    question: "What is the capital of Belgium?🇧🇪",
    options: ["Luxembourg", "Brussels", "Amsterdam", "The Hague"],
    answer: 1
  },
  {
    question: "What is the capital of Belize?🇧🇿",
    options: ["Belmopan", "Guatemala City", "Tegucigalpa", "San Salvador"],
    answer: 0
  },
  {
    question: "What is the capital of Benin?🇧🇯",
    options: ["Lomé", "Niamey", "Cotonou", "Accra"],
    answer: 2
  },
  {
    question: "What is the capital of Bhutan?🇧🇹",
    options: ["Thimphu", "Kathmandu", "Dhaka", "Delhi"],
    answer: 0
  },
  {
    question: "What is the capital of Bolivia?🇧🇴",
    options: ["Quito", "Sucre", "La Paz", "Lima"],
    answer: 2
  },
  {
    question: "What is the capital of Bosnia and Herzegovina?🇧🇦",
    options: ["Belgrade", "Skopje", "Podgorica", "Sarajevo"],
    answer: 3
  },
  {
    question: "What is the capital of Botswana?🇧🇼",
    options: ["Nairobi", "Pretoria", "Gaborone", "Windhoek"],
    answer: 2
  },
  {
    question: "What is the capital of Brazil?🇧🇷",
    options: ["Sao Paulo", "Brasilia", "Rio de Janeiro", "Buenos Aires"],
    answer: 1
  },
  {
    question: "What is the capital of Brunei?🇧🇳",
    options: ["Bangkok", "Bandar Seri Begawan", "Jakarta", "Kuala Lumpur"],
    answer: 1
  },
  {
    question: "What is the capital of Bulgaria?🇧🇬",
    options: ["Bucharest", "Belgrade", "Sofia", "Skopje"],
    answer: 2
  },
  {
    question: "What is the capital of Burkina Faso?🇧🇫",
    options: ["Conakry", "Abuja", "Bamako", "Ouagadougou"],
    answer: 3
  },
  {
    question: "What is the capital of Burundi?🇧🇮",
    options: ["Kampala", "Bujumbura", "Nairobi", "Kigali"],
    answer: 1
  },
  {
    question: "What is the capital of Cabo Verde?🇨🇻",
    options: ["Praia", "Dakar", "Banjul", "Conakry"],
    answer: 0
  },
  {
    question: "What is the capital of Cambodia?🇰🇭",
    options: ["Vientiane", "Hanoi", "Phnom Penh", "Bangkok"],
    answer: 2
  },
  {
    question: "What is the capital of Cameroon?🇨🇲",
    options: ["Abuja", "Yaoundé", "Brazzaville", "Kinshasa"],
    answer: 1
  },
  {
    question: "What is the capital of Canada?🇨🇦",
    options: ["Toronto", "Ottawa", "Montreal", "Vancouver"],
    answer: 1
  },
  {
    question: "What is the capital of Central African Republic?🇨🇫",
    options: ["Brazzaville", "Yaoundé", "N'Djamena", "Bangui"],
    answer: 3
  },
  {
    question: "What is the capital of Chad?🇹🇩",
    options: ["Bamako", "Niamey", "N'Djamena", "Brazzaville"],
    answer: 2
  },
  {
    question: "What is the capital of Chile?🇨🇱",
    options: ["Buenos Aires", "Lima", "Santiago", "Montevideo"],
    answer: 2
  },
  {
    question: "What is the capital of China?🇨🇳",
    options: ["Beijing", "Shanghai", "Hong Kong", "Tokyo"],
    answer: 0
  },
  {
    question: "What is the capital of Colombia?🇨🇴",
    options: ["Bogota", "Lima", "Quito", "Caracas"],
    answer: 0
  },
  {
    question: "What is the capital of Comoros?🇰🇲",
    options: ["Victoria", "Antananarivo", "Moroni", "Nairobi"],
    answer: 2
  },
  {
    question: "What is the capital of Congo (Brazzaville)?🇨🇩",
    options: ["Luanda", "Brazzaville", "Kinshasa", "Yaoundé"],
    answer: 1
  },
  {
    question: "What is the capital of Congo (Kinshasa)?🇨🇬",
    options: ["Kinshasa", "Brazzaville", "Kigali", "Lusaka"],
    answer: 0
  },
  {
    question: "What is the capital of Costa Rica?🇨🇷",
    options: ["Managua", "Panama City", "San Jose", "San Salvador"],
    answer: 2
  },
  {
    question: "What is the capital of Cote d'Ivoire?🇨🇮",
    options: ["Bamako", "Accra", "Abidjan", "Dakar"],
    answer: 2
  },
  {
    question: "What is the capital of Croatia?🇭🇷",
    options: ["Ljubljana", "Zagreb", "Belgrade", "Sarajevo"],
    answer: 1
  },
  {
    question: "What is the capital of Cuba?🇨🇺",
    options: ["Havana", "San Juan", "Santo Domingo", "Kingston"],
    answer: 0
  },
  {
    question: "What is the capital of Cyprus?🇨🇾",
    options: ["Nicosia", "Athens", "Ankara", "Beirut"],
    answer: 0
  },
  {
    question: "What is the capital of Czech Republic?🇨🇿",
    options: ["Budapest", "Vienna", "Prague", "Warsaw"],
    answer: 2
  },
  {
    question: "What is the capital of Denmark?🇩🇰",
    options: ["Helsinki", "Stockholm", "Copenhagen", "Oslo"],
    answer: 2
  },
  {
    question: "What is the capital of Djibouti?🇩🇯",
    options: ["Khartoum", "Mogadishu", "Nairobi", "Djibouti"],
    answer: 3
  },
  {
    question: "What is the capital of Dominica?🇩🇲",
    options: ["Castries", "Bridgetown", "Roseau", "Port of Spain"],
    answer: 2
  },
  {
    question: "What is the capital of Dominican Republic?🇩🇴",
    options: ["Havana", "San Juan", "Santo Domingo", "Kingston"],
    answer: 2
  },
  {
    question: "What is the capital of East Timor?🇹🇱",
    options: ["Dili", "Jakarta", "Manila", "Singapore"],
    answer: 0
  },
  {
    question: "What is the capital of Ecuador?🇪🇨",
    options: ["Lima", "Quito", "Bogota", "Caracas"],
    answer: 1
  },
  {
    question: "What is the capital of Egypt?🇪🇬",
    options: ["Cairo", "Nairobi", "Riyadh", "Athens"],
    answer: 0
  },
  {
    question: "What is the capital of El Salvador?🇸🇻",
    options: ["Tegucigalpa", "Managua", "San Salvador", "Guatemala City"],
    answer: 2
  },
  {
    question: "What is the capital of Equatorial Guinea?🇬🇶",
    options: ["Malabo", "Libreville", "Brazzaville", "Yaoundé"],
    answer: 0
  },
  {
    question: "What is the capital of Eritrea?🇪🇷",
    options: ["Khartoum", "Asmara", "Addis Ababa", "Nairobi"],
    answer: 1
  },
  {
    question: "What is the capital of Estonia?🇪🇪",
    options: ["Helsinki", "Riga", "Tallinn", "Vilnius"],
    answer: 2
  },
  {
    question: "What is the capital of Eswatini (Swaziland)?🇸🇿",
    options: ["Maseru", "Gaborone", "Mbabane", "Harare"],
    answer: 2
  },
  {
    question: "What is the capital of Ethiopia?🇪🇹",
    options: ["Nairobi", "Khartoum", "Addis Ababa", "Kigali"],
    answer: 2
  },
  {
    question: "What is the capital of Fiji?🇫🇯",
    options: ["Suva", "Port Moresby", "Wellington", "Canberra"],
    answer: 0
  },
  {
    question: "What is the capital of Finland?🇫🇮",
    options: ["Reykjavik", "Helsinki", "Stockholm", "Oslo"],
    answer: 1
  },
  {
    question: "What is the capital of France? 🇫🇷",
    options: ["London", "Paris", "Berlin", "Madrid"],
    answer: 1
  },
  {
    question: "What is the capital of Gabon?🇬🇦",
    options: ["Douala", "Brazzaville", "Yaoundé", "Libreville"],
    answer: 3
  },
  {
    question: "What is the capital of Gambia?🇬🇲",
    options: ["Bamako", "Dakar", "Banjul", "Accra"],
    answer: 2
  },
  {
    question: "What is the capital of Georgia?🇬🇪",
    options: ["Yerevan", "Tbilisi", "Baku", "Ankara"],
    answer: 1
  },
  {
    question: "What is the capital of Germany?🇩🇪",
    options: ["Berlin", "Vienna", "Paris", "Amsterdam"],
    answer: 0
  },
  {
    question: "What is the capital of Ghana?🇬🇭",
    options: ["Abuja", "Accra", "Dakar", "Lomé"],
    answer: 1
  },
  {
    question: "What is the capital of Greece?🇬🇷",
    options: ["Athens", "Nicosia", "Rome", "Sofia"],
    answer: 0
  },
  {
    question: "What is the capital of Grenada?🇬🇩",
    options: ["Kingstown", "St. John's", "Port of Spain", "St. George's"],
    answer: 3
  },
  {
    question: "What is the capital of Guatemala?🇬🇹",
    options: ["Panama City", "San Salvador", "Tegucigalpa", "Guatemala City"],
    answer: 3
  },
  {
    question: "What is the capital of Guinea?🇬🇳",
    options: ["Conakry", "Bissau", "Dakar", "Freetown"],
    answer: 0
  },
  {
    question: "What is the capital of Guinea-Bissau?🇬🇼",
    options: ["Bamako", "Dakar", "Banjul", "Bissau"],
    answer: 3
  },
  {
    question: "What is the capital of Guyana?🇬🇾",
    options: ["Georgetown", "Paramaribo", "Port of Spain", "Bridgetown"],
    answer: 0
  },
  {
    question: "What is the capital of Haiti?🇭🇹",
    options: ["Port-au-Prince", "Santo Domingo", "Havana", "Kingston"],
    answer: 0
  },
  {
    question: "What is the capital of Honduras?🇭🇳",
    options: ["Tegucigalpa", "Managua", "San Salvador", "Guatemala City"],
    answer: 0
  },
  {
    question: "What is the capital of Hungary?🇭🇺",
    options: ["Sofia", "Vienna", "Budapest", "Prague"],
    answer: 2
  },
  {
    question: "What is the capital of Iceland?🇮🇸",
    options: ["Helsinki", "Reykjavik", "Stockholm", "Oslo"],
    answer: 1
  },
  {
    question: "What is the capital of India?🇮🇳",
    options: ["Delhi", "Mumbai", "Kolkata", "Bangalore"],
    answer: 0
  },
  {
    question: "What is the capital of Indonesia?🇮🇩",
    options: ["Bangkok", "Jakarta", "Manila", "Kuala Lumpur"],
    answer: 1
  },
  {
    question: "What is the capital of Iran?🇮🇷",
    options: ["Riyadh", "Baghdad", "Tehran", "Damascus"],
    answer: 2
  },
  {
    question: "What is the capital of Iraq?🇮🇶",
    options: ["Tehran", "Baghdad", "Riyadh", "Amman"],
    answer: 1
  },
  {
    question: "What is the capital of Ireland?🇮🇪",
    options: ["Dublin", "Belfast", "Edinburgh", "Cardiff"],
    answer: 0
  },
  {
    question: "What is the capital of Israel?🇮🇱",
    options: ["Jerusalem", "Tel Aviv", "Cairo", "Amman"],
    answer: 0
  },
  {
    question: "What is the capital of Italy?🇮🇹",
    options: ["Rome", "Paris", "Athens", "Madrid"],
    answer: 0
  },
  {
    question: "What is the capital of Jamaica?🇯🇲",
    options: ["Kingston", "Havana", "San Juan", "Port-au-Prince"],
    answer: 0
  },
  {
    question: "What is the capital of Japan?🇯🇵",
    options: ["Beijing", "Tokyo", "Seoul", "Jakarta"],
    answer: 1
  },
  {
    question: "What is the capital of Jordan?🇯🇴",
    options: ["Cairo", "Damascus", "Amman", "Riyadh"],
    answer: 2
  },
  {
    question: "What is the capital of Kazakhstan?🇰🇿",
    options: ["Tashkent", "Almaty", "Nur-Sultan", "Bishkek"],
    answer: 2
  },
  {
    question: "What is the capital of Kenya?🇰🇪",
    options: ["Kampala", "Bujumbura", "Nairobi", "Kigali"],
    answer: 2
  },
  {
    question: "What is the capital of Kiribati?🇰🇮",
    options: ["Apia", "Nuku'alofa", "Suva", "Tarawa"],
    answer: 3
  },
  {
    question: "What is the capital of Kuwait?🇰🇼",
    options: ["Doha", "Muscat", "Riyadh", "Kuwait City"],
    answer: 3
  },
  {
    question: "What is the capital of Kyrgyzstan?🇰🇬",
    options: ["Tashkent", "Almaty", "Nur-Sultan", "Bishkek"],
    answer: 3
  },
  {
    question: "What is the capital of Laos?🇱🇦",
    options: ["Hanoi", "Bangkok", "Vientiane", "Phnom Penh"],
    answer: 2
  },
  {
    question: "What is the capital of Latvia?🇱🇻",
    options: ["Vilnius", "Riga", "Tallinn", "Helsinki"],
    answer: 1
  },
  {
    question: "What is the capital of Lebanon?🇱🇧",
    options: ["Beirut", "Damascus", "Amman", "Cairo"],
    answer: 0
  },
  {
    question: "What is the capital of Lesotho?🇱🇸",
    options: ["Pretoria", "Maseru", "Gaborone", "Harare"],
    answer: 1
  },
  {
    question: "What is the capital of Liberia?🇱🇷",
    options: ["Accra", "Dakar", "Monrovia", "Freetown"],
    answer: 2
  },
  {
    question: "What is the capital of Libya?🇱🇾",
    options: ["Tripoli", "Cairo", "Tunis", "Algiers"],
    answer: 0
  },
  {
    question: "What is the capital of Liechtenstein?🇱🇮",
    options: ["Bern", "Luxembourg City", "Vienna", "Vaduz"],
    answer: 3
  },
  {
    question: "What is the capital of Lithuania?🇱🇹",
    options: ["Vilnius", "Riga", "Tallinn", "Helsinki"],
    answer: 0
  },
  {
    question: "What is the capital of Luxembourg?🇱🇺",
    options: ["Brussels", "Strasbourg", "Amsterdam", "Luxembourg City"],
    answer: 3
  },
  {
    question: "What is the capital of Madagascar?🇲🇬",
    options: ["Antananarivo", "Maputo", "Nairobi", "Maseru"],
    answer: 0
  },
  {
    question: "What is the capital of Malawi?🇲🇼",
    options: ["Lilongwe", "Lusaka", "Harare", "Windhoek"],
    answer: 0
  },
  {
    question: "What is the capital of Malaysia?🇲🇾",
    options: ["Bangkok", "Jakarta", "Manila", "Kuala Lumpur"],
    answer: 3
  },
  {
    question: "What is the capital of Maldives?🇲🇻",
    options: ["Male", "Colombo", "Dhaka", "Thimphu"],
    answer: 0
  },
  {
    question: "What is the capital of Mali?🇲🇱",
    options: ["Dakar", "Banjul", "Bamako", "Accra"],
    answer: 2
  },
  {
    question: "What is the capital of Malta?🇲🇹",
    options: ["Rome", "Valletta", "Athens", "Nicosia"],
    answer: 1
  },
  {
    question: "What is the capital of Marshall Islands?🇲🇭",
    options: ["Suva", "Majuro", "Palikir", "Apia"],
    answer: 1
  },
  {
    question: "What is the capital of Mauritania?🇲🇷",
    options: ["Dakar", "Nouakchott", "Bissau", "Conakry"],
    answer: 1
  },
  {
    question: "What is the capital of Mauritius?🇲🇺",
    options: ["Port Louis", "Victoria", "Antananarivo", "Moroni"],
    answer: 0
  },
  {
    question: "What is the capital of Mexico?🇲🇽",
    options: ["Lima", "Bogota", "Mexico City", "Santiago"],
    answer: 2
  },
  {
    question: "What is the capital of Micronesia?🇫🇲",
    options: ["Port Moresby", "Nauru", "Palikir", "Majuro"],
    answer: 2
  },
  {
    question: "What is the capital of Moldova?🇲🇩",
    options: ["Tirana", "Belgrade", "Chisinau", "Kiev"],
    answer: 2
  },
  {
    question: "What is the capital of Monaco?🇲🇨",
    options: ["Nice", "Marseille", "Monte Carlo", "Monaco"],
    answer: 2
  },
  {
    question: "What is the capital of Mongolia?🇲🇳",
    options: ["Ulaanbaatar", "Astana", "Bishkek", "Tashkent"],
    answer: 0
  },
  {
    question: "What is the capital of Montenegro?🇲🇪",
    options: ["Podgorica", "Tirana", "Belgrade", "Skopje"],
    answer: 0
  },
  {
    question: "What is the capital of Morocco?🇲🇦",
    options: ["Algiers", "Cairo", "Tunis", "Rabat"],
    answer: 3
  },
  {
    question: "What is the capital of Mozambique?🇲🇿",
    options: ["Luanda", "Harare", "Lusaka", "Maputo"],
    answer: 3
  },
  {
    question: "What is the capital of Myanmar (Burma)?🇲🇲",
    options: ["Vientiane", "Bangkok", "Naypyidaw", "Jakarta"],
    answer: 2
  },
  {
    question: "What is the capital of Namibia?🇳🇦",
    options: ["Pretoria", "Lusaka", "Harare", "Windhoek"],
    answer: 3
  },
  {
    question: "What is the capital of Nauru?🇳🇷",
    options: ["Suva", "Majuro", "Palikir", "Yaren"],
    answer: 3
  },
  {
    question: "What is the capital of Nepal?🇳🇵",
    options: ["Kathmandu", "Dhaka", "New Delhi", "Colombo"],
    answer: 0
  },
  {
    question: "What is the capital of Netherlands?🇳🇱",
    options: ["Brussels", "Strasbourg", "Amsterdam", "The Hague"],
    answer: 2
  },
  {
    question: "What is the capital of New Zealand?🇳🇿",
    options: ["Wellington", "Sydney", "Auckland", "Canberra"],
    answer: 0
  },
  {
    question: "What is the capital of Nicaragua?🇳🇮",
    options: ["San Jose", "San Salvador", "Managua", "Tegucigalpa"],
    answer: 2
  },
  {
    question: "What is the capital of Niger?🇳🇪",
    options: ["Lome", "Niamey", "Ouagadougou", "N'Djamena"],
    answer: 1
  },
  {
    question: "What is the capital of Nigeria?🇳🇬",
    options: ["Abuja", "Lagos", "Accra", "Dakar"],
    answer: 0
  },
  {
    question: "What is the capital of North Macedonia?🇲🇰",
    options: ["Skopje", "Tirana", "Belgrade", "Podgorica"],
    answer: 0
  },
  {
    question: "What is the capital of Norway?🇳🇴",
    options: ["Copenhagen", "Stockholm", "Helsinki", "Oslo"],
    answer: 3
  },
  {
    question: "What is the capital of Oman?🇴🇲",
    options: ["Muscat", "Doha", "Riyadh", "Manama"],
    answer: 0
  },
  {
    question: "What is the capital of Pakistan?🇵🇰",
    options: ["Islamabad", "Lahore", "Karachi", "Kabul"],
    answer: 0
  },
  {
    question: "What is the capital of Palau?🇵🇼",
    options: ["Port Moresby", "Nauru", "Melekeok", "Apia"],
    answer: 2
  },
  {
    question: "What is the capital of Panama?🇵🇦",
    options: ["Santo Domingo", "San Juan", "San Salvador", "Panama City"],
    answer: 3
  },
  {
    question: "What is the capital of Papua New Guinea?🇵🇬",
    options: ["Port Moresby", "Suva", "Honiara", "Noumea"],
    answer: 0
  },
  {
    question: "What is the capital of Paraguay?🇵🇾",
    options: ["Buenos Aires", "Asuncion", "Montevideo", "Santiago"],
    answer: 1
  },
  {
    question: "What is the capital of Peru?🇵🇪",
    options: ["Bogota", "Quito", "Lima", "La Paz"],
    answer: 2
  },
  {
    question: "What is the capital of Philippines?🇵🇭",
    options: ["Bangkok", "Jakarta", "Manila", "Kuala Lumpur"],
    answer: 2
  },
  {
    question: "What is the capital of Poland?🇵🇱",
    options: ["Budapest", "Prague", "Warsaw", "Vienna"],
    answer: 2
  },
  {
    question: "What is the capital of Portugal?🇵🇹",
    options: ["Madrid", "Lisbon", "Barcelona", "Rome"],
    answer: 1
  },
  {
    question: "What is the capital of Qatar?🇶🇦",
    options: ["Muscat", "Doha", "Riyadh", "Manama"],
    answer: 1
  },
  {
    question: "What is the capital of Romania?🇷🇴",
    options: ["Sofia", "Bucharest", "Belgrade", "Kiev"],
    answer: 1
  },
  {
    question: "What is the capital of Russia?🇷🇺",
    options: ["Moscow", "St. Petersburg", "Kiev", "Astana"],
    answer: 0
  },
  {
    question: "What is the capital of Rwanda?🇷🇼",
    options: ["Nairobi", "Kampala", "Kigali", "Bujumbura"],
    answer: 2
  },
  {
    question: "What is the capital of Kosovo?🇽🇰",
    options: ["Moscow", "Belgrad", "Sarajevo", "Pristina"],
    answer: 3
  },
  {
    question: "What is the capital of Saint Kitts and Nevis?🇰🇳",
    options: ["Castries", "Bridgetown", "Basseterre", "Kingstown"],
    answer: 2
  },
  {
    question: "What is the capital of Saint Lucia?🇱🇨",
    options: ["Castries", "Bridgetown", "Basseterre", "Kingstown"],
    answer: 0
  },
  {
    question: "What is the capital of Saint Vincent and the Grenadines?🇻🇨",
    options: ["Castries", "Bridgetown", "Basseterre", "Kingstown"],
    answer: 3
  },
  {
    question: "What is the capital of Samoa?🇼🇸",
    options: ["Apia", "Nuku'alofa", "Suva", "Tarawa"],
    answer: 0
  },
  {
    question: "What is the capital of San Marino?🇸🇲",
    options: ["Vatican City", "Rome", "Valletta", "San Marino"],
    answer: 3
  },
  {
    question: "What is the capital of Sao Tome and Principe?🇸🇹",
    options: ["Luanda", "Praia", "Sao Tome", "Malabo"],
    answer: 2
  },
  {
    question: "What is the capital of Saudi Arabia?🇸🇦",
    options: ["Muscat", "Doha", "Riyadh", "Manama"],
    answer: 2
  },
  {
    question: "What is the capital of Senegal?🇸🇳",
    options: ["Dakar", "Banjul", "Bamako", "Accra"],
    answer: 0
  },
  {
    question: "What is the capital of Serbia?🇷🇸",
    options: ["Podgorica", "Tirana", "Belgrad", "Skopje"],
    answer: 2
  },
  {
    question: "What is the capital of Seychelles?🇸🇨",
    options: ["Victoria", "Port Louis", "Antananarivo", "Moroni"],
    answer: 0
  },
  {
    question: "What is the capital of Sierra Leone?🇸🇱",
    options: ["Abuja", "Monrovia", "Freetown", "Dakar"],
    answer: 2
  },
  {
    question: "What is the capital of Singapore?🇸🇬",
    options: ["Bangkok", "Jakarta", "Manila", "Singapore City"],
    answer: 3
  },
  {
    question: "What is the capital of Slovakia?🇸🇰",
    options: ["Budapest", "Prague", "Warsaw", "Bratislava"],
    answer: 3
  },
  {
    question: "What is the capital of Slovenia?🇸🇮",
    options: ["Zagreb", "Ljubljana", "Vienna", "Belgrade"],
    answer: 1
  },
  {
    question: "What is the capital of Solomon Islands?🇸🇧",
    options: ["Port Moresby", "Suva", "Honiara", "Noumea"],
    answer: 2
  },
  {
    question: "What is the capital of Somalia?🇸🇴",
    options: ["Nairobi", "Kampala", "Mogadishu", "Djibouti"],
    answer: 2
  },
  {
    question: "What is the capital of South Africa?🇿🇦",
    options: ["Pretoria", "Cape Town", "Johannesburg", "Durban"],
    answer: 0
  },
  {
    question: "What is the capital of South Sudan?🇸🇸",
    options: ["Kampala", "Nairobi", "Juba", "Addis Ababa"],
    answer: 2
  },
  {
    question: "What is the capital of Spain?🇪🇸",
    options: ["Lisbon", "Madrid", "Barcelona", "Rome"],
    answer: 1
  },
  {
    question: "What is the capital of Sri Lanka?🇱🇰",
    options: ["Male", "Dhaka", "New Delhi", "Colombo"],
    answer: 3
  },
  {
    question: "What is the capital of Sudan?🇸🇩",
    options: ["Cairo", "Khartoum", "Nairobi", "Riyadh"],
    answer: 1
  },
  {
    question: "What is the capital of Suriname?🇸🇷",
    options: ["Paramaribo", "Georgetown", "Cayenne", "Brasilia"],
    answer: 0
  },
  {
    question: "What is the capital of Sweden?🇸🇪",
    options: ["Copenhagen", "Stockholm", "Helsinki", "Oslo"],
    answer: 1
  },
  {
    question: "What is the capital of Switzerland?🇨🇭",
    options: ["Bern", "Vienna", "Zurich", "Geneva"],
    answer: 0
  },
  {
    question: "What is the capital of Syria?🇸🇾",
    options: ["Baghdad", "Damascus", "Amman", "Beirut"],
    answer: 1
  },
  {
    question: "What is the capital of Tajikistan?🇹🇯",
    options: ["Kabul", "Tashkent", "Dushanbe", "Bishkek"],
    answer: 2
  },
  {
    question: "What is the capital of Tanzania?🇹🇿",
    options: ["Nairobi", "Kampala", "Dodoma", "Lusaka"],
    answer: 2
  },
  {
    question: "What is the capital of Thailand🇹🇭?",
    options: ["Bangkok", "Jakarta", "Manila", "Kuala Lumpur"],
    answer: 0
  },
  {
    question: "What is the capital of Timor-Leste?🇹🇱",
    options: ["Dili", "Jayapura", "Port Moresby", "Suva"],
    answer: 0
  },
  {
    question: "What is the capital of Togo?🇹🇬",
    options: ["Lome", "Niamey", "Ouagadougou", "N'Djamena"],
    answer: 0
  },
  {
    question: "What is the capital of Tonga?🇹🇴",
    options: ["Apia", "Nuku'alofa", "Suva", "Tarawa"],
    answer: 1
  },
  {
    question: "What is the capital of Trinidad and Tobago?🇹🇹",
    options: ["Bridgetown", "Kingston", "Port of Spain", "Castries"],
    answer: 2
  },
  {
    question: "What is the capital of Tunisia?🇹🇳",
    options: ["Algiers", "Cairo", "Tunis", "Rabat"],
    answer: 2
  },
  {
    question: "What is the capital of Turkey?🇹🇷",
    options: ["Ankara", "Istanbul", "Athens", "Tbilisi"],
    answer: 0
  },
  {
    question: "What is the capital of Turkmenistan?🇹🇲",
    options: ["Kabul", "Tashkent", "Dushanbe", "Ashgabat"],
    answer: 3
  },
  {
    question: "What is the capital of Tuvalu?🇹🇻",
    options: ["Port Moresby", "Nauru", "Funafuti", "Apia"],
    answer: 2
  },
  {
    question: "What is the capital of Uganda?🇺🇬",
    options: ["Nairobi", "Kampala", "Kigali", "Bujumbura"],
    answer: 1
  },
  {
    question: "What is the capital of Ukraine?🇺🇦",
    options: ["Sofia", "Bucharest", "Belgrade", "Kiev"],
    answer: 3
  },
  {
    question: "What is the capital of United Arab Emirates?🇦🇪",
    options: ["Muscat", "Doha", "Riyadh", "Abu Dhabi"],
    answer: 3
  },
  {
    question: "What is the capital of United Kingdom?🇬🇧",
    options: ["London", "Manchester", "Birmingham", "Glasgow"],
    answer: 0
  },
  {
    question: "What is the capital of United States?🇺🇸",
    options: ["New York City", "Washington D.C.", "Los Angeles", "Chicago"],
    answer: 1
  },
  {
    question: "What is the capital of Uruguay?🇺🇾",
    options: ["Buenos Aires", "Asuncion", "Montevideo", "Santiago"],
    answer: 2
  },
  {
    question: "What is the capital of Uzbekistan?🇺🇿",
    options: ["Astana", "Tashkent", "Dushanbe", "Bishkek"],
    answer: 1
  },
  {
    question: "What is the capital of Vanuatu?🇻🇺",
    options: ["Port Moresby", "Suva", "Port Vila", "Honiara"],
    answer: 2
  },
  {
    question: "What is the capital of Vatican City?🇻🇦",
    options: ["Rome", "Vatican City", "Valletta", "San Marino"],
    answer: 1
  },
  {
    question: "What is the capital of Venezuela?🇻🇪",
    options: ["Bogota", "Quito", "Caracas", "Georgetown"],
    answer: 2
  },
  {
    question: "What is the capital of Vietnam?🇻🇳",
    options: ["Bangkok", "Hanoi", "Ho Chi Minh City", "Phnom Penh"],
    answer: 1
  },
  {
    question: "What is the capital of Yemen?🇾🇪",
    options: ["Sana'a", "Muscat", "Riyadh", "Aden"],
    answer: 0
  },
  {
    question: "What is the capital of Zambia?🇿🇲",
    options: ["Nairobi", "Kampala", "Lusaka", "Harare"],
    answer: 2
  },
  {
    question: "What is the capital of Zimbabwe?🇿🇼",
    options: ["Pretoria", "Harare", "Windhoek", "Gaborone"],
    answer: 1
  },
   {
    question: "What is the capital of Taiwan?🇹🇼",
    options: ["Xinbei", "Baotou", "Changhua", "Taipeh"],
    answer: 3
  },
   {
    question: "What is the capital of North Korea?🇰🇵",
    options: ["Pyongyang", "Kaechon", "Beijing", "Tokyo"],
    answer: 0
  },
   {
    question: "What is the capital of South Korea?🇰🇷",
    options: ["Busan", "Daejeon", "Seoul", "Beijing"],
    answer: 2
  },
];


const questionElement = document.getElementById("question");
const optionsContainer = document.getElementById("options-container");
const options = optionsContainer.getElementsByClassName("option");
const submitButton = document.getElementById("submit-btn");
const resultElement = document.getElementById("result");

let currentQuestion = 0;
let score = 0;
let questionsAsked = 0;
let shuffledQuizData = ([]);

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function loadQuestion() {
  if (shuffledQuizData.length === 0) {
    shuffledQuizData = shuffleArray([...quizData]);
  }

  const currentQuizData = shuffledQuizData[currentQuestion];
  questionElement.innerText = currentQuizData.question;

  for (let i = 0; i < options.length; i++) {
    options[i].innerText = currentQuizData.options[i];
    options[i].classList.remove("correct", "wrong");
  }
}

function selectOption() {
  for (let i = 0; i < options.length; i++) {
    options[i].addEventListener("click", function () {
      for (let j = 0; j < options.length; j++) {
        options[j].classList.remove("selected");
      }
      this.classList.add("selected");
    });
  }
}

function checkAnswer() {
  const selectedOption = optionsContainer.querySelector(".selected");
  if (!selectedOption) {
    return; // No option selected
  }

  const selectedAnswer = Array.from(options).indexOf(selectedOption);
  const currentQuizData = shuffledQuizData[currentQuestion];

  if (selectedAnswer === currentQuizData.answer) {
    score++;
    selectedOption.classList.add("correct");
  } else {
    selectedOption.classList.add("wrong");
    const correctOption = options[currentQuizData.answer];
    correctOption.classList.add("correct");
  }

  const selectedChoice = currentQuizData.options[selectedAnswer];
  const correctChoice = currentQuizData.options[currentQuizData.answer];

  resultElement.innerHTML += `Question ${currentQuestion + 1}: ${currentQuizData.question}<br>`;
  resultElement.innerHTML += `Your Answer: ${selectedChoice}<br>`;
  resultElement.innerHTML += `Correct Answer: ${correctChoice}<br><br>`;

  currentQuestion++;
  questionsAsked++;
  selectedOption.classList.remove("selected");

  if (currentQuestion < shuffledQuizData.length) {
    loadQuestion();
  } else {

    showResult();
  }

  showCorrectTotal();
}

function showResult() {
  questionElement.style.display = "none";
  optionsContainer.style.display = "none";
  submitButton.style.display = "none";

  let resultHTML = `Your score: ${score} out of ${questionsAsked}<br><br>`;
  resultHTML += "<strong>Selected Choices:</strong><br>";

  for (let i = 0; i < quizData.length; i++) {
    const currentQuizData = quizData[i];
    resultHTML += `Question ${i + 1}: ${currentQuizData.question}<br>`;
    resultHTML += `Your Answer: ${currentQuizData.options[currentQuizData.answer]}<br><br>`;
  }

  resultElement.innerHTML = resultHTML;
}

function showCorrectTotal() {
  const correctTotalElement = document.getElementById("correct-total");
  correctTotalElement.innerHTML = `Correct/Total questions asked: ${score}/${questionsAsked}`;
}

loadQuestion();
function selectOption() {
  for (let i = 0; i < options.length; i++) {
    options[i].addEventListener("click", function () {
      for (let j = 0; j < options.length; j++) {
        options[j].classList.remove("selected");
      }
      this.classList.add("selected");
      checkAnswer(); // Automatically check the answer when an option is selected
      loadNextQuestion(); // Load the next question after the answer is checked
    });
  }
}

function loadNextQuestion() {
  setTimeout(() => {
    if (currentQuestion < shuffledQuizData.length) {
      loadQuestion();
    } else {
      showQuizResult();
    }
  }, 1500); // Delay for 1.5 seconds before loading the next question or showing the result
}

submitButton.removeEventListener("click", checkAnswer); // Remove the click event listener from the submit button

loadQuestion();
selectOption();
showCorrectTotal();
