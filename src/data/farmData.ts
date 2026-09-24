export interface ProductItem {
  id: string;
  name: string;
  category: 'milk' | 'traditional';
  shortDesc: string;
  fullDesc: string;
  fatContent: string;
  snfContent: string;
  bestFor: string;
  packaging: string[];
  shelfLife: string;
  tag?: string;
  highlights: string[];
}

export interface BreedInfo {
  id: string;
  name: string;
  hindiName: string;
  origin: string;
  characteristics: string[];
  milkProfile: string;
  dailyYieldAvg: string;
  dietPreference: string;
  temperament: string;
  careRoutine: string;
}

export interface InfrastructureItem {
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  hygieneProtocol: string;
}

export const FARM_CONTACT = {
  name: 'Choudhary Dairy Farm',
  tagline: 'Farm-Fresh, Pure & Unadulterated Dairy in Delhi',
  address: 'Old Gardhi Mendu, Delhi',
  phone: '8860222844',
  formattedPhone: '+91 88602 22844',
  hours: '5:00 AM – 7:00 PM',
  days: 'Monday – Sunday (All 7 Days)',
  morningMilking: '5:00 AM – 7:30 AM',
  eveningMilking: '4:30 PM – 6:30 PM',
  whatsappUrl: 'https://wa.me/918860222844?text=Hello%20Choudhary%20Dairy%20Farm,%20I%20would%20like%20to%20enquire%20about%20your%20dairy%20products.',
};

