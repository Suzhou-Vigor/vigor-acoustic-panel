/* ============================================
   Product Data & Catalog Functions
   Suzhou Vigor New Materials Co., Ltd.
   ============================================ */

const products = [
  /* ---------- Wood Veneer Series ---------- */
  {
    id: 'wood-veneer-1',
    name: 'Eco Friendly Wooden Soundproof Board Wood Slat Acoustic Wall Panel Akupanel Sound Absorbing Panelling',
    nameZh: '环保木质隔音板木条吸音墙板Akupanel吸音板',
    category: 'wood-veneer',
    categoryName: 'Wood Veneer Series',
    description: 'Crafted with high-quality engineered surfaces, our wood veneer acoustic panels deliver the sophisticated look of natural wood while offering exceptional acoustic performance. Designed to effectively control sound reverberation and reduce echo, these panels combine modern aesthetic elegance with reliable durability for commercial and residential spaces.',
    descriptionZh: '采用高品质工程饰面打造的木饰面吸音板，呈现自然木纹的精致质感，同时具备出色的声学性能。有效控制混响、降低回声，兼具现代美学与可靠耐用性，适用于商业及住宅空间。',
    coverimage: 'image/product/wood-veneer-1/cover.jpg',
    images: [
      'image/product/wood-veneer-1/1.jpg',
      'image/product/wood-veneer-1/2.jpg',
      'image/product/wood-veneer-1/3.jpg',
      'image/product/wood-veneer-1/4.jpg',
      'image/product/wood-veneer-1/5.jpg',
      'image/product/wood-veneer-1/6.jpg'
    ],
    material: 'MDF, 100% Polyester Fiber',
    color: 'White Oak, Walnut, Walnut JK, Grey Oak, Black Oak, W.Oak, Smoke Oak',
    thickness: '21mm',
    size: '2400x600mm',
    nrc: '0.85 (NRC)',
    application: 'Conference Rooms, Auditoriums, Hotels, Offices, Home Theaters, Recording Studios...',
    features: [
      'Premium engineered wood veneer surface finish',
      'Excellent sound absorption across wide frequency range',
      'Eco-friendly PET fiber core, zero formaldehyde',
      'Easy installation with glue or direct screws',
      'Moisture resistant and dimensionally stable',
      'Available in multiple wood finishes and custom colors'
    ],
    details: 'Our Wood Veneer Acoustic Panels are crafted with high-quality engineered surfaces bonded to a high-density 100% polyester fiber acoustic core. Each panel undergoes precise cutting, edge sealing, and surface finishing to ensure consistent quality and aesthetic appeal. The micro-porous PET core effectively absorbs sound across a broad frequency spectrum, reducing reverberation and improving speech clarity. Custom sizes, colors, and groove patterns are available upon request.'
  },
  {
    id: 'wood-veneer-2',
    name: '3D Fluted Wood Veneer Acoustic Wall Panel for Home Theater',
    nameZh: '3D竖纹木饰面吸音墙板',
    category: 'wood-veneer',
    categoryName: 'Wood Veneer Series',
    description: 'Crafted with high-quality engineered surfaces, our wood veneer acoustic panels deliver the sophisticated look of natural wood while offering exceptional acoustic performance. Designed to effectively control sound reverberation and reduce echo, these panels combine modern aesthetic elegance with reliable durability for commercial and residential spaces.',
    descriptionZh: '采用高品质工程饰面打造的木饰面吸音板，呈现自然木纹的精致质感，同时具备出色的声学性能。有效控制混响、降低回声，兼具现代美学与可靠耐用性，适用于商业及住宅空间。',
    coverimage: 'image/product/wood-veneer-2/cover.jpg',
    images: [
      'image/product/wood-veneer-2/1.jpg',
      'image/product/wood-veneer-2/2.jpg',
      'image/product/wood-veneer-2/3.jpg',
      'image/product/wood-veneer-2/4.jpg',
      'image/product/wood-veneer-2/5.jpg',
      'image/product/wood-veneer-2/6.jpg'
    ],
    material: 'MDF, 100% Polyester Fiber',
    color: 'White Oak, Walnut, Walnut JK, Grey Oak, Black Oak, W.Oak, Smoke Oak',
    thickness: '21mm',
    size: '2400x600mm',
    nrc: '0.85 (NRC)',
    application: 'Conference Rooms, Auditoriums, Hotels, Offices, Home Theaters, Recording Studios...',
    features: [
      '3D fluted surface adds depth and visual interest',
      'Effective mid-to-high frequency sound absorption',
      'Warm wood veneer look with engineered surface',
      'Glue or screw mounting for quick installation',
      'Moisture resistant and easy to clean'
    ],
    details: 'The 3D fluted profile of this panel creates a rhythm of light and shadow on the wall while its 100% polyester fiber core quietly controls echo and reverberation. Ideal for media rooms where both acoustics and atmosphere matter.'
  },
  {
    id: 'wood-veneer-3',
    name: 'Grooved Wood Veneer Acoustic Slat Panel with PET Felt Backing for Office',
    nameZh: '凹槽木饰面吸音条板（PET吸音毡背衬）',
    category: 'wood-veneer',
    categoryName: 'Wood Veneer Series',
    description: 'Grooved wood veneer acoustic slat panel backed with high-density PET felt, engineered for office walls, reception areas, and corridors to reduce noise while adding a refined wood finish.',
    descriptionZh: '凹槽木饰面吸音条板，背衬高密度PET吸音毡，专为办公室墙面、前台接待区和走廊设计，降噪同时呈现精致木饰面质感。',
    icon: '🪵',
    pattern: 'diagonal-pattern',
    material: 'MDF, 100% Polyester Fiber',
    color: 'Walnut, White Oak, Black Oak, Smoke Oak, Custom RAL Colors',
    thickness: '18mm, 21mm',
    size: '600x2400mm, 600x1200mm, Custom Sizes Available',
    nrc: '0.80-0.95 (NRC)',
    application: 'Offices, Conference Rooms, Reception Areas, Corridors, Open-Plan Workplaces',
    features: [
      'Classic slat groove pattern with PET felt backing',
      'High sound absorption for noisy open-plan spaces',
      'Stable engineered surface, consistent color and grain',
      'Simple glue-up installation saves labor time',
      'Class B1 fire rating for commercial safety'
    ],
    details: 'Combining a slatted wood-veneer face with a dense PET felt backing, this panel delivers strong broadband absorption and a clean professional look. It is a popular choice for fit-out projects that demand both acoustic performance and a consistent, repeatable finish.'
  },
  {
    id: 'wood-veneer-4',
    name: 'Luxury White Oak Wood Veneer Acoustic Panel 21mm for Conference Room',
    nameZh: '豪华白橡木饰面吸音板21mm',
    category: 'wood-veneer',
    categoryName: 'Wood Veneer Series',
    description: 'Luxury white oak wood veneer acoustic panel in a premium 21mm thickness, offering elegant meeting room aesthetics with reliable sound control for boardrooms and executive offices.',
    descriptionZh: '豪华白橡木饰面吸音板，21mm 加厚规格，为董事会议室和高管办公室提供优雅外观与可靠的声学控制。',
    icon: '🪵',
    pattern: 'diagonal-pattern',
    material: 'MDF, 100% Polyester Fiber',
    color: 'White Oak',
    thickness: '21mm',
    size: '600x600mm, 600x1200mm, Custom Sizes Available',
    nrc: '0.80-0.90 (NRC)',
    application: 'Conference Rooms, Boardrooms, Executive Offices, Hotels, Law Firms',
    features: [
      'Premium white oak finish with elegant matte texture',
      '21mm thick construction for a solid premium feel',
      'Improves speech clarity in meeting spaces',
      'Zero formaldehyde PET fiber core',
      'Custom groove spacing available for branded walls'
    ],
    details: 'The 21mm profile gives this white oak panel a substantial, high-end presence while the polyester fiber core controls reverberation so conversations stay crisp. A refined choice for corporate interiors that represent your brand.'
  },

  /* ---------- PS Salt Series ---------- */
  {
    id: 'ps-salt',
    name: 'PS Salt Acoustic Panel',
    nameZh: 'PS盐晶吸音板',
    category: 'ps-salt',
    categoryName: 'PS Salt Series',
    description: 'Innovative acoustic panels featuring natural salt crystal elements embedded in a premium PS frame. Combining the health benefits of salt therapy with outstanding acoustic performance.',
    descriptionZh: '创新的吸音板，将天然盐晶元素嵌入优质PS框架中。结合盐疗的健康效益与出色的声学性能。',
    icon: '🧂',
    pattern: 'hex-pattern',
    material: 'PS Frame + Natural Himalayan Salt Crystals + Acoustic Fabric',
    color: 'White, Pink Salt, Grey, Beige, Custom Colors',
    thickness: '25mm, 40mm',
    size: '600x600mm, 600x1200mm',
    nrc: '0.80-0.90 (NRC)',
    application: 'Wellness Centers, Spas, Yoga Studios, Meditation Rooms, Healthcare Facilities, Luxury Residences',
    features: [
      'Natural Himalayan salt crystal inlay for air purification',
      'Negative ion release for improved indoor air quality',
      'Superior mid-to-high frequency sound absorption',
      'Unique aesthetic with backlighting capability',
      'Lightweight and easy to install',
      'Moisture regulating properties'
    ],
    details: 'The PS Salt Acoustic Panel merges acoustic engineering with wellness technology. Each panel features carefully selected Himalayan salt crystals embedded within a precision-molded PS frame backed by high-performance acoustic fabric. When illuminated, the translucent salt crystals create a warm, soothing amber glow that transforms any space into a sanctuary of calm.'
  },
  {
    id: 'ps-salt-2',
    name: 'PS Slat Acoustic Panel with Polyester Fiber for Living Room Decoration',
    nameZh: 'PS木条吸音板（涤纶吸音棉）',
    category: 'ps-salt',
    categoryName: 'PS Salt Series',
    description: 'PS slat acoustic panel combined with polyester fiber acoustic board, offering a trendy slatted look and effective sound absorption for living rooms, bedrooms, and home offices.',
    descriptionZh: 'PS木条吸音板搭配涤纶吸音板芯材，呈现时尚竖条格栅外观并有效吸音，适用于客厅、卧室和家庭办公空间。',
    icon: '🧂',
    pattern: 'hex-pattern',
    material: 'PS Frame + Polyester Fiber Acoustic Board',
    color: 'White, Walnut, Grey Oak, Black, Custom',
    thickness: '21mm',
    size: '600x600mm, 600x1200mm, Custom Sizes Available',
    nrc: '0.80-0.90 (NRC)',
    application: 'Living Rooms, Bedrooms, Home Offices, Apartments, TV Background Walls',
    features: [
      'Trendy PS slat design with wood-look finish',
      'Lightweight, easy DIY installation',
      'Effective sound absorption for residential spaces',
      'Water-resistant and low maintenance',
      'Affordable premium look for home decoration'
    ],
    details: 'This PS slat panel brings the popular slatted-wall aesthetic to residential interiors at a budget-friendly price. The polyester fiber core dampens everyday noise, making it a favorite for living room and TV wall projects.'
  },
  {
    id: 'ps-salt-3',
    name: 'Waterproof PS Slat Wood Grain Acoustic Wall Panel Easy Installation',
    nameZh: '防水PS木纹吸音墙板（易安装）',
    category: 'ps-salt',
    categoryName: 'PS Salt Series',
    description: 'Waterproof PS slat wall panel with realistic wood grain finish, quick and easy to install in kitchens, bathrooms, and other moisture-prone areas while providing acoustic comfort.',
    descriptionZh: '防水PS木纹吸音墙板，纹理逼真，安装快捷，适用于厨房、卫生间等潮湿区域，同时提供声学舒适度。',
    icon: '🧂',
    pattern: 'hex-pattern',
    material: 'Waterproof PS + Polyester Fiber',
    color: 'Wood Grain: Walnut, Oak, Grey, Custom',
    thickness: '18mm, 21mm',
    size: '600x2400mm, 600x1200mm, Custom Sizes Available',
    nrc: '0.80-0.90 (NRC)',
    application: 'Kitchens, Bathrooms, Balconies, Moisture-Prone Interiors, Restaurants',
    features: [
      '100% waterproof PS surface',
      'Realistic wood grain printing options',
      'Glue or screw installation in minutes',
      'No painting or sealing required',
      'Anti-mold and easy to wipe clean'
    ],
    details: 'Engineered for damp environments where traditional wood panels fail, this waterproof PS panel keeps the warmth of wood grain without swelling, warping, or mold growth. Ideal for kitchens, bathrooms, and cafe interiors.'
  },
  {
    id: 'ps-salt-4',
    name: 'Modern PS Acoustic Slat Panel NRC 0.9 for Hotel and Restaurant Interiors',
    nameZh: '现代PS吸音条板NRC 0.9',
    category: 'ps-salt',
    categoryName: 'PS Salt Series',
    description: 'Modern PS acoustic slat panel with a high NRC 0.9 rating, designed for hospitality environments where noise control and sophisticated design go hand in hand.',
    descriptionZh: '现代PS吸音条板，NRC 0.9 高吸音系数，专为酒店与餐饮环境设计，兼顾噪音控制与精致设计感。',
    icon: '🧂',
    pattern: 'hex-pattern',
    material: 'PS Frame + Polyester Fiber + Acoustic Fabric',
    color: 'White, Beige, Grey, Black, Custom',
    thickness: '25mm, 40mm',
    size: '600x600mm, 600x1200mm',
    nrc: '0.85-0.95 (NRC)',
    application: 'Hotels, Restaurants, Cafes, Bars, Lobbies, Event Spaces',
    features: [
      'High NRC 0.9 for busy hospitality spaces',
      'Elegant acoustic fabric backing',
      'Wide color range to match interior schemes',
      'Durable surface resists scratches and stains',
      'Quick installation with minimal disruption'
    ],
    details: 'In restaurants and hotel lobbies, reverberation ruins the atmosphere. This PS panel pairs a modern slat face with acoustic fabric to soak up noise while keeping the space visually warm and inviting.'
  },

  /* ---------- Hexagon Series ---------- */
  {
    id: 'hexagon-wood',
    name: 'Hexagon Wood Acoustic Panel',
    nameZh: '六边形木质吸音板',
    category: 'hexagon-wood',
    categoryName: 'Hexagon Series',
    description: 'Striking hexagonal wooden acoustic panels that create dynamic geometric wall patterns. Perfect for modern interiors seeking both visual impact and acoustic excellence.',
    descriptionZh: '引人注目的六边形木质吸音板，创造动态几何墙面图案。完美适用于追求视觉冲击力和声学卓越的现代室内空间。',
    icon: '⬡',
    pattern: 'hex-pattern',
    material: 'MDF/Wood Core + Acoustic Felt Backing',
    color: 'Walnut, Grey, Black, White, Custom Colors',
    thickness: '12mm, 15mm, 18mm',
    size: 'Hexagon 300mm (point-to-point), Custom Sizes',
    nrc: '0.70-0.90 (NRC)',
    application: 'Modern Offices, Creative Spaces, Retail Stores, Restaurants, Hotel Lobbies, TV Studios',
    features: [
      'Unique hexagonal shape for creative wall designs',
      'Modular system for endless pattern configurations',
      'Premium wood finish with acoustic felt backing',
      'Excellent mid-frequency sound absorption',
      'Can be mixed with different colors for artistic effects',
      'Simple clip-mount installation system'
    ],
    details: 'The Hexagon Wood Acoustic Panel brings geometry and acoustics together in perfect harmony. Each hexagonal module is precision-cut from high-quality MDF with a wood veneer or painted finish, backed by dense acoustic felt. Arrange panels in honeycomb clusters, flowing waves, gradient patterns, or scattered artistic compositions.'
  },
  {
    id: 'hexagon-wood-2',
    name: 'Hexagon 3D Acoustic Panel Honeycomb Design for Feature Wall',
    nameZh: '六边形3D吸音板蜂窝设计',
    category: 'hexagon-wood',
    categoryName: 'Hexagon Series',
    description: 'Hexagon 3D acoustic panel with a sculptural honeycomb design that turns any feature wall into a focal point while absorbing unwanted room echo.',
    descriptionZh: '六边形3D吸音板，蜂窝立体设计让背景墙成为视觉焦点，同时吸收室内多余回声。',
    icon: '⬡',
    pattern: 'hex-pattern',
    material: 'MDF + Polyester Fiber Acoustic Core',
    color: 'Walnut, White, Black, Grey, Custom',
    thickness: '12mm, 15mm, 18mm',
    size: 'Hexagon 300mm (point-to-point), Custom Sizes',
    nrc: '0.70-0.90 (NRC)',
    application: 'Feature Walls, TV Background Walls, Creative Spaces, Retail, Lobbies',
    features: [
      'Sculptural 3D honeycomb relief effect',
      'Modular tiles for seamless pattern assembly',
      'Strong mid-frequency absorption',
      'Lightweight and easy to arrange',
      'Multiple color mixing for gradient art walls'
    ],
    details: 'A statement piece for lobbies and living rooms, this honeycomb hexagon panel creates a three-dimensional wall installation that doubles as effective acoustic treatment.'
  },
  {
    id: 'hexagon-wood-3',
    name: 'Self-Adhesive Hexagon Acoustic Wall Panel High Density PET Felt',
    nameZh: '自粘六边形吸音墙板（高密度PET吸音毡）',
    category: 'hexagon-wood',
    categoryName: 'Hexagon Series',
    description: 'Self-adhesive hexagon acoustic panel made of high-density PET felt, peel-and-stick installation in seconds — perfect for bedrooms, studios, and kids rooms.',
    descriptionZh: '高密度PET吸音毡自粘六边形吸音板，撕开背胶数秒即可安装，非常适合卧室、录音室和儿童房。',
    icon: '⬡',
    pattern: 'hex-pattern',
    material: '100% Polyester Fiber (PET)',
    color: 'Grey, White, Black, Beige, Custom',
    thickness: '9mm, 12mm',
    size: 'Hexagon 200mm-300mm (point-to-point), Custom',
    nrc: '0.70-0.85 (NRC)',
    application: 'Bedrooms, Recording Studios, Kids Rooms, Offices, Playrooms',
    features: [
      'Peel-and-stick backing, no tools needed',
      'High-density PET felt is soft and safe',
      'Cuts echo and flutter in small rooms',
      'Fire retardant Class B1',
      'Easy to remove and reposition'
    ],
    details: 'With a simple peel-and-stick backing, this PET felt hexagon panel can be installed by anyone in minutes. Its soft, dense felt construction absorbs sound while adding a playful geometric accent to any room.'
  },
  {
    id: 'hexagon-wood-4',
    name: 'Decorative Hexagonal Acoustic Panel for Recording Studio and Game Room',
    nameZh: '装饰六边形吸音板（录音室/游戏房）',
    category: 'hexagon-wood',
    categoryName: 'Hexagon Series',
    description: 'Decorative hexagonal acoustic panel engineered for recording studios and game rooms, reducing harsh reflections with a bold modern geometric look.',
    descriptionZh: '装饰六边形吸音板，专为录音室和游戏房设计，以大胆的现代几何外观减少刺耳的声音反射。',
    icon: '⬡',
    pattern: 'hex-pattern',
    material: 'MDF + Acoustic Felt Backing',
    color: 'Walnut, Grey, Black, White, Custom',
    thickness: '12mm, 15mm',
    size: 'Hexagon 300mm (point-to-point), Custom Sizes',
    nrc: '0.70-0.90 (NRC)',
    application: 'Recording Studios, Game Rooms, Music Rooms, Home Offices, Streamer Rooms',
    features: [
      'Tames early reflections in small acoustic spaces',
      'Bold geometric style suits gaming setups',
      'Acoustic felt backing adds broadband absorption',
      'Custom color mixing for themed rooms',
      'Durable finish resists scuffs and marks'
    ],
    details: 'From podcast studios to gaming dens, this hexagonal panel delivers the acoustic polish creators need. Combine colors to design a wall that looks as good as the room sounds.'
  },

  /* ---------- Curved Flexible Series ---------- */
  {
    id: 'curved-flexible',
    name: 'Curved Flexible Acoustic Panel',
    nameZh: '曲面柔性吸音板',
    category: 'curved-flexible',
    categoryName: 'Curved Series',
    description: 'Flexible acoustic panels that can be curved and shaped to fit any surface contour. Ideal for architectural features, curved walls, columns, and creative ceiling designs.',
    descriptionZh: '可弯曲成型的柔性吸音板，适应任何表面轮廓。适用于建筑特色、曲面墙体、圆柱和创意天花设计。',
    icon: '🌀',
    pattern: 'wave-pattern',
    material: 'Flexible PET Fiber + Fabric Covering',
    color: 'Wide Range of Colors Available, Custom Printing Options',
    thickness: '9mm, 12mm, 15mm',
    size: '1200x2400mm Sheets, Custom Dimensions',
    nrc: '0.80-0.95 (NRC)',
    application: 'Architectural Features, Curved Walls, Auditoriums, Concert Halls, Theaters, Exhibition Spaces',
    features: [
      'Flexible design conforms to curved surfaces',
      'Can be bent to minimum radius of 300mm',
      'Available in endless color and fabric options',
      'Outstanding broadband sound absorption',
      'Lightweight yet durable construction',
      'Suitable for walls, ceilings, and suspended baffles'
    ],
    details: 'The Curved Flexible Acoustic Panel is engineered for architectural freedom. Made from a specialized PET fiber composite that maintains acoustic performance even when curved, these panels can be cold-bent to a minimum radius of 300mm without cracking, making them ideal for wrapping columns, creating flowing ceiling clouds, or forming organic wall features.'
  },
  {
    id: 'curved-flexible-2',
    name: 'Flexible Bendable Acoustic Panel 3D Wave Design for Curved Walls',
    nameZh: '柔性可弯曲3D波浪吸音板',
    category: 'curved-flexible',
    categoryName: 'Curved Series',
    description: 'Flexible bendable acoustic panel with a 3D wave design, allowing architects to create flowing curved walls and organic ceilings without sacrificing sound absorption.',
    descriptionZh: '柔性可弯曲吸音板，3D波浪造型让建筑师轻松打造流动的曲面墙体和有机天花，同时保持出色吸音性能。',
    icon: '🌀',
    pattern: 'wave-pattern',
    material: 'Flexible PET Fiber + Acoustic Fabric',
    color: 'Custom Fabric Colors, Custom Printing',
    thickness: '9mm, 12mm, 15mm',
    size: '1200x2400mm Sheets, Custom Dimensions',
    nrc: '0.80-0.95 (NRC)',
    application: 'Curved Walls, Ceiling Clouds, Auditoriums, Art Installations, Exhibition Booths',
    features: [
      'Cold-bendable to minimum radius of 300mm',
      '3D wave profile adds sculptural interest',
      'Broadband absorption even when curved',
      'Custom colors and fabric choices',
      'Lightweight for easy handling on site'
    ],
    details: 'This wave-profile flexible panel lets designers sculpt space. Whether forming a rippling lobby ceiling or a flowing acoustic wall, it keeps NRC performance intact while bent.'
  },
  {
    id: 'curved-flexible-3',
    name: 'Curved Wood Veneer Acoustic Panel MDF Flexible for Column Wrapping',
    nameZh: '曲面木饰面柔性吸音板（包柱用）',
    category: 'curved-flexible',
    categoryName: 'Curved Series',
    description: 'Flexible wood veneer acoustic panel with an MDF surface that bends around columns and pillars, bringing a seamless wood finish and acoustic control to circular structures.',
    descriptionZh: '柔性木饰面吸音板，MDF饰面可弯曲包覆圆柱和立柱，为圆形结构带来无缝木饰面与声学控制。',
    icon: '🌀',
    pattern: 'wave-pattern',
    material: 'Flexible MDF + PET Fiber',
    color: 'Wood Veneer Finishes: Walnut, Oak, Grey, Custom',
    thickness: '12mm, 15mm',
    size: '1200x2400mm Sheets, Custom Dimensions',
    nrc: '0.80-0.90 (NRC)',
    application: 'Columns, Pillars, Curved Reception Desks, Retail Displays, Circular Lobbies',
    features: [
      'Bends to wrap columns and circular surfaces',
      'Seamless wood veneer look on curves',
      'PET core absorbs sound around structures',
      'Precision-engineered for consistent bending',
      'Custom veneer finishes to match interiors'
    ],
    details: 'Columns are usually acoustic dead spots with hard, echoing surfaces. This flexible wood veneer panel wraps around them in a single flowing piece, turning pillars into design features that also absorb sound.'
  },
  {
    id: 'curved-flexible-4',
    name: 'Foldable Flexible Acoustic Panel PET Fiber for Arched Ceiling Installation',
    nameZh: '可折叠柔性PET吸音板（拱形天花）',
    category: 'curved-flexible',
    categoryName: 'Curved Series',
    description: 'Foldable flexible PET fiber acoustic panel designed for arched ceilings, domes, and theater walls where rigid panels cannot follow the geometry.',
    descriptionZh: '可折叠柔性PET吸音板，专为拱形天花、穹顶和剧院弧形墙面设计，刚性板材无法胜任的曲面它都能贴合。',
    icon: '🌀',
    pattern: 'wave-pattern',
    material: 'Foldable PET Fiber + Fabric Covering',
    color: 'Wide Color Range, Custom Printing',
    thickness: '9mm, 12mm',
    size: '1200x2400mm Sheets, Custom Dimensions',
    nrc: '0.80-0.95 (NRC)',
    application: 'Arched Ceilings, Domes, Theater Walls, Concert Halls, Religious Buildings',
    features: [
      'Conforms to arches, domes, and barrel vaults',
      'Lightweight, one-person installation',
      'Excellent broadband absorption on curved forms',
      'Custom fabric colors and prints',
      'Fire-rated Class B1 for public venues'
    ],
    details: 'Arched and domed ceilings are acoustically challenging. This foldable PET panel follows the curve naturally, delivering consistent absorption across the whole surface — ideal for theaters, halls, and landmark architecture.'
  },

  /* ---------- Special Shape Series ---------- */
  {
    id: 'special-shape',
    name: 'Special Shape Wood Acoustic Panel',
    nameZh: '异形木质吸音板',
    category: 'special-shape',
    categoryName: 'Special Shape Series',
    description: 'Custom-shaped wooden acoustic panels manufactured to your exact specifications. From abstract art forms to functional acoustic sculptures, we bring your vision to life.',
    descriptionZh: '按您的精确规格定制的异形木质吸音板。从抽象艺术形式到功能性声学雕塑，我们将您的愿景变为现实。',
    icon: '🔷',
    pattern: 'organic-pattern',
    material: 'Custom MDF/PET + Acoustic Core',
    color: 'Fully Customizable — Any Wood Finish, Stain, or Paint',
    thickness: 'Custom (12mm-50mm)',
    size: 'Fully Custom — CAD/CAM Manufactured',
    nrc: '0.70-0.95 (NRC, Design Dependent)',
    application: 'Feature Walls, Brand Spaces, Luxury Retail, Museums, Airports, Custom Architectural Projects',
    features: [
      'Fully customizable shapes and patterns',
      'CAD/CAM precision manufacturing',
      'Any wood finish, color, or texture available',
      'Can integrate lighting and acoustic elements',
      '3D relief and sculptural possibilities',
      'End-to-end project support from design to installation'
    ],
    details: 'The Special Shape Wood Acoustic Panel service is where craftsmanship meets customization. Our advanced CAD/CAM manufacturing facility can produce acoustic panels in virtually any shape, pattern, or configuration you can imagine — from flowing organic forms to precise geometric patterns, from subtle 3D relief textures to bold sculptural statements.'
  },
  {
    id: 'special-shape-2',
    name: 'Custom Shape 3D Acoustic Panel CAD/CAM Cut for Brand Feature Wall',
    nameZh: '定制异形3D吸音板（CAD/CAM切割）',
    category: 'special-shape',
    categoryName: 'Special Shape Series',
    description: 'Custom shape 3D acoustic panel precision-cut by CAD/CAM to carry your brand pattern, logo, or artwork on a feature wall that also performs acoustically.',
    descriptionZh: 'CAD/CAM精密切割的定制异形3D吸音板，将品牌图案、标志或艺术图形呈现在兼具声学性能的背景墙上。',
    icon: '🔷',
    pattern: 'organic-pattern',
    material: 'Custom MDF + PET/Acoustic Core',
    color: 'Fully Customizable Finishes',
    thickness: 'Custom (12mm-50mm)',
    size: 'Fully Custom — CAD/CAM Manufactured',
    nrc: '0.70-0.95 (NRC, Design Dependent)',
    application: 'Brand Feature Walls, Corporate Lobbies, Showrooms, Flagship Stores',
    features: [
      'Logos and brand patterns cut into panels',
      'CAD/CAM precision for repeatable geometry',
      '3D relief creates depth and shadow',
      'Full color and finish customization',
      'Acoustic performance built into the design'
    ],
    details: 'Turn your brand into architecture. We translate logos and patterns into precision-cut 3D acoustic panels that anchor reception areas and flagship stores with both identity and sound control.'
  },
  {
    id: 'special-shape-3',
    name: 'Pyramid Shaped Acoustic Treatment Panel for Studio and Auditorium',
    nameZh: '金字塔形吸音板（录音棚/礼堂）',
    category: 'special-shape',
    categoryName: 'Special Shape Series',
    description: 'Pyramid shaped acoustic treatment panel with a deep 3D profile, scattering and absorbing sound for recording studios, auditoriums, and broadcast rooms.',
    descriptionZh: '金字塔形声学处理板，立体深度轮廓可扩散并吸收声波，适用于录音棚、礼堂和演播室。',
    icon: '🔷',
    pattern: 'organic-pattern',
    material: 'Polyester Fiber + Acoustic Foam',
    color: 'Black, Grey, Custom Colors',
    thickness: '30mm, 50mm',
    size: 'Custom Sizes Available',
    nrc: '0.80-0.95 (NRC)',
    application: 'Recording Studios, Auditoriums, Broadcast Rooms, Music Halls, Home Theaters',
    features: [
      'Deep pyramid profile scatters reflections',
      'High absorption across critical frequencies',
      'Lightweight panels with simple mounting',
      'Professional look for studios and stages',
      'Custom dimensions to fit any layout'
    ],
    details: 'The pyramid profile breaks up standing waves and flutter echo in critical listening environments, while the porous core absorbs broadband noise. The standard choice for spaces where audio accuracy matters.'
  },
  {
    id: 'special-shape-4',
    name: 'Customized Geometric Acoustic Panel Special Cut for Luxury Retail',
    nameZh: '定制几何异形吸音板（高端零售）',
    category: 'special-shape',
    categoryName: 'Special Shape Series',
    description: 'Customized geometric acoustic panel with special-cut shapes for luxury retail and gallery interiors, delivering a bespoke look with built-in acoustic comfort.',
    descriptionZh: '定制几何异形吸音板，特殊切割造型用于高端零售与画廊空间，呈现独一无二的视觉效果并兼顾声学舒适度。',
    icon: '🔷',
    pattern: 'organic-pattern',
    material: 'Custom MDF + PET/Acoustic Core',
    color: 'Any Custom Finish and Color',
    thickness: 'Custom (12mm-50mm)',
    size: 'Fully Custom — CAD/CAM Manufactured',
    nrc: '0.70-0.95 (NRC, Design Dependent)',
    application: 'Luxury Retail, Museums, Art Galleries, Boutique Hotels, Showrooms',
    features: [
      'Bespoke geometric cuts for signature interiors',
      'Coordinates with lighting and display design',
      'Softens reverberation in large public halls',
      'Premium finishes matched to your palette',
      'Prototype and sampling support available'
    ],
    details: 'For interiors that must feel exclusive, we machine custom geometric panels that echo the design language of the space. Each installation is a one-off composition that quietly controls the acoustic environment.'
  }
];

