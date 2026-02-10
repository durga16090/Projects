export const products = [
  {
    id: 1,
    name: 'Solar Panel Pro 400W',
    category: 'Solar Panels',
    description: 'High-efficiency monocrystalline solar panel with 25-year warranty',
    image: 'https://images.unsplash.com/photo-1509390541618-730d25d2d834?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1509390541618-730d25d2d834?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1589883661920-e62dc20858b1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1621377523170-03c3706d30d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
    ],
    new: true,
    specs: {
      power: '400W',
      efficiency: '21.5%',
      voltage: '47.8V',
      weight: '23.8kg',
      dimensions: '1956×992×35mm'
    },
    features: [
      'High efficiency monocrystalline cells',
      'Excellent low-light performance',
      '12-year product warranty',
      '25-year linear power warranty',
      'IP67 rated for weather resistance'
    ],
    applications: [
      'Residential rooftops',
      'Commercial installations',
      'Ground-mounted arrays'
    ]
  },
  {
    id: 2,
    name: 'Hybrid Inverter 5kW',
    category: 'Inverters',
    description: 'Advanced hybrid inverter with battery backup capability',
    image: 'https://images.unsplash.com/photo-1589883661920-e62dc20858b1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1589883661920-e62dc20858b1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1592840500050-257b3bdd0368?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
    ],
    new: false,
    specs: {
      power: '5kW',
      voltage: '230V',
      efficiency: '97.8%',
      weight: '15.2kg',
      dimensions: '430×310×145mm'
    },
    features: [
      'Hybrid technology with battery support',
      'MPPT tracking for maximum efficiency',
      'Built-in WiFi monitoring',
      'Multiple protection features',
      'Quiet operation'
    ],
    applications: [
      'Grid-tied systems',
      'Off-grid systems',
      'Backup power systems'
    ]
  },
  {
    id: 3,
    name: 'Lithium Battery 10kWh',
    category: 'Battery Storage',
    description: 'Premium lithium iron phosphate battery for home energy storage',
    image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1621377523170-03c3706d30d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
    ],
    new: true,
    specs: {
      capacity: '10kWh',
      voltage: '51.2V',
      cycles: '6000+',
      weight: '110kg',
      dimensions: '482×415×1337mm'
    },
    features: [
      'Long cycle life (6000+ cycles)',
      'LiFePO4 chemistry for safety',
      'Modular design for scalability',
      'Built-in BMS protection',
      '10-year warranty'
    ],
    applications: [
      'Home energy storage',
      'Peak shaving',
      'Backup power'
    ]
  },
  {
    id: 4,
    name: 'EV Charger Pro 7kW',
    category: 'EV Chargers',
    description: 'Smart Level 2 EV charger with mobile app control',
    image: 'https://images.unsplash.com/photo-1592840500050-257b3bdd0368?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1592840500050-257b3bdd0368?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1507492848828-56563d2958b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
    ],
    new: false,
    specs: {
      power: '7.2kW',
      voltage: '230V',
      current: '32A',
      weight: '6.8kg',
      dimensions: '300×180×120mm'
    },
    features: [
      'Smart charging with mobile app',
      'Type 2 connector',
      'RFID card support',
      'Load balancing capability',
      'Weather-resistant IP54 rating'
    ],
    applications: [
      'Residential garages',
      'Commercial parking',
      'Multi-unit dwellings'
    ]
  },
  {
    id: 5,
    name: 'Solar Panel Economy 300W',
    category: 'Solar Panels',
    description: 'Cost-effective polycrystalline solar panel for budget-conscious projects',
    image: 'https://images.unsplash.com/photo-1621377523170-03c3706d30d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1621377523170-03c3706d30d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1509390541618-730d25d2d834?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1589883661920-e62dc20858b1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
    ],
    new: false,
    specs: {
      power: '300W',
      efficiency: '18.2%',
      voltage: '37.2V',
      weight: '19.5kg',
      dimensions: '1650×992×35mm'
    },
    features: [
      'Polycrystalline silicon cells',
      'Competitive pricing',
      '10-year product warranty',
      '25-year power warranty',
      'Frameless design available'
    ],
    applications: [
      'Budget residential projects',
      'Agricultural applications',
      'Remote installations'
    ]
  },
  {
    id: 6,
    name: 'String Inverter 3kW',
    category: 'Inverters',
    description: 'Reliable string inverter for residential solar installations',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1589883661920-e62dc20858b1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1592840500050-257b3bdd0368?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
    ],
    new: false,
    specs: {
      power: '3kW',
      voltage: '230V',
      efficiency: '98.2%',
      weight: '12.5kg',
      dimensions: '400×300×135mm'
    },
    features: [
      'High efficiency MPPT tracking',
      'Multiple string inputs',
      'Integrated DC switch',
      'Built-in arc fault detection',
      'Transformerless design'
    ],
    applications: [
      'Residential rooftops',
      'Small commercial systems',
      'Carport installations'
    ]
  },
  {
    id: 7,
    name: 'Lead-Acid Battery 200Ah',
    category: 'Battery Storage',
    description: 'Deep-cycle lead-acid battery for off-grid applications',
    image: 'https://images.unsplash.com/photo-1507492848828-56563d2958b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1507492848828-56563d2958b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1621377523170-03c3706d30d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
    ],
    new: false,
    specs: {
      capacity: '200Ah',
      voltage: '12V',
      cycles: '800+',
      weight: '65kg',
      dimensions: '522×240×218mm'
    },
    features: [
      'Deep-cycle AGM technology',
      'Maintenance-free operation',
      'Spill-proof construction',
      'Low self-discharge rate',
      'Long service life'
    ],
    applications: [
      'Off-grid systems',
      'RV and marine',
      'Emergency backup'
    ]
  },
  {
    id: 8,
    name: 'DC Fast Charger 50kW',
    category: 'EV Chargers',
    description: 'High-power DC fast charger for commercial charging stations',
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1592840500050-257b3bdd0368?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1507492848828-56563d2958b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
    ],
    new: true,
    specs: {
      power: '50kW',
      voltage: '200-1000V',
      current: '125A',
      weight: '350kg',
      dimensions: '600×400×1500mm'
    },
    features: [
      'CCS and CHAdeMO compatibility',
      'Dynamic load management',
      'Remote monitoring capability',
      'Weather-resistant enclosure',
      'Intelligent cooling system'
    ],
    applications: [
      'Commercial charging stations',
      'Highway rest areas',
      'Fleet charging'
    ]
  }
];