export const PRODUCTS: ProductItem[] = [
  {
    id: 'fresh-milk',
    name: 'Fresh Milk',
    category: 'milk',
    shortDesc: 'Wholesome natural dairy milk fresh from the morning and evening milking sessions at our farm.',
    fullDesc: 'Our signature fresh milk is collected twice daily under sterile conditions. Completely free from preservatives, neutralizing agents, or synthetic additives. It retains its natural creaminess, essential proteins, and natural sweetness.',
    fatContent: '6.0% - 6.5%',
    snfContent: '9.0%',
    bestFor: 'Daily consumption for families, nutritious milk drinks, and traditional home cooking',
    packaging: ['1 Litre Pouch/Bottle', '2 Litre Can', '5 Litre Canister'],
    shelfLife: 'Best consumed within 24-48 hours (keep refrigerated below 4°C)',
    tag: 'Daily Essential',
    highlights: ['Milked twice daily', 'Zero synthetic chemicals', 'Unadulterated wholesome taste']
  },
  {
    id: 'cow-milk',
    name: 'Cow Milk',
    category: 'milk',
    shortDesc: 'Pure farm-fresh cow milk with a naturally gentle consistency, light texture, and pleasant sweetness.',
    fullDesc: 'Produced by our carefully nurtured indigenous cows raised in hygienic open barns. Our cow milk is naturally wholesome, easily digestible, and loved by children and elders alike. We maintain strict natural feeding routines without synthetic hormone boosters.',
    fatContent: '4.0% - 4.5%',
    snfContent: '8.5%',
    bestFor: 'Light breakfast beverages, tea and coffee, infant and elderly daily nutrition',
    packaging: ['1 Litre Bottle', '2 Litre Bottle', 'Daily Subscription Delivery'],
    shelfLife: 'Best consumed within 24-48 hours refrigerated',
    tag: 'Natural & Light',
    highlights: ['Naturally light & easy to digest', 'Golden tinge from carotene', 'Clean and gentle flavor']
  },
  {
    id: 'buffalo-milk',
    name: 'Buffalo Milk',
    category: 'milk',
    shortDesc: 'Rich, full-cream buffalo milk from our healthy Murrah buffaloes; thick, creamy, and deeply satisfying.',
    fullDesc: 'Sourced from well-groomed Murrah buffaloes fed on green berseem and protein-rich oil cakes. Rich in natural milk fats and solid-not-fat (SNF), giving it an unmistakably thick body and dense cream layer upon boiling.',
    fatContent: '7.0% - 8.0%',
    snfContent: '9.2% - 9.5%',
    bestFor: 'Rich aromatic tea, homemade thick curd, malai paneer, rabdi, and traditional sweets',
    packaging: ['1 Litre', '2 Litre', '5 Litre Bulk Cans'],
    shelfLife: 'Best consumed within 48 hours refrigerated',
    tag: 'High Cream & Thick',
    highlights: ['Rich creamy texture', 'High natural butterfat', 'Dense malai formation']
  },
  {
    id: 'curd',
    name: 'Fresh Curd (Dahi)',
    category: 'traditional',
    shortDesc: 'Traditional thick curd naturally cultured from pure dairy milk; velvety texture and balanced mild tang.',
    fullDesc: 'Prepared daily using fresh whole milk and active traditional culture. Naturally fermented without thickeners, gelatin, or stabilizers. It is thick enough to cut with a spoon with a soothing, authentic home-style aroma.',
    fatContent: '6.0% - 6.5%',
    snfContent: '9.0%',
    bestFor: 'Accompaniment with parathas, refreshing lassi, chaas, raita, and probiotic gut support',
    packaging: ['500g Container', '1 kg Earthen Matka / Pack', '2 kg Family Pack'],
    shelfLife: '4-5 days refrigerated at 2-6°C',
    tag: 'Probiotic & Thick',
    highlights: ['Naturally set traditional dahi', 'Zero artificial starch or gelatin', 'Rich spoonable consistency']
  },
  {
    id: 'butter',
    name: 'Farm Butter (Makhan)',
    category: 'traditional',
    shortDesc: 'Freshly churned farm butter with an authentic rural flavor and velvety, unctuous melt.',
    fullDesc: 'Crafted following classic dairy churning techniques from fresh sweet cream. Clean, pure, and free from industrial coloring agents, excessive salt, or preservatives. Delivers the authentic nostalgic taste of country butter.',
    fatContent: '80% - 82%',
    snfContent: '1.5%',
    bestFor: 'Hot parathas, sarson ka saag, warm rotis, and baking wholesome delicacies',
    packaging: ['250g Block', '500g Tub', '1 kg Fresh Pack'],
    shelfLife: '10-14 days refrigerated',
    tag: 'Handcrafted',
    highlights: ['Sweet cream churned', 'Natural pale color', 'Zero chemical preservatives']
  },
  {
    id: 'ghee',
    name: 'Dairy Ghee (Desi Ghee)',
    category: 'traditional',
    shortDesc: 'Aromatic slow-simmered pure dairy ghee with a rich golden color and fine granular (danedaar) texture.',
    fullDesc: 'Our ghee is prepared through traditional slow cooking of cultured dairy butter until all moisture evaporates, yielding a deeply fragrant, golden clarified butter. Renowned for its rich nutty aroma and granular texture.',
    fatContent: '99.7%',
    snfContent: '< 0.3%',
    bestFor: 'Daily cooking, tadka for dals, festival sweets, spreading on warm chapatis',
    packaging: ['500 ml Glass Jar', '1 Litre Glass Jar', '5 Litre Tin/Container'],
    shelfLife: '9-12 months stored in a cool, dry place',
    tag: 'Danedaar & Pure',
    highlights: ['Slow-simmered perfection', 'Granular (danedaar) texture', 'Long shelf-stable goodness']
  },
  {
    id: 'fresh-cream',
    name: 'Fresh Cream (Malai)',
    category: 'traditional',
    shortDesc: 'Dense, rich sweet cream skimmed directly from fresh whole milk; perfect for culinary delicacies.',
    fullDesc: 'Freshly separated from pure dairy milk without chemical homogenizers or stabilizers. Highly versatile in North Indian cooking, gravies, desserts, and fruit salads, bringing luxurious body and sweetness.',
    fatContent: '25% - 30%',
    snfContent: '6.5%',
    bestFor: 'Shahi paneer, creamy gravies, fruit cream, desserts, and coffee',
    packaging: ['250g Tub', '500g Tub'],
    shelfLife: '3-4 days refrigerated',
    tag: 'Rich & Natural',
    highlights: ['Thick natural viscosity', 'No artificial emulsifiers', 'Rich dairy aroma']
  }
];