// Product search and filter
function renderProductCards(filterCategory, searchQuery) {
  const grid = document.getElementById('products-grid');
  if (!grid) return;

  let filtered = products;

  if (filterCategory && filterCategory !== 'all') {
    filtered = filtered.filter(p => p.category === filterCategory);
  }

  if (searchQuery) {
    const q = searchQuery.toLowerCase();
    filtered = filtered.filter(p =>
      p.name.toLowerCase().includes(q) ||
      p.nameZh.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q) ||
      p.categoryName.toLowerCase().includes(q) ||
      p.material.toLowerCase().includes(q)
    );
  }

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div class="no-results animate-fade-in">
        <div class="no-results-icon">🔍</div>
        <h3>No Products Found</h3>
        <p>Try adjusting your search or filter criteria.</p>
      </div>
    `;
    return;
  }

  grid.innerHTML = filtered.map((p, i) => {
    // 兼容尚未添加 coverimage 的产品，避免报错，没图片的展示空白背景
    const coverSrc = p.coverimage ? p.coverimage : '';
    return `
      <a href="product-detail.html?id=${p.id}" class="product-card animate-fade-in-up delay-${(i % 4) + 1}">
        <div class="product-card-img" style="background: #f4f6f8;">
          ${coverSrc ? `<img src="${coverSrc}" alt="${p.name}" style="width: 100%; height: 100%; object-fit: cover;">` : ''}
        </div>
        <div class="product-card-body">
          <div class="product-card-category">${p.categoryName}</div>
          <h3>${p.name}</h3>
          <p>${p.description}</p>
          <span class="product-card-link">View Details →</span>
        </div>
      </a>
    `;
  }).join('');
}

// Detail images per product category (image/details folder)
const detailImages = {
  'wood-veneer': 'image/details/wood.jpg',
  'ps-salt': 'image/details/PS.jpg',
  'hexagon-wood': 'image/details/hexagon.jpg',
  'curved-flexible': 'image/details/flexible.jpg',
  'special-shape': 'image/details/special.jpg'
};

// Product detail
function renderProductDetail() {
  const params = new URLSearchParams(window.location.search);
  const productId = params.get('id');
  const product = products.find(p => p.id === productId);

  if (!product) {
    document.getElementById('product-detail-container').innerHTML = `
      <div class="no-results" style="padding:120px 0">
        <div class="no-results-icon">📦</div>
        <h3>Product Not Found</h3>
        <p>The product you are looking for does not exist.</p>
        <a href="products.html" class="btn btn-primary" style="margin-top:20px">Back to Products</a>
      </div>
    `;
    return;
  }

  document.title = `${product.name} - Suzhou Vigor`;
  document.getElementById('product-name').textContent = product.name;
  document.getElementById('product-category').textContent = product.categoryName;
  document.getElementById('product-description').textContent = product.description;

  // ========== 关键修改：动态渲染详情页主图 ==========
  const mainImgContainer = document.getElementById('product-main-img');
  if (mainImgContainer) {
    // 移除原有样式的 class，保留基础 container
    mainImgContainer.className = 'product-main-img'; 
    
    // 取第一张主图，如果没写 images 数组，则回退尝试取 coverimage
    let firstImageSrc = '';
    if (product.images && product.images.length > 0) {
      firstImageSrc = product.images[0];
    } else if (product.coverimage) {
      firstImageSrc = product.coverimage;
    }

    // 动态植入 img 标签，确保原有的左侧布局完美贴合
    if (firstImageSrc) {
      mainImgContainer.innerHTML = `<img id="main-product-image" src="${firstImageSrc}" alt="${product.name}" style="width: 100%; height: 100%; object-fit: cover; border-radius: 8px; display: block;">`;
    } else {
      mainImgContainer.innerHTML = ''; // 如果你还没配图片则留空
    }
  }

  // Update WhatsApp link
  const waLink = document.getElementById('whatsapp-product-link');
  if (waLink) {
    waLink.href = `https://wa.me/8613812831131?text=Hello, I am interested in ${encodeURIComponent(product.name)}. Please send me more information.`;
  }

  // Specs table (in product info column)
  const specsHTML = `
    <tr><td>Material</td><td>${product.material || '-'}</td></tr>
    <tr><td>Color Options</td><td>${product.color || '-'}</td></tr>
    <tr><td>Thickness</td><td>${product.thickness || '-'}</td></tr>
    <tr><td>Standard Size</td><td>${product.size || '-'}</td></tr>
    <tr><td>Sound Absorption</td><td>${product.nrc || '-'}</td></tr>
    <tr><td>Application</td><td>${product.application || '-'}</td></tr>
  `;
  document.getElementById('specs-table').innerHTML = specsHTML;

  // ========== 底部长图保持原样，不变 ==========
  const detailImg = document.getElementById('detail-image');
  if (detailImg) {
    detailImg.src = detailImages[product.category] || 'image/details/wood.jpg';
    detailImg.alt = `${product.name} - Detail Information`;
  }

  // ========== 关键修改：渲染左侧主图下方的 6 张缩略图 ==========
  const thumbsContainer = document.getElementById('product-thumbnails');
  if (thumbsContainer) {
    if (product.images && product.images.length > 0) {
      thumbsContainer.innerHTML = product.images.map((imgSrc, i) => `
        <div class="product-thumb ${i === 0 ? 'active' : ''}" style="padding: 0; overflow: hidden; border-radius: 4px; cursor: pointer;" onclick="switchThumbnail(this, '${imgSrc}')">
          <img src="${imgSrc}" style="width: 100%; height: 100%; object-fit: cover; display: block;">
        </div>
      `).join('');
    } else {
      // 没填 images 数组时清空占位符
      thumbsContainer.innerHTML = '';
    }
  }
}