export const BREEDS: BreedInfo[] = [
  {
    id: 'murrah-buffalo',
    name: 'Murrah Buffalo',
    hindiName: 'मुर्राह भैंस (Premier Dairy Breed)',
    origin: 'Haryana & Delhi NCR Region',
    characteristics: [
      'Deep jet-black coat with short, tightly curled spiral horns',
      'Broad chest, deep barrel body and well-developed prominent udder',
      'Highly adapted to the climate of northern India',
      'Produces milk with exceptionally high butterfat and solids'
    ],
    milkProfile: '7.0% - 8.5% butterfat, high protein & calcium, creamy sweet taste',
    dailyYieldAvg: '14 – 18 Litres/day under optimal nutritious diet',
    dietPreference: 'Green maize, berseem clover, wheat straw, mustard cake and cotton seed concentrate',
    temperament: 'Calm, peaceful, and thrives on gentle regular human handling and bathing',
    careRoutine: 'Twice daily washdown with clean water, daily brushing, shaded airy barn'
  },
  {
    id: 'sahiwal-desi-cow',
    name: 'Sahiwal & Indigenous Desi Cows',
    hindiName: 'साहीवाल एवं देशी गाय (Zebu Cattle)',
    origin: 'Indian Subcontinent (Indigenous Zebu)',
    characteristics: [
      'Reddish-brown or golden coat with loose skin and distinct dorsal hump',
      'Large drooping ears and majestic, calm demeanor',
      'High thermal tolerance suited for Delhi summers and winters',
      'Strong natural immune resistance to local weather changes'
    ],
    milkProfile: '4.0% - 4.8% butterfat, rich in natural beta-carotene and minerals',
    dailyYieldAvg: '10 – 14 Litres/day with wholesome natural fodder',
    dietPreference: 'Fresh green grasses, sorghum (chari), oats, dry bhusa, mineral salt licks',
    temperament: 'Gentle, affectionate, responsive to affectionate daily caretakers',
    careRoutine: 'Free-range barn exercise, dry sand bedding, regular veterinary health checks'
  }
];

export const INFRASTRUCTURE_FACILITIES: InfrastructureItem[] = [
  {
    title: 'Clean & Well-Ventilated Sheds',
    subtitle: 'Spacious Animal Living Quarters',
    description: 'Our animal stalls are designed with high-pitched roofs to ensure natural convective air cooling and continuous cross-ventilation, preventing heat stress during Delhi summers.',
    features: [
      'High-ceiling open-sided design with natural airflow',
      'Anti-slip grooved rubber flooring for joint and hoof comfort',
      'Separate resting and feeding zones cleaned continuously',
      'Misting and industrial fan systems during peak summer'
    ],
    hygieneProtocol: 'Sheds are swept, washed with high-pressure water, and disinfected with agricultural lime twice daily.'
  },
  {
    title: 'Hygienic Milking Parlor & Handling',
    subtitle: 'Pure & Contaminant-Free Extraction',
    description: 'Milking is performed under strict sanitary conditions. Before milking, each animal is gently cleaned, udders are washed with warm antiseptic solutions, and milk is collected directly into food-grade vessels.',
    features: [
      'Food-grade AISI 304 stainless steel milking cans and buckets',
      'Pre-milking teat sanitization and health inspection',
      'Double-mesh stainless steel filtration immediately upon extraction',
      'Zero human touch during transfer to storage containers'
    ],
    hygieneProtocol: 'All stainless steel cans, pipes, and strainers are sanitized with steam and food-grade cleansing agents before every session.'
  },
  {
    title: 'Nutritious Feed Preparation & Troughs',
    subtitle: 'Dedicated Fodder Mixing Station',
    description: 'We prepare fresh feed daily in a clean sheltered mixing area. Elevated glazed-tile mangers ensure the cattle do not eat fodder from muddy or dirty ground.',
    features: [
      'Elevated, smooth-tiled feed troughs cleaned before every meal',
      'Precision chaff-cutters for uniform fodder size and optimal chewing',
      'Separated storage for dry wheat straw (bhusa) preventing mold',
      'Automated float-valve clean drinking water bowls with 24/7 freshwater'
    ],
    hygieneProtocol: 'Feed troughs are swept clean of leftovers before new fresh greens are served to avoid souring or mold.'
  },
  {
    title: 'Rapid Chilling & Cold Chain Storage',
    subtitle: 'Preserving Freshness & Natural Nutrition',
    description: 'Fresh milk is filtered and immediately brought to controlled cool temperatures (under 4°C) to inhibit bacterial growth naturally without any preservative chemicals.',
    features: [
      'Stainless steel insulated milk cooling tanks',
      'Calibrated digital temperature monitoring logged twice daily',
      'Direct dispatch in insulated containers for local Delhi deliveries',
      'Zero chemical additives or synthetic shelf-life enhancers'
    ],
    hygieneProtocol: 'Chilling vessels are sanitized using a Clean-In-Place (CIP) cycle immediately after each batch dispatch.'
  }
];

export const QUALITY_PILLARS = [
  {
    title: 'Clean & Hygienic Care',
    description: 'Open, airy sheds, twice-daily washdowns, non-slip rubber mats, and routine veterinary inspections keep our animals healthy and happy.',
    metric: '2x Daily',
    metricLabel: 'Sanitization Cycles'
  },
  {
    title: 'Nutritious Feed & Fodder',
    description: 'Fed on seasonal green fodder (berseem, maize, sorghum), dry wheat straw, mustard cake, and clean deep borewell drinking water.',
    metric: '100% Green',
    metricLabel: '& Natural Nutrition'
  },
  {
    title: 'Zero Adulteration',
    description: 'No chemical hormones, synthetic thickeners, preservatives, or urea. Pure dairy just as nature intended, straight from the farm.',
    metric: '0%',
    metricLabel: 'Synthetic Chemicals'
  },
  {
    title: 'Strict Quality & Timing',
    description: 'Daily morning and evening batches ready right on time for our neighbors and customers in Old Gardhi Mendu and Delhi.',
    metric: '5 AM – 7 PM',
    metricLabel: 'Operating Hours'
  }
];

export const FAQS = [
  {
    question: 'Where is Choudhary Dairy Farm located?',
    answer: 'Choudhary Dairy Farm is located in Old Gardhi Mendu, Delhi. Visitors and customers are welcome during our operational hours from 5:00 AM to 7:00 PM.'
  },
  {
    question: 'What are the farm operating and milking hours?',
    answer: 'The farm is open from 5:00 AM to 7:00 PM daily. Morning milking takes place between 5:00 AM and 7:30 AM, and evening milking takes place from 4:30 PM to 6:30 PM.'
  },
  {
    question: 'How can I place an enquiry or order?',
    answer: 'You can directly call us at 8860222844, submit an enquiry via the online form on this website, or connect with us on WhatsApp with your required product and quantity.'
  },
  {
    question: 'Do you add any preservatives or water to the milk?',
    answer: 'Never. We take deep pride in offering 100% pure, unadulterated milk. No synthetic hormones, no milk-fat skimming, no water dilution, and no chemical preservatives.'
  },
  {
    question: 'Can visitors visit the farm to inspect animal hygiene and care?',
    answer: 'Yes! We believe in transparent farming practices. Families and visitors are welcome to visit our farm in Old Gardhi Mendu between 5:00 AM and 7:00 PM to see our clean sheds, healthy cattle, and feeding routines firsthand.'
  }
];