// ========== 关键修改：点击缩略图切换图片而不是 Emoji ==========
function switchThumbnail(el, imgSrc) {
  document.querySelectorAll('.product-thumb').forEach(t => t.classList.remove('active'));
  el.classList.add('active');
  const mainImageEl = document.getElementById('main-product-image');
  if (mainImageEl) {
    mainImageEl.src = imgSrc;
  }
}

// Filter tabs on products page
document.addEventListener('DOMContentLoaded', () => {
  // Product search
  const searchInput = document.getElementById('product-search');
  if (searchInput) {
    searchInput.addEventListener('input', () => {
      const activeFilter = document.querySelector('.filter-tab.active')?.dataset.category || 'all';
      renderProductCards(activeFilter, searchInput.value);
    });
  }

  // Filter tabs
  document.querySelectorAll('.filter-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.filter-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const category = tab.dataset.category;
      const query = document.getElementById('product-search')?.value || '';
      renderProductCards(category, query);
    });
  });

  // Activate filter tab from URL category param (e.g. products.html?category=wood-veneer)
  const urlCategory = new URLSearchParams(window.location.search).get('category');
  if (urlCategory) {
    const targetTab = document.querySelector(`.filter-tab[data-category="${urlCategory}"]`);
    if (targetTab) {
      document.querySelectorAll('.filter-tab').forEach(t => t.classList.remove('active'));
      targetTab.classList.add('active');
    }
  }
});